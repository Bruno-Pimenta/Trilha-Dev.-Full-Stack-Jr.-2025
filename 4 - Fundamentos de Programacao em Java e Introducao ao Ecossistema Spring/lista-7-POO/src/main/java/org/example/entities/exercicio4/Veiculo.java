package org.example.entities.exercicio4;

public abstract class Veiculo {
    private int deslocamento;

    public Veiculo() {
        this.deslocamento = 0;
    }

    public int getDeslocamento() {
        return deslocamento;
    }

    public void setDeslocamento(int deslocamento) {
        this.deslocamento = deslocamento;
    }
}
