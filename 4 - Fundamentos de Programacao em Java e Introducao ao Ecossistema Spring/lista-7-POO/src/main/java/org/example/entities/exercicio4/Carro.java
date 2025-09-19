package org.example.entities.exercicio4;

import org.example.exceptions.VeiculoParadoException;
import org.example.exceptions.VelocidadeMaximaAtingidaException;

public class Carro extends Veiculo implements IMeioTransporte{
    private final int VELOCIDADEMAXIMAEMMETROSPORSEGUNDO = 55;
    private final int ACELERACAOEMMETROSPORSEGUNDO = 3;
    private final int DESACELERACAOMETROSPORSEGUNDO = -7;

    public Carro() {
    }

    @Override
    public void acelerar() {
        if(super.getDeslocamento()==VELOCIDADEMAXIMAEMMETROSPORSEGUNDO){
            throw new VelocidadeMaximaAtingidaException("O carro já está na velocidade máxima");
        }else if(super.getDeslocamento()+ACELERACAOEMMETROSPORSEGUNDO>VELOCIDADEMAXIMAEMMETROSPORSEGUNDO){
            super.setDeslocamento(VELOCIDADEMAXIMAEMMETROSPORSEGUNDO);
        }else{
            super.setDeslocamento(super.getDeslocamento()+ACELERACAOEMMETROSPORSEGUNDO);
        }
    }

    @Override
    public void frear() {
        if(super.getDeslocamento()==0){
            throw new VeiculoParadoException("O carro já está parado");
        }else if(super.getDeslocamento()+DESACELERACAOMETROSPORSEGUNDO<=0){
            super.setDeslocamento(0);
        }else{
            super.setDeslocamento(super.getDeslocamento()+DESACELERACAOMETROSPORSEGUNDO);
        }
    }
}

