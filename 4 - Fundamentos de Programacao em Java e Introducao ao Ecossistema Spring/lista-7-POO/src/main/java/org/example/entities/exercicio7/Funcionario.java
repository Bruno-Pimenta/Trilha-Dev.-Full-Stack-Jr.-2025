package org.example.entities.exercicio7;

import java.util.Objects;

public class Funcionario implements Identificavel<String> {
    private final String id;
    private final String nome;
    private final String cargo;

    public Funcionario(String id, String nome, String cargo) {
        this.id = id;
        this.nome = nome;
        this.cargo = cargo;
    }

    @Override
    public String getId() {
        return this.id;
    }

    public String getNome() {
        return this.nome;
    }

    public String getCargo() {
        return this.cargo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Funcionario that = (Funcionario) o;
        return id.equals(that.id) && nome.equals(that.nome) && cargo.equals(that.cargo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nome, cargo);
    }
}
