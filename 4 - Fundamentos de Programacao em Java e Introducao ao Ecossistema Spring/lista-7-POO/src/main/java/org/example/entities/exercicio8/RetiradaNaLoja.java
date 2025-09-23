package org.example.entities.exercicio8;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Map;

public class RetiradaNaLoja extends EstrategiaDeEntrega implements CalculadoraFrete{
    private  static Map<String, BigDecimal> valorEntregaPorEstadoACada1Kg = Map.of(
            "MG", BigDecimal.valueOf(10.00),
            "SP", BigDecimal.valueOf(11.00),
            "RJ", BigDecimal.valueOf(12.00),
            "RS", BigDecimal.valueOf(18.00)
    );

    public RetiradaNaLoja() {
    }

    @Override
    public BigDecimal valorEntregaPorEstadoEPeso(String uf) {
        return this.valorEntregaPorEstadoACada1Kg.get(uf);
    }

    @Override
    public BigDecimal calcular(Pedido pedido) {
        return pedido.getPeso().multiply(valorEntregaPorEstadoEPeso(pedido.getEndereco().getUf())
        ).setScale(2, RoundingMode.HALF_EVEN);

    }
}
