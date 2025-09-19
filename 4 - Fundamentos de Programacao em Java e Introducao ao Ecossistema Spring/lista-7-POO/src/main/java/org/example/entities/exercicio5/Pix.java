package org.example.entities.exercicio5;

import org.example.exceptions.ChavePixInvalidaException;
import org.example.exceptions.OperacaoInvalidaException;
import org.example.exceptions.ValorInvalidoException;

import java.math.BigDecimal;

public class Pix extends FormaPagamento{
    private String chavePix;
    private boolean estaAtivo = true;

    String emailRegex = "^[\\w._%+-]+@[\\w.-]+\\.[a-zA-Z]{2,}$";
    String cpfRegex = "^\\d{11}$";



    public Pix(String chavePix) {
        if(chavePix.matches(emailRegex) || chavePix.matches(cpfRegex)){
            this.chavePix = chavePix;
        }else{
            throw new ChavePixInvalidaException("Chave pix inválida");
        }
    }

    public void setEstaAtivo(boolean estaAtivo) {
        this.estaAtivo = estaAtivo;
    }

    @Override
    public boolean validarPagamento() {
        return estaAtivo;
    }

    @Override
    public boolean processarPagamento(BigDecimal valor) {
        if(validarPagamento()==false){
            throw new OperacaoInvalidaException("Operação recusada: cartão bloqueado");
        }if(valor.compareTo(BigDecimal.ZERO)<=0){
            throw new ValorInvalidoException("O Valor deve ser positivo");
        }return true;
    }
}
