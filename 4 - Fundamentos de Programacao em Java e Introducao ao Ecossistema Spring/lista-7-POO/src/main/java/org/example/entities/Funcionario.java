package org.example.entities;

import java.math.BigDecimal;

public abstract class Funcionario {
    protected String nome;
    protected BigDecimal salario;

    public Funcionario(String nome, BigDecimal salario) {
        if(nome == null || nome.equals("")){
            throw new IllegalArgumentException("Nome não pode ser nulo ou vazio.");
        }
        if(salario.compareTo(BigDecimal.valueOf(0.00))<0 || salario.compareTo(BigDecimal.valueOf(0.00))==0){
            throw new IllegalArgumentException("O salário não pode ser negativo ou igual a zero");
        }
        this.nome = nome;
        this.salario = salario;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        if(nome == null || nome.equals("")){
            throw new IllegalArgumentException("Nome não pode ser nulo ou vazio.");
        }
        this.nome = nome;
    }

    public BigDecimal getSalario() {
        return salario;
    }

    public void setSalario(BigDecimal salario) {
        if(salario.compareTo(BigDecimal.valueOf(0.00))<0){
            throw new IllegalArgumentException("Salario não pode ser negativo");
        }
        this.salario = salario;
    }

    public abstract BigDecimal calcularBonus();

}
