import org.example.entities.exercicio5.Boleto;
import org.example.entities.exercicio5.CartaoCredito;
import org.example.entities.exercicio5.FormaPagamento;
import org.example.entities.exercicio5.Pix;
import org.example.exceptions.CodigoBoletoInvalidoException;
import org.example.exceptions.NumeroDeCartaoInvalidoException;
import org.example.exceptions.ValorInvalidoException;
import org.example.exceptions.OperacaoInvalidaException;
import org.junit.Test;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

public class FormaPagamentoTest {
    @Test(expected = OperacaoInvalidaException.class)
    public void deveLancarExcecaoQuandoPixEstaInativo() {
        Pix pix = new Pix("bruno@gmail.com");
        pix.setEstaAtivo(false);
        pix.processarPagamento(BigDecimal.valueOf(1000.00));
    }
    @Test(expected = OperacaoInvalidaException.class)
    public void deveLancarExcecaoQuandoTentarPagarBoletoVencido() {
        Boleto boleto = new Boleto("12345678901234567890123456789012345678901234567", LocalDate.of(2025, 8, 18));
        boleto.processarPagamento(BigDecimal.valueOf(1000.00));
    }

    @Test(expected = CodigoBoletoInvalidoException.class)
    public void deveLancarExcecaoQuandoCodigoBoletoInvalido() {
        Boleto boleto = new Boleto("12345678901234567890123456", LocalDate.of(2025, 8, 18));
    }

    @Test(expected = NumeroDeCartaoInvalidoException.class)
    public void deveLancarQuandoNumeroCartaoInvalido() {
        CartaoCredito cartaoCredito = new CartaoCredito("123456789123456");
    }

    @Test(expected = ValorInvalidoException.class)
    public void deveLancarSeAlgumValorForInvalido() {
        Pix pix = new Pix("bruno@gmail.com");
        CartaoCredito cartaoCredito = new CartaoCredito("1234567891234567");
        Boleto boleto = new Boleto("12345678901234567890123456789012345678901234567", LocalDate.of(2025, 12, 31));

        pix.processarPagamento(BigDecimal.valueOf(1000.00));
        cartaoCredito.processarPagamento(BigDecimal.valueOf(500.00));
        boleto.processarPagamento(BigDecimal.valueOf(-1.00));
    }

    @Test
    public void deveProcessarPagamentoAPosValidacaoEValorPositivo() {
        FormaPagamento pix = new Pix("bruno@gmail.com");
        FormaPagamento cartaoCredito = new CartaoCredito("1234567891234567");
        FormaPagamento boleto = new Boleto("12345678901234567890123456789012345678901234567", LocalDate.of(2025, 12, 31));
        List<FormaPagamento> listaDePagamentos = List.of(pix, cartaoCredito, boleto);

        for(FormaPagamento pagamento : listaDePagamentos){
            pagamento.processarPagamento(BigDecimal.valueOf(1000.00));
        }


    }


}
