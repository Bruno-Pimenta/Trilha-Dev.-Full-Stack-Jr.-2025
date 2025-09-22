package org.example.entities.exercicio8;

import java.math.BigDecimal;
import java.util.Map;

public class Sedex extends EstrategiaDeEntrega{
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
}
