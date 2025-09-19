package org.example.exceptions;

public class CodigoBoletoInvalidoException extends RuntimeException{
    public CodigoBoletoInvalidoException(String message) {
        super(message);
    }
}
