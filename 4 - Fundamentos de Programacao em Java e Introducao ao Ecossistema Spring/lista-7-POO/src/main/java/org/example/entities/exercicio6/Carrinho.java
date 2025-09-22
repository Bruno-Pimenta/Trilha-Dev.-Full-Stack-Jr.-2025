package org.example.entities.exercicio6;

import org.example.enums.Moeda;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.*;

public class Carrinho {
    private static long idAtual = 1;
    private long id;
    private List<ItemCarrinho> listaDeItens = new ArrayList<>();
    private Carrinho(List<ItemCarrinho> listaDeItens) {
        this.id = idAtual;
        idAtual +=1;
        this.listaDeItens = listaDeItens;
    }

    public Carrinho() {
        this.id = idAtual;
        idAtual +=1;
    }

    public Carrinho addItemCarrinho(ItemCarrinho itemCarrinho){
        List<ItemCarrinho> listaDeItensAtualizada = cloneListaDeItens(this.listaDeItens);
        listaDeItensAtualizada.add(itemCarrinho);
        return new Carrinho(List.copyOf(listaDeItensAtualizada));
    }

    public Carrinho removerItemCarrinho(ItemCarrinho itemCarrinho){
        List<ItemCarrinho> listaDeItensAtualizada = cloneListaDeItens(this.listaDeItens);
        listaDeItensAtualizada.removeIf(item -> item.getId() == itemCarrinho.getId());
        return new Carrinho(List.copyOf(listaDeItensAtualizada));
    }

    public Carrinho aplicarCupom(Cupom cupom) {
        BigDecimal percentual = cupom.getPercentual();
        if (percentual.compareTo(BigDecimal.ZERO) < 0 || percentual.compareTo(BigDecimal.valueOf(30)) > 0) {
            throw new IllegalArgumentException("Percentual de cupom inválido");
        }

        List<ItemCarrinho> listaDeItensAtualizada = new ArrayList<>();
        BigDecimal fator = BigDecimal.ONE.subtract(percentual.movePointLeft(2));

        for (ItemCarrinho itemCarrinho : listaDeItens) {
            BigDecimal precoAtual = itemCarrinho.getProduto().getPreco().getValor();

            BigDecimal novoValor = precoAtual.multiply(fator)
                    .setScale(2, RoundingMode.HALF_EVEN);

            Dinheiro dinheiro = new Dinheiro(novoValor, itemCarrinho.getProduto().getPreco().getMoeda());

            Produto produto = itemCarrinho.getProduto().clone();
            produto.setPreco(dinheiro);

            ItemCarrinho itemCarrinhoAtualizado = itemCarrinho.clone();
            itemCarrinhoAtualizado.setProduto(produto);

            listaDeItensAtualizada.add(itemCarrinhoAtualizado);
        }

        return new Carrinho(List.copyOf(listaDeItensAtualizada));
    }

    private List<ItemCarrinho> cloneListaDeItens(List<ItemCarrinho> listaDeItens){
        List<ItemCarrinho> listaDeItensAtualizada = new LinkedList<>();
        for(ItemCarrinho itemCarrinho : listaDeItens){
            Produto produto = itemCarrinho.getProduto().clone();
            ItemCarrinho novoItemCarrinho = itemCarrinho.clone();
            novoItemCarrinho.setProduto(produto);
            listaDeItensAtualizada.add(novoItemCarrinho);
        }
        return listaDeItensAtualizada;
    }

    public Map<Moeda, BigDecimal> valorTotalPorMoeda() {
        Map<Moeda, BigDecimal> valorTotalPorMoeda = new EnumMap<>(Moeda.class);

        for (Moeda moeda : Moeda.values()) {
            valorTotalPorMoeda.put(moeda, BigDecimal.ZERO);
        }

        for (ItemCarrinho itemCarrinho : listaDeItens) {
            Moeda moeda = itemCarrinho.getProduto().getPreco().getMoeda();
            BigDecimal subTotal = itemCarrinho.subTotal();
            BigDecimal valorAtual = valorTotalPorMoeda.get(moeda);
            valorTotalPorMoeda.put(moeda, valorAtual.add(subTotal.setScale(2, RoundingMode.HALF_EVEN)));
        }

        return valorTotalPorMoeda;
    }

}
