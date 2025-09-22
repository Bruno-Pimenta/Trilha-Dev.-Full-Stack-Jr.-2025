import org.example.entities.exercicio8.*;
import org.junit.Test;

import java.math.BigDecimal;
import java.math.RoundingMode;
import static org.junit.Assert.assertEquals;
public class CalculoFreteLambdasTest {

    @Test
    public void deveCalcularCorretamenteSedexParaMG() throws Exception {
        CalculadoraFrete sedexParaMG = pedido -> {
            return pedido.getPeso().multiply(
                    pedido.getEstrategiaDeEntrega().valorEntregaPorEstadoEPeso(pedido.getEndereco().getUf())
            ).setScale(2, RoundingMode.HALF_EVEN);
        };

        Sedex sedex = new Sedex();
        Endereco endereco = BuscaCep.buscarPorCep("37900900");

        Pedido pedido = new Pedido(BigDecimal.valueOf(50.00), BigDecimal.valueOf(2.00), endereco, sedex );

        BigDecimal valorEsperado = BigDecimal.valueOf(80.00).setScale(2, RoundingMode.HALF_EVEN);

        assertEquals(valorEsperado, sedexParaMG.calcular(pedido));
    }

    @Test
    public void deveCalcularCorretamentePacParaRJ() throws Exception {
        CalculadoraFrete pacParaRJ = pedido -> {
            return pedido.getPeso().multiply(
                    pedido.getEstrategiaDeEntrega().valorEntregaPorEstadoEPeso(pedido.getEndereco().getUf())
            ).setScale(2, RoundingMode.HALF_EVEN);
        };

        Pac pac = new Pac();
        Endereco endereco = BuscaCep.buscarPorCep("20211120");

        Pedido pedido = new Pedido(BigDecimal.valueOf(50.00), BigDecimal.valueOf(2.00), endereco, pac);

        BigDecimal valorEsperado = BigDecimal.valueOf(44.00).setScale(2, RoundingMode.HALF_EVEN);

        assertEquals(valorEsperado, pacParaRJ.calcular(pedido));
    }

    @Test
    public void deveCalcularCorretamenteRetiradaNaLojaParaSP() throws Exception {
        CalculadoraFrete pacParaSP = pedido -> {
            return pedido.getPeso().multiply(
                    pedido.getEstrategiaDeEntrega().valorEntregaPorEstadoEPeso(pedido.getEndereco().getUf())
            ).setScale(2, RoundingMode.HALF_EVEN);
        };

        RetiradaNaLoja retiradaNaLoja = new RetiradaNaLoja();
        Endereco endereco = BuscaCep.buscarPorCep("01014908");

        Pedido pedido = new Pedido(BigDecimal.valueOf(70.00), BigDecimal.valueOf(3.00), endereco, retiradaNaLoja);

        BigDecimal valorEsperado = BigDecimal.valueOf(33.00).setScale(2, RoundingMode.HALF_EVEN);

        assertEquals(valorEsperado, pacParaSP.calcular(pedido));
    }

    @Test
    public void taxaDeEntregaDeveSerGratuitaParaValoresMaioresQue200Reais() throws Exception {
        CalculadoraFrete sedexParaMG = pedido -> {
            if(pedido.getPreco().compareTo(BigDecimal.valueOf(200.00))>0){
                return BigDecimal.ZERO;
            }
            return pedido.getPeso().multiply(
                    pedido.getEstrategiaDeEntrega().valorEntregaPorEstadoEPeso(pedido.getEndereco().getUf())
            ).setScale(2, RoundingMode.HALF_EVEN);
        };

        Sedex sedex = new Sedex();
        Endereco endereco = BuscaCep.buscarPorCep("37900900");

        Pedido pedido = new Pedido(BigDecimal.valueOf(210.00), BigDecimal.valueOf(2.00), endereco, sedex );

        BigDecimal valorEsperado = BigDecimal.ZERO;

        assertEquals(valorEsperado, sedexParaMG.calcular(pedido));
    }


}
