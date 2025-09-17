package org.example.exceptions;

public class DescontoInvalidoException extends RuntimeException{
    public DescontoInvalidoException(String message) {
        super(message);
    }
}
