package org.example.entities.exercicio5;

import org.example.exceptions.CodigoBoletoInvalidoException;
import org.example.exceptions.OperacaoInvalidaException;
import org.example.exceptions.ValorInvalidoException;

import java.math.BigDecimal;
import java.time.LocalDate;

public class Boleto extends FormaPagamento{
    private String codigoBoleto;
    private LocalDate dataDeVencimento;

    public Boleto(String codigoBoleto, LocalDate dataDeVencimento) {
        if(codigoBoleto != null && codigoBoleto.matches("\\d{47}")){
            this.codigoBoleto = codigoBoleto;
        }else{
            throw new CodigoBoletoInvalidoException("Código do boleto inválido");
        }
        this.dataDeVencimento = dataDeVencimento;
    }

    @Override
    public boolean validarPagamento() {
        return (dataDeVencimento.isEqual(LocalDate.now()) || dataDeVencimento.isAfter(LocalDate.now()));
    }

    @Override
    public boolean processarPagamento(BigDecimal valor) {
        if(validarPagamento()==false){
            throw new OperacaoInvalidaException("Operação recusada: boleto vencido");
        }if(valor.compareTo(BigDecimal.ZERO)<=0){
            throw new ValorInvalidoException("O Valor deve ser positivo");
        }return true;
    }
}
