package org.example.entities.exercicio8;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class Pedido {
    private BigDecimal preco;
    private BigDecimal peso;
    private Endereco endereco;
    private CalculadoraFrete estrategiaDeEntrega;

    public Pedido(BigDecimal preco, BigDecimal peso, Endereco endereco, CalculadoraFrete estrategiaDeEntrega) {
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

    public CalculadoraFrete getEstrategiaDeEntrega() {
        return estrategiaDeEntrega;
    }

    public void setEstrategiaDeEntrega(CalculadoraFrete estrategiaDeEntrega) {
        this.estrategiaDeEntrega = estrategiaDeEntrega;
    }

    public BigDecimal calcularFrete() {
        return estrategiaDeEntrega.calcular(this);
    }
}
