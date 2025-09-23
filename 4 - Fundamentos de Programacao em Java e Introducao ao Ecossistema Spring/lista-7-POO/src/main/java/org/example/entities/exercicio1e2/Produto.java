package org.example.entities.exercicio1e2;

import org.example.exceptions.DescontoInvalidoException;

import java.math.BigDecimal;

public class Produto {
    private String nome;
    private BigDecimal preco;
    private long quantidadeEmEstoque;

    public Produto(String nome, BigDecimal preco, long quantidadeEmEstoque) {
        setNome(nome);
        setPreco(preco);
        setQuantidadeEmEstoque(quantidadeEmEstoque);
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
        if(preco.compareTo(BigDecimal.ZERO)<0){
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

    public void aplicarDesconto(double porcentagem) {
        if(porcentagem<=0 || porcentagem>50){
            throw new DescontoInvalidoException("O valor do desconto deve estar entre 0 e 50 (inclusive)");
        }
        BigDecimal desconto = preco.multiply(BigDecimal.valueOf(porcentagem).divide(BigDecimal.valueOf(100)));
        setPreco(preco.subtract(desconto));
    }
}
