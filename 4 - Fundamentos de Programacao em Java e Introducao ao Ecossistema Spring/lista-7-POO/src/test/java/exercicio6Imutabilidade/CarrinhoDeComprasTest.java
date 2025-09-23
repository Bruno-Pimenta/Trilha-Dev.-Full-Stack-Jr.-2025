package exercicio6Imutabilidade;

import org.example.entities.exercicio6.*;
import org.example.enums.Moeda;
import org.example.exceptions.ValorZeroOuNegativoException;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

import java.math.BigDecimal;
import java.math.RoundingMode;


public class CarrinhoDeComprasTest {
    @Test(expected = ValorZeroOuNegativoException.class)
    public void deveLancarExcecaoQuandoDinheiroForCriadoComValorNegativo() {
        Dinheiro dinheiro = new Dinheiro(BigDecimal.valueOf(-1000.00), Moeda.REAL);
    }

    @Test(expected = IllegalArgumentException.class)
    public void deveLancarExcecaoQuandoDinheiroForCriadoComCampoNulo() {
        Dinheiro dinheiro = new Dinheiro(BigDecimal.valueOf(1000.00), null);
    }

    @Test(expected = ValorZeroOuNegativoException.class)
    public void deveLancarExcecaoQuandoValorDaQuantidadeDeItemCarrinhoForNegativoOuZero() {
        Dinheiro dinheiro = new Dinheiro(BigDecimal.valueOf(5000.00), Moeda.REAL);
        Produto produto = new Produto("Notebook", dinheiro);
        ItemCarrinho itemCarrinho = new ItemCarrinho(produto, -1);
    }

    @Test
    public void deveLancarCalcularCorretamenteOValorDosProdutosNoCarrinho() {
        Dinheiro dinheiro = new Dinheiro(BigDecimal.valueOf(5000.00), Moeda.REAL);
        Produto produto = new Produto("Notebook", dinheiro);
        ItemCarrinho itemCarrinho = new ItemCarrinho(produto, 6);
        Carrinho carrinho = new Carrinho();
        Carrinho novoCarrinho = carrinho.addItemCarrinho(itemCarrinho);

        BigDecimal valorEsperado = BigDecimal.valueOf(30000.00).setScale(2, RoundingMode.HALF_EVEN);

        assertEquals(valorEsperado, novoCarrinho.valorTotalPorMoeda().get(Moeda.REAL));
    }

    @Test
    public void deveLancarCalcularCorretamenteOValorDosProdutosNoCarrinhoComCupomDe30PorCento() {
        Dinheiro dinheiro = new Dinheiro(BigDecimal.valueOf(5000.00), Moeda.REAL);
        Produto produto = new Produto("Notebook", dinheiro);
        ItemCarrinho itemCarrinho = new ItemCarrinho(produto, 6);
        Carrinho carrinho = new Carrinho();
        Carrinho novoCarrinho = carrinho.addItemCarrinho(itemCarrinho);
        Cupom cupom = new Cupom(30);
        Carrinho carrinhoComDesconto = novoCarrinho.aplicarCupom(cupom);

        BigDecimal valorEsperado = BigDecimal.valueOf(21000.00).setScale(2, RoundingMode.HALF_EVEN);

        assertEquals(valorEsperado, carrinhoComDesconto.valorTotalPorMoeda().get(Moeda.REAL));
    }

    @Test
    public void deveLancarCalcularCorretamenteOValorDosProdutosNoCarrinhoQuandoRemovidoItem() {
        Dinheiro dinheiro1 = new Dinheiro(BigDecimal.valueOf(5000.00), Moeda.REAL);
        Produto produto1 = new Produto("Notebook", dinheiro1);
        ItemCarrinho itemCarrinho1 = new ItemCarrinho(produto1, 6);

        Dinheiro dinheiro2 = new Dinheiro(BigDecimal.valueOf(2000.00), Moeda.REAL);
        Produto produto2 = new Produto("Smartphone", dinheiro2);
        ItemCarrinho itemCarrinho2 = new ItemCarrinho(produto2, 5);

        Carrinho carrinho = new Carrinho();
        Carrinho carrinho1 = carrinho.addItemCarrinho(itemCarrinho1);
        Carrinho carrinho2 = carrinho1.addItemCarrinho(itemCarrinho2);
        Carrinho carrinho3 = carrinho2.removerItemCarrinho(itemCarrinho1);

        BigDecimal valorEsperado = BigDecimal.valueOf(10000.00).setScale(2, RoundingMode.HALF_EVEN);

        assertEquals(valorEsperado, carrinho3.valorTotalPorMoeda().get(Moeda.REAL));
    }


}
