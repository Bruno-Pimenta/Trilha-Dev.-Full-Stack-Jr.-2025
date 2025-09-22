package org.example.entities.exercicio8;

import java.math.BigDecimal;

public abstract class EstrategiaDeEntrega {
    public EstrategiaDeEntrega() {
    }
    public abstract BigDecimal valorEntregaPorEstadoEPeso(String uf);
}

