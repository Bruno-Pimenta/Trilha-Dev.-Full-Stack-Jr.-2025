package org.example.entities.exercicio8;

import java.math.BigDecimal;

public class Pedido {
    private BigDecimal preco;
    private BigDecimal peso;
    private Endereco endereco;
    private EstrategiaDeEntrega estrategiaDeEntrega;

    public Pedido(BigDecimal preco, BigDecimal peso, Endereco endereco, EstrategiaDeEntrega estrategiaDeEntrega) {
        this.preco = preco;
        this.peso = peso;
        this.endereco = endereco;
        this.estrategiaDeEntrega = estrategiaDeEntrega;
    }

    public BigDecimal getPreco() {
        return preco;
    }

    public void setPreco(BigDecimal preco) {
        this.preco = preco;
    }

    public BigDecimal getPeso() {
        return peso;
    }

    public void setPeso(BigDecimal peso) {
        this.peso = peso;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    public EstrategiaDeEntrega getEstrategiaDeEntrega() {
        return estrategiaDeEntrega;
    }

    public void setEstrategiaDeEntrega(EstrategiaDeEntrega estrategiaDeEntrega) {
        this.estrategiaDeEntrega = estrategiaDeEntrega;
    }
}
