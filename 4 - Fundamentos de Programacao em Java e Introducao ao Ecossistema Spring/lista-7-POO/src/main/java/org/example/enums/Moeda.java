package org.example.enums;

public enum Moeda {
    REAL(1),
    DOLAR(2),
    YUAN(3),
    EURO(4);

    private final int codigo;

    // Construtor privado (só o enum pode chamar)
    Moeda(int codigo) {
        this.codigo = codigo;
    }

    // Getter
    public int getCodigo() {
        return codigo;
    }

    // Buscar Moeda pelo código inteiro
    public static Moeda fromCodigo(int codigo) {
        for (Moeda moeda : Moeda.values()) {
            if (moeda.getCodigo() == codigo) {
                return moeda;
            }
        }
        throw new IllegalArgumentException("Código inválido para moeda: " + codigo);
    }
}
