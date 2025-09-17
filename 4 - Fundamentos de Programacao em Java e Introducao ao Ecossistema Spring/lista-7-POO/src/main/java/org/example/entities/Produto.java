package org.example.entities;

import java.math.BigDecimal;

public class Produto {
    private String nome;
    private BigDecimal preco;
    private long quantidadeEmEstoque;

    public Produto(String nome, BigDecimal preco, long quantidadeEmEstoque) {
        if(nome == null || nome.equals("")){
            throw new IllegalArgumentException("Nome não pode ser nulo ou vazio.");
        }

        if(preco.compareTo(BigDecimal.valueOf(0.00))<0 || quantidadeEmEstoque<0){
            throw new IllegalArgumentException("Preço ou quantidade em estoque não podem ser negativos");
        }
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
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

    public BigDecimal getPreco() {
        return preco;
    }

    public void setPreco(BigDecimal preco) {
        if(preco.compareTo(BigDecimal.valueOf(0.00))<0){
            throw new IllegalArgumentException("Preço não pode ser negativo");
        }
        this.preco = preco;
    }

    public long getQuantidadeEmEstoque() {
        return quantidadeEmEstoque;
    }

    public void setQuantidadeEmEstoque(long quantidadeEmEstoque) {
        if(quantidadeEmEstoque<0){
            throw new IllegalArgumentException("Quantidade em estoque não pode ser negativo");
        }
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    @Override
    public String toString() {
        return  "Nome do produto = " + nome +
                ", preco = " + preco +
                ", quantidade em estoque = " + quantidadeEmEstoque;
    }
}
