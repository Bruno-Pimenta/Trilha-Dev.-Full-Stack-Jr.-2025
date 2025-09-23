package org.example.entities.exercicio8;

import org.example.exceptions.EstrategiaInvalidaException;

import java.math.BigDecimal;
import java.util.Map;

public abstract class EstrategiaDeEntrega  implements CalculadoraFrete{
    private static final Map<String, EstrategiaDeEntrega> estrategias = Map.of(
            "pac", new Pac(),
            "sedex", new Sedex(),
            "retiradanaloja", new RetiradaNaLoja()
    );
    public EstrategiaDeEntrega() {
    }
    public abstract BigDecimal valorEntregaPorEstadoEPeso(String uf);

    public static EstrategiaDeEntrega obterEstrategia(String estrategia){
        estrategia = estrategia.toLowerCase().replace(" ", "");
        if(estrategias.get(estrategia)==null){
            throw new EstrategiaInvalidaException("Estratégia Inválida");
        }
        return estrategias.get(estrategia);
    }
}

