package org.example.entities.exercicio8;

import java.math.BigDecimal;
import java.util.Map;

public class Pac extends EstrategiaDeEntrega{
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
}
