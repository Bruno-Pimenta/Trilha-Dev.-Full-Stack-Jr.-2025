package exercicio7Generics;

import org.example.entities.exercicio7.*;
import org.example.exceptions.EntidadeNaoEncontradaException;

import java.util.List;
import java.util.NoSuchElementException;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class InMemoryRepositoryTest {
    @Test
    public void deveSalvarCorretamenteProdutoEFuncionario() {
        IRepository<Produto, Integer> produtoRepository = new InMemoryRepository<>();
        IRepository<Funcionario, String> funcionarioRepository = new InMemoryRepository<>();

        Produto produto1 = new Produto(1, "Caneta", 200.00);
        Funcionario funcionario1 = new Funcionario("dev001", "Bruno", "Desenvolvedor de Software");

        produtoRepository.salvar(produto1);
        funcionarioRepository.salvar(funcionario1);

        assertEquals(produto1, produtoRepository.getById(produto1.getId()).get());
        assertEquals(funcionario1, funcionarioRepository.getById(funcionario1.getId()).get());
    }

    @Test(expected = EntidadeNaoEncontradaException.class)
    public void deveLancarExcecaoQuandoTentarDeletarEntidadeQueNaoExiste() {
        IRepository<Produto, Integer> produtoRepository = new InMemoryRepository<>();

        Produto produto = new Produto(1, "Caneta", 200.00);
        produtoRepository.salvar(produto);
        Integer idNaoDeEntidadeNaoCadastrada = 2;

        produtoRepository.remover(idNaoDeEntidadeNaoCadastrada);
    }

    @Test(expected = NoSuchElementException.class)
    public void deveApagarCorretamenteEntidadeComIdValido() {
        IRepository<Funcionario, String> funcionarioRepository = new InMemoryRepository<>();

        Funcionario funcionario= new Funcionario("dev001", "Bruno", "Desenvolvedor de Software");

        funcionarioRepository.salvar(funcionario);
        Funcionario funcionarioSalvo = funcionarioRepository.getById(funcionario.getId()).get();
        funcionarioRepository.remover(funcionario.getId());
        funcionarioSalvo = funcionarioRepository.getById(funcionario.getId()).get();
    }

    @Test
    public void deveRetornarCorretamenteTodosProdutosCadastrados() {
        IRepository<Produto, Integer> produtoRepository = new InMemoryRepository<>();
        Produto produto1 = new Produto(1, "Caneta", 2.00);
        Produto produto2 = new Produto(2, "Lapiseira", 15.00);
        Produto produto3 = new Produto(3, "Caderno", 30.00);

        produtoRepository.salvar(produto1);
        produtoRepository.salvar(produto2);
        produtoRepository.salvar(produto3);
        int quantidadeDeProdutosSalvos = 3;

        List<Produto> produtos = produtoRepository.getAll();

        assertEquals(produto1, produtos.get(0));
        assertEquals(produto2, produtos.get(1));
        assertEquals(produto3, produtos.get(2));
        assertEquals(quantidadeDeProdutosSalvos, produtos.size());

    }

}
