import org.example.entities.Produto;
import org.junit.Test;
import java.math.BigDecimal;

import static org.junit.Assert.assertEquals;

public class  ProdutoTest {

    @Test
    public void deveCriarProdutoValido() {
        Produto produto = new Produto("Notebook", BigDecimal.valueOf(3500.00), 10);
        assertEquals("Notebook", produto.getNome());
        assertEquals(BigDecimal.valueOf(3500.00), produto.getPreco());
        assertEquals(10, produto.getQuantidadeEmEstoque());
    }

    @Test(expected = IllegalArgumentException.class)
    public void deveLancarExcecaoQuandoNomeForNulo() {
       Produto produto = new Produto(null, BigDecimal.valueOf(100.00), 5);
    }

    @Test(expected = IllegalArgumentException.class)
    public void deveLancarExcecaoQuandoNomeForVazio() {
        Produto produto = new Produto("", BigDecimal.valueOf(100.00), 5);
    }

    @Test(expected = IllegalArgumentException.class)
    public void deveLancarExcecaoQuandoPrecoNegativo() {
        Produto produto = new Produto("Mouse", BigDecimal.valueOf(-10.00), 5);
    }

    @Test(expected = IllegalArgumentException.class)
    public void deveLancarExcecaoQuandoQuantidadeEmEstoqueNegativa() {
        Produto produto = new Produto("Teclado", BigDecimal.valueOf(100.00), -2);
    }

    // ==== Testes dos SETTERS ====

    @Test
    public void deveAlterarNomeComValorValido() {
        Produto produto = new Produto("Tablet", BigDecimal.valueOf(1500.00), 3);
        produto.setNome("Tablet Pro");
        assertEquals("Tablet Pro", produto.getNome());
    }

    @Test(expected = IllegalArgumentException.class)
    public void deveLancarExcecaoAoDefinirNomeInvalido() {
        Produto produto = new Produto("Tablet", BigDecimal.valueOf(1500.00), 3);
        produto.setNome("");
    }

    @Test
    public void deveAlterarPrecoComValorValido() {
        Produto produto = new Produto("Cadeira", BigDecimal.valueOf(200.00), 5);
        produto.setPreco(BigDecimal.valueOf(250.00));
        assertEquals(BigDecimal.valueOf(250.00), produto.getPreco());
    }

    @Test(expected = IllegalArgumentException.class)
    public void deveLancarExcecaoAoDefinirPrecoNegativo() {
        Produto produto = new Produto("Cadeira", BigDecimal.valueOf(200.00), 5);
        produto.setPreco(BigDecimal.valueOf(-50.00));
    }

    @Test
    public void deveAlterarQuantidadeComValorValido() {
        Produto produto = new Produto("Mesa", BigDecimal.valueOf(500.00), 2);
        produto.setQuantidadeEmEstoque(7);
        assertEquals(7, produto.getQuantidadeEmEstoque());
    }

    @Test(expected = IllegalArgumentException.class)
    public void deveLancarExcecaoAoDefinirQuantidadeNegativa() {
        Produto produto = new Produto("Mesa", BigDecimal.valueOf(500.00), 2);
        produto.setQuantidadeEmEstoque(-1);
    }
}
