package org.example.entities.exercicio8;

import java.math.BigDecimal;
import java.util.Map;

public class RetiradaNaLoja extends EstrategiaDeEntrega{
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
}
