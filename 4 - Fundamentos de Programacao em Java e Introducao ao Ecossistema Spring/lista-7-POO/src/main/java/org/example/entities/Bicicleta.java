package org.example.entities;

import org.example.exceptions.VeiculoParadoException;
import org.example.exceptions.VelocidadeMaximaAtingidaException;

public class Bicicleta extends Veiculo implements IMeioTransporte{
    private final int VELOCIDADEMAXIMAEMMETROSPORSEGUNDO = 8;
    private final int ACELERACAOEMMETROSPORSEGUNDO = 1;
    private final int DESACELERACAOMETROSPORSEGUNDO = -3;

    public Bicicleta() {
    }

    @Override
    public void acelerar() {
        if(super.getDeslocamento()==VELOCIDADEMAXIMAEMMETROSPORSEGUNDO){
            throw new VelocidadeMaximaAtingidaException("A bicicleta já está na velocidade máxima");
        }else if(super.getDeslocamento()+ACELERACAOEMMETROSPORSEGUNDO>VELOCIDADEMAXIMAEMMETROSPORSEGUNDO){
            super.setDeslocamento(VELOCIDADEMAXIMAEMMETROSPORSEGUNDO);
        }else{
            super.setDeslocamento(super.getDeslocamento()+ACELERACAOEMMETROSPORSEGUNDO);
        }
    }

    @Override
    public void frear() {
        if(super.getDeslocamento()==0){
            throw new VeiculoParadoException("A bicicleta já está parada");
        }else if(super.getDeslocamento()+DESACELERACAOMETROSPORSEGUNDO<=0){
            super.setDeslocamento(0);
        }else{
            super.setDeslocamento(super.getDeslocamento()+DESACELERACAOMETROSPORSEGUNDO);
        }
    }
}
