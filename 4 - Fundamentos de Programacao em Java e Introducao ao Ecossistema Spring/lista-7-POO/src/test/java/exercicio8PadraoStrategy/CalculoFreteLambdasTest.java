package exercicio8PadraoStrategy;

import org.example.entities.exercicio8.*;
import org.junit.Test;

import java.math.BigDecimal;
import java.math.RoundingMode;
import static org.junit.Assert.assertEquals;
public class CalculoFreteLambdasTest {

    @Test
    public void deveCalcularCorretamenteSedexParaMG() throws Exception {

        Sedex sedex = new Sedex();
        Endereco endereco = BuscaCep.buscarPorCep("37900900");

        Pedido pedido = new Pedido(BigDecimal.valueOf(50.00), BigDecimal.valueOf(2.00), endereco, sedex );

        BigDecimal valorEsperado = BigDecimal.valueOf(80.00).setScale(2, RoundingMode.HALF_EVEN);

        assertEquals(valorEsperado, pedido.calcularFrete());
    }

    @Test
    public void deveCalcularCorretamentePacParaRJ() throws Exception {

        Pac pac = new Pac();
        Endereco endereco = BuscaCep.buscarPorCep("20211120");

        Pedido pedido = new Pedido(BigDecimal.valueOf(50.00), BigDecimal.valueOf(2.00), endereco, pac);

        BigDecimal valorEsperado = BigDecimal.valueOf(44.00).setScale(2, RoundingMode.HALF_EVEN);

        assertEquals(valorEsperado, pedido.calcularFrete());
    }

    @Test
    public void deveCalcularCorretamenteRetiradaNaLojaParaSP() throws Exception {

        RetiradaNaLoja retiradaNaLoja = new RetiradaNaLoja();
        Endereco endereco = BuscaCep.buscarPorCep("01014908");

        Pedido pedido = new Pedido(BigDecimal.valueOf(70.00), BigDecimal.valueOf(3.00), endereco, retiradaNaLoja);

        BigDecimal valorEsperado = BigDecimal.valueOf(33.00).setScale(2, RoundingMode.HALF_EVEN);

        assertEquals(valorEsperado, pedido.calcularFrete());
    }

    @Test
    public void taxaDeEntregaDeveSerGratuitaParaValoresMaioresQue200Reais() throws Exception {
        CalculadoraFrete estrategiaViaLambda = pedido -> {
            if(pedido.getPreco().compareTo(BigDecimal.valueOf(200.00))>0){
                return BigDecimal.ZERO;
            }
            return pedido.calcularFrete();
        };

        Endereco endereco = BuscaCep.buscarPorCep("37900900");

        Pedido pedido = new Pedido(BigDecimal.valueOf(210.00), BigDecimal.valueOf(2.00), endereco, estrategiaViaLambda);

        BigDecimal valorEsperado = BigDecimal.ZERO;

        assertEquals(valorEsperado, pedido.calcularFrete());
    }

    @Test
    public void deveSerPossivelTrocarAsEstrategiasParaUmMesmoObjeto() throws Exception {

        Endereco endereco = BuscaCep.buscarPorCep("90040000");
        CalculadoraFrete retiradaNaLoja = EstrategiaDeEntrega.obterEstrategia("retirada na loja");

        Pedido pedido = new Pedido(BigDecimal.valueOf(70.00), BigDecimal.valueOf(3.00), endereco, retiradaNaLoja);
        BigDecimal valorEsperado = BigDecimal.valueOf(54.00).setScale(2, RoundingMode.HALF_EVEN);
        assertEquals(valorEsperado, pedido.calcularFrete());

        CalculadoraFrete pac = EstrategiaDeEntrega.obterEstrategia("pac");
        pedido.setEstrategiaDeEntrega(pac);
        valorEsperado = BigDecimal.valueOf(84.00).setScale(2, RoundingMode.HALF_EVEN);
        assertEquals(valorEsperado, pedido.calcularFrete());

        CalculadoraFrete sedex = EstrategiaDeEntrega.obterEstrategia("sedex");
        pedido.setEstrategiaDeEntrega(sedex);
        valorEsperado = BigDecimal.valueOf(144.00).setScale(2, RoundingMode.HALF_EVEN);
        assertEquals(valorEsperado, pedido.calcularFrete());

    }

}
