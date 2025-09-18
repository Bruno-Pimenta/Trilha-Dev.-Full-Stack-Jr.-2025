import org.example.entities.Bicicleta;
import org.example.entities.Carro;
import org.example.entities.Trem;
import org.example.exceptions.VeiculoParadoException;
import org.example.exceptions.VelocidadeMaximaAtingidaException;
import org.junit.Test;
import org.junit.jupiter.api.Assertions;

public class VeiculoTest {

    @Test
    public void deveLancarExcecaoQuandoCarroAtingirVelocidadeMaxima() {
        Carro carro = new Carro();

        VelocidadeMaximaAtingidaException exception = Assertions.assertThrows(
                VelocidadeMaximaAtingidaException.class,
                () -> {
                    while (true) {
                        carro.acelerar();
                    }
                }
        );

        Assertions.assertEquals("O carro já está na velocidade máxima", exception.getMessage());
    }

    @Test
    public void deveLancarExcecaoQuandoCarroParar() {
        Carro carro = new Carro();

        VeiculoParadoException exception = Assertions.assertThrows(
                VeiculoParadoException.class,
                () -> carro.frear()
        );

        Assertions.assertEquals("O carro já está parado", exception.getMessage());
    }

    @Test
    public void deveLancarExcecaoQuandoTremAtingirVelocidadeMaxima() {
        Trem trem = new Trem();

        VelocidadeMaximaAtingidaException exception = Assertions.assertThrows(
                VelocidadeMaximaAtingidaException.class,
                () -> {
                    while (true) {
                        trem.acelerar();
                    }
                }
        );

        Assertions.assertEquals("O trem já está na velocidade máxima", exception.getMessage());
    }

    @Test
    public void deveLancarExcecaoQuandoTremParar() {
        Trem trem = new Trem();

        VeiculoParadoException exception = Assertions.assertThrows(
                VeiculoParadoException.class,
                () -> trem.frear()
        );

        Assertions.assertEquals("O trem já está parado", exception.getMessage());
    }

    @Test
    public void deveLancarExcecaoQuandoBicicletaAtingirVelocidadeMaxima() {
        Bicicleta bicicleta = new Bicicleta();

        VelocidadeMaximaAtingidaException exception = Assertions.assertThrows(
                VelocidadeMaximaAtingidaException.class,
                () -> {
                    while (true) {
                        bicicleta.acelerar();
                    }
                }
        );

        Assertions.assertEquals("A bicicleta já está na velocidade máxima", exception.getMessage());
    }

    @Test
    public void deveLancarExcecaoQuandoBicicletaParar() {
        Bicicleta bicicleta = new Bicicleta();

        VeiculoParadoException exception = Assertions.assertThrows(
                VeiculoParadoException.class,
                () -> bicicleta.frear()
        );

        Assertions.assertEquals("A bicicleta já está parada", exception.getMessage());
    }

    @Test
    public void carroDeveSerOPrimeiroAlcancarAVelocidaMaximaELancarExcecao() {
        Carro carro = new Carro();
        Trem trem = new Trem();
        Bicicleta bicicleta = new Bicicleta();

        VelocidadeMaximaAtingidaException exception = Assertions.assertThrows(
                VelocidadeMaximaAtingidaException.class,
                () -> {
                    while (true) {
                        trem.acelerar();
                        carro.acelerar();
                        bicicleta.acelerar();
                    }
                }
        );

        Assertions.assertEquals("A bicicleta já está na velocidade máxima", exception.getMessage());
    }

}
