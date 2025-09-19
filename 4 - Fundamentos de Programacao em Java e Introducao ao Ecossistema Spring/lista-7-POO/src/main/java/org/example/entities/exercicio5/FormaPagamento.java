package org.example.entities.exercicio5;

import java.math.BigDecimal;

public abstract class FormaPagamento {
    public abstract boolean validarPagamento();
    public abstract boolean processarPagamento(BigDecimal valor);
}
