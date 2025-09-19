package org.example.entities.exercicio5;

import java.math.BigDecimal;
import org.example.exceptions.NumeroDeCartaoInvalidoException;
import org.example.exceptions.OperacaoInvalidaException;
import org.example.exceptions.ValorInvalidoException;

public class CartaoCredito extends FormaPagamento{
    private String numeroCartao;
    private boolean estaBloqueado = false;

    public CartaoCredito(String numeroCartao) {
        if(numeroCartao != null && numeroCartao.matches("\\d{16}")) {
           this.numeroCartao = numeroCartao;
        }
        else{
            throw new NumeroDeCartaoInvalidoException("O número do cartão deve ter 16 dígitos numéricos");
        }
    }

    public void setEstaBloqueado(boolean estaBloqueado) {
        this.estaBloqueado = estaBloqueado;
    }

    @Override
    public boolean validarPagamento() {
        return estaBloqueado;
    }

    @Override
    public boolean processarPagamento(BigDecimal valor) {
        if(validarPagamento()){
            throw new OperacaoInvalidaException("Operação recusada: cartão bloqueado");
        }if(valor.compareTo(BigDecimal.ZERO)<=0){
            throw new ValorInvalidoException("O Valor deve ser positivo");
        }return true;
    }
}
