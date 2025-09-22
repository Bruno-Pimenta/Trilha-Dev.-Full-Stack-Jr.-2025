package org.example.entities.exercicio6;

import org.example.exceptions.ValorInvalidoCupomException;
import java.math.BigDecimal;
import java.math.RoundingMode;

public class Cupom {
    private BigDecimal percentual;

    public Cupom(double percentual) {
        if(percentual<=0 || percentual>30.00){
            throw new ValorInvalidoCupomException("Valor do cupom deve ser positivo e no valor máximo de 30");
        }
        BigDecimal valor = BigDecimal.valueOf(percentual).setScale(2, RoundingMode.HALF_EVEN);
        this.percentual = valor;
    }

    public BigDecimal getPercentual() {
        return percentual;
    }
}
