package org.example.entities.exercicio3;

import java.math.BigDecimal;

public class Desenvolvedor extends Funcionario{
    private final double BONUS = 10;

    public Desenvolvedor(String nome, BigDecimal salario) {
        super(nome, salario);
    }

    @Override
    public BigDecimal calcularBonus(){
        return super.salario.multiply(BigDecimal.valueOf(BONUS/100));
    };
}
