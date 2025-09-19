package org.example.exceptions;

public class NumeroDeCartaoInvalidoException extends RuntimeException{
    public NumeroDeCartaoInvalidoException(String message) {
        super(message);
    }
}
