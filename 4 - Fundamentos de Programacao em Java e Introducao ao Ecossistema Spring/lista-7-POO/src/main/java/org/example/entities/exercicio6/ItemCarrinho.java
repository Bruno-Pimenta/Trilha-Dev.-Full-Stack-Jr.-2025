package org.example.entities.exercicio6;

import org.example.exceptions.ValorZeroOuNegativoException;
import java.math.BigDecimal;
import java.math.RoundingMode;

public class ItemCarrinho implements Cloneable{
    private static long idAtual = 1;

    private long id;
    private Produto produto;
    private long quantidade;

    public ItemCarrinho(Produto produto, long quantidade) {
        if(quantidade<=0){
            throw new ValorZeroOuNegativoException("Quantidade não pode ser negativo ou Zero");
        }
        this.id = idAtual;
        idAtual +=1;
        this.produto = produto;
        this.quantidade = quantidade;
    }

    public long getId() {
        return id;
    }

    public Produto getProduto() {
        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    public BigDecimal subTotal(){
        Produto produto = this.produto;
        Dinheiro preco = produto.getPreco();
        return BigDecimal.valueOf(quantidade).multiply(preco.getValor()).setScale(2, RoundingMode.HALF_EVEN);
    }

    // Sobrescrevendo clone()
    @Override
    public ItemCarrinho clone() {
        try {
            return (ItemCarrinho) super.clone(); // chama clone() da classe Object
        } catch (CloneNotSupportedException e) {
            throw new AssertionError(); // nunca deve acontecer
        }
    }
}
