package org.example.entities.exercicio8;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Map;

public class Sedex extends EstrategiaDeEntrega implements CalculadoraFrete{
    private  static Map<String, BigDecimal> valorEntregaPorEstadoACada1Kg = Map.of(
            "MG", BigDecimal.valueOf(40.00),
            "SP", BigDecimal.valueOf(41.00),
            "RJ", BigDecimal.valueOf(42.00),
            "RS", BigDecimal.valueOf(48.00)
    );

    public Sedex() {
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
