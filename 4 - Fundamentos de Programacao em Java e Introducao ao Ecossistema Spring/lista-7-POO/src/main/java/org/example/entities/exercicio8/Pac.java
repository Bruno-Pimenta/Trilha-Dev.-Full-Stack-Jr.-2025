package org.example.entities.exercicio8;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Map;

public class Pac extends EstrategiaDeEntrega implements CalculadoraFrete{
    private static Map<String, BigDecimal> valorEntregaPorEstadoACada1Kg = Map.of(
            "MG", BigDecimal.valueOf(20.00),
            "SP", BigDecimal.valueOf(21.00),
            "RJ", BigDecimal.valueOf(22.00),
            "RS", BigDecimal.valueOf(28.00)
    );

    public Pac() {
    }

    @Override
    public BigDecimal valorEntregaPorEstadoEPeso(String uf) {
        return this.valorEntregaPorEstadoACada1Kg.get(uf);
    }

    @Override
    public BigDecimal calcular(Pedido pedido) {
        return pedido.getPeso().multiply(
                valorEntregaPorEstadoEPeso(pedido.getEndereco().getUf())
        ).setScale(2, RoundingMode.HALF_EVEN);
    }
}
