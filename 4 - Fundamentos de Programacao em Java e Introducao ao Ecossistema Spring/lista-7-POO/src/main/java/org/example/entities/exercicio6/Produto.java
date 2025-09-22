package org.example.entities.exercicio6;

public class Produto implements Cloneable{
    private static long idAtual = 1;
    private long id;
    private String name;
    private Dinheiro preco;

    public Produto(String name, Dinheiro preco) {
        this.id = idAtual;
        idAtual +=1;
        this.name = name;
        this.preco = preco;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Dinheiro getPreco() {
        return preco;
    }

    public void setPreco(Dinheiro preco) {
        this.preco = preco;
    }

    /// Sobrescrevendo clone()
    @Override
    public Produto clone() {
        try {
            return (Produto) super.clone(); // chama clone() da classe Object
        } catch (CloneNotSupportedException e) {
            throw new AssertionError(); // nunca deve acontecer
        }
    }
}
