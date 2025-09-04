# 🎬 Atividade 5 - Consumo de API com ReactJS

## 📌 Visão Geral

Este projeto é uma aplicação React criada com Vite que consome a API pública do TMDB.
A aplicação permite que usuários busquem filmes, visualizem informações detalhadas e montem uma lista personalizada de favoritos, com persistência no navegador via localStorage.

## 🚀 Funcionalidades

### 🔍 Página de Busca

Campo de texto para o usuário digitar o termo da busca.

Exibição da lista de resultados contendo:

* Pôster
* Título
* Ano
* Botão para ver detalhes
* Botão para marcar como favorito

### 📄 Paginação

Navegação entre páginas de resultados.

### 🎥 Página de Detalhes

Exibição completa das informações de um filme:

* Pôster
* Título 
* Sinopse
* Elenco
* Diretor
* Avaliação
* Botão para marcar como favorito

### ⭐ Lista de Favoritos

Botão para adicionar/remover filmes da lista de favoritos.

* Persistência dos favoritos utilizando localStorage.

### ⚙️ Tratamento de Erros & Loading

* Indicador de carregamento enquanto a API é consultada.
* Mensagens de erro quando ocorrerem falhas.

### 🛠️ Tecnologias Utilizadas

* React
* Vite
* TMDB API
* LocalStorage (para persistência dos favoritos)

### ⚙️ Configuração e Execução

1️⃣ Clonar o repositório

`git clone https://github.com/Bruno-Pimenta/Trilha-Dev.-Full-Stack-Jr.-2025.git`

2️⃣ Instalar dependências

`npm install`

3️⃣ Configurar variáveis de ambiente

No arquivo .env na raiz do projeto, adicione sua chave da API:
`VITE_API_KEY=SUA_CHAVE_AQUI`

4️⃣ Rodar a aplicação em modo de desenvolvimento
`npm run dev`

### A aplicação ficará disponível em:
👉 http://localhost:5173

### 📌 Observações

É necessário possuir uma chave válida da API TMDB.

Favoritos ficam salvos localmente no navegador e permanecem após o fechamento da aplicação.