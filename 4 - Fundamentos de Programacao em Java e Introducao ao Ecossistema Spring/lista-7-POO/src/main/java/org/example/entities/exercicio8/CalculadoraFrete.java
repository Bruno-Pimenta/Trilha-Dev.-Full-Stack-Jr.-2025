package org.example.entities.exercicio8;

import java.math.BigDecimal;

@FunctionalInterface
public interface CalculadoraFrete {
    BigDecimal calcular(Pedido pedido);
}

