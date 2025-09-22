package org.example.entities.exercicio8;

public class Endereco {
    private String cep;
    private String logradouro;
    private String bairro;
    private String localidade;
    private String uf;
    private String complemento;

    public String getUf() {
        return uf;
    }

    @Override
    public String toString() {
        return String.format("%s, %s, %s, %s - %s (CEP: %s)",
                logradouro, bairro, localidade, uf, complemento, cep);
    }
}
