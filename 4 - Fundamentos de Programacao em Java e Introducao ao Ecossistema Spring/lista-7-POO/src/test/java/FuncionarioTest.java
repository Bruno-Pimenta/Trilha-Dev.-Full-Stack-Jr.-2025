import org.example.entities.Desenvolvedor;
import org.example.entities.Funcionario;
import org.example.entities.Gerente;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

import java.math.BigDecimal;
import java.util.List;

public class FuncionarioTest {
    @Test
    public void deveCalcularBonusGerente() {
        Funcionario gerente = new Gerente("Alice", BigDecimal.valueOf(10000));
        assertEquals(0, gerente.calcularBonus().compareTo(BigDecimal.valueOf(2000)));
    }

    @Test
    public void deveCalcularBonusDesenvolvedor() {
        Funcionario dev = new Desenvolvedor("Bruno", BigDecimal.valueOf(5000));
        assertEquals(0, dev.calcularBonus().compareTo(BigDecimal.valueOf(500)));
    }

    @Test(expected = IllegalArgumentException.class)
    public void deveLancarExcecaoSeNomeForNulo() {
        Gerente gerente = new Gerente(null, BigDecimal.valueOf(1000));
    }

    @Test(expected = IllegalArgumentException.class)
    public void deveLancarExcecaoSeNomeForVazio() {
        Desenvolvedor desenvolvedor = new Desenvolvedor("", BigDecimal.valueOf(1000));
    }

    @Test(expected = IllegalArgumentException.class)
    public void deveLancarExcecaoSeSalarioNegativo() {
        Gerente gerente = new Gerente("Alice", BigDecimal.valueOf(-500));
    }

    @Test(expected = IllegalArgumentException.class)
    public void deveLancarExcecaoSeSalarioZero() {
        Desenvolvedor desenvolvedor = new Desenvolvedor("Bruno", BigDecimal.ZERO);
    }

    @Test
    public void deveListarFuncionariosComBonusCorreto() {
        Funcionario gerente = new Gerente("Alice", BigDecimal.valueOf(10000));
        Funcionario dev = new Desenvolvedor("Bruno", BigDecimal.valueOf(5000));

        List<Funcionario> funcionarios = List.of(gerente, dev);

        assertEquals(0, funcionarios.get(0).calcularBonus().compareTo(BigDecimal.valueOf(2000)));
        assertEquals(0, funcionarios.get(1).calcularBonus().compareTo(BigDecimal.valueOf(500)));
    }
}
