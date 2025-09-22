package org.example.entities.exercicio7;

import org.example.exceptions.EntidadeNaoEncontradaException;

import java.util.*;

public class InMemoryRepository <T extends Identificavel<ID>, ID> implements IRepository<T,ID> {
    private Map<ID, T> repositorio = new HashMap<>();

    @Override
    public void salvar(T entidade) {
        repositorio.put(entidade.getId(), entidade);
    }

    @Override
    public Optional<T> getById(ID id) {
        return Optional.ofNullable(repositorio.get(id));
    }

    @Override
    public List<T> getAll() {
        return Collections.unmodifiableList(new ArrayList<>(repositorio.values()));
    }

    @Override
    public void remover(ID id){
        if(repositorio.remove(id) == null){
            throw new EntidadeNaoEncontradaException("Entidade nao encontrada");
        }
    };
}