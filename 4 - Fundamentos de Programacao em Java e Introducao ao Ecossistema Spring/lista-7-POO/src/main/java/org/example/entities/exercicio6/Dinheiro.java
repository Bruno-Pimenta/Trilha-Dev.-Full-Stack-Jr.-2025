package org.example.entities.exercicio6;

import org.example.enums.Moeda;
import org.example.exceptions.ValorZeroOuNegativoException;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Objects;

public class Dinheiro {
    private final BigDecimal valor;
    private final Moeda moeda;

    public Dinheiro(BigDecimal valor, Moeda moeda) {
        if (valor == null || moeda == null) {
            throw new IllegalArgumentException("Valor e moeda não podem ser nulos");
        }
        if (valor.compareTo(BigDecimal.ZERO) <= 0) {
            throw new ValorZeroOuNegativoException("Valor não pode ser negativo ou zero");
        }

        this.valor = valor.setScale(2, RoundingMode.HALF_EVEN);
        this.moeda = moeda;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public Moeda getMoeda() {
        return moeda;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Dinheiro dinheiro = (Dinheiro) o;
        return moeda == dinheiro.moeda;
    }

    @Override
    public int hashCode() {
        return Objects.hash(moeda);
    }
}
