package org.example.entities.exercicio3;

import java.math.BigDecimal;

public class Gerente extends Funcionario{
    private final double BONUS = 20;

    public Gerente(String nome, BigDecimal salario) {
        super(nome, salario);
    }

    @Override
    public BigDecimal calcularBonus(){
        return super.salario.multiply(BigDecimal.valueOf((BONUS/100)));
    };
}
