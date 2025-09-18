package org.example.entities;

import org.example.exceptions.VeiculoParadoException;
import org.example.exceptions.VelocidadeMaximaAtingidaException;

public class Trem extends Veiculo implements IMeioTransporte{
    private final int VELOCIDADEMAXIMAEMMETROSPORSEGUNDO = 55;
    private final int ACELERACAOEMMETROSPORSEGUNDO = 2;
    private final int DESACELERACAOMETROSPORSEGUNDO = -1;

    public Trem() {
    }

    @Override
    public void acelerar() {
        if(super.getDeslocamento()==VELOCIDADEMAXIMAEMMETROSPORSEGUNDO){
            throw new VelocidadeMaximaAtingidaException("O trem já está na velocidade máxima");
        }else if(super.getDeslocamento()+ACELERACAOEMMETROSPORSEGUNDO>VELOCIDADEMAXIMAEMMETROSPORSEGUNDO){
            super.setDeslocamento(VELOCIDADEMAXIMAEMMETROSPORSEGUNDO);
        }else{
            super.setDeslocamento(super.getDeslocamento()+ACELERACAOEMMETROSPORSEGUNDO);
        }
    }

    @Override
    public void frear() {
        if(super.getDeslocamento()==0){
            throw new VeiculoParadoException("O trem já está parado");
        }else if(super.getDeslocamento()+DESACELERACAOMETROSPORSEGUNDO<=0){
            super.setDeslocamento(0);
        }else{
            super.setDeslocamento(super.getDeslocamento()+DESACELERACAOMETROSPORSEGUNDO);
        }
    }
}
