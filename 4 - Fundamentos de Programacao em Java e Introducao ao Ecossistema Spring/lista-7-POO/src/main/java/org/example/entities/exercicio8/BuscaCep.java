package org.example.entities.exercicio8;

import org.example.exceptions.CepNaoEncontradoException;
import org.example.exceptions.FalhaAoConsultarCepException;
import org.example.exceptions.FormatoDoCepInvalidoException;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import com.google.gson.Gson;


public class BuscaCep {
    private static final String VIA_CEP_URL = "https://viacep.com.br/ws/%s/json/";

    public static Endereco buscarPorCep(String cep) throws Exception {
        String cepLimpo = cep.replaceAll("\\D", "");
        if (cepLimpo.length() != 8) {
            throw new FormatoDoCepInvalidoException("CEP deve ter 8 dígitos");
        }

        String url = String.format(VIA_CEP_URL, cepLimpo);

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .GET()
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        if (response.statusCode() != 200) {
            throw new FalhaAoConsultarCepException("Falha ao consultar CEP: HTTP " + response.statusCode());
        }

        String json = response.body();

        if (json.contains("\"erro\"")) {
            throw new CepNaoEncontradoException("CEP não encontrado");
        }

        Gson gson = new Gson();
        Endereco endereco = gson.fromJson(json, Endereco.class);
        return endereco;
    }

}
