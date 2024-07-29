# API de Gestão de Pedidos e Rotas

Este repositório contém uma API desenvolvida com Node.js e Express, destinada ao gerenciamento de pedidos e rotas de entrega. A API fornece endpoints para a criação e listagem de pedidos e rotas, além de uma funcionalidade para encontrar a melhor rota de entrega.

## O projeto:

- **`app.js`**: Configuração do servidor Express e definição das rotas usadas.
- **`__tests__/app.test.js`**: Testes de integração do projeto, onde foram utilizados jest e supertest.

## Sobre os endpoints da API

- **GET /pedidos**
  * Retorna a lista de pedidos.
  
- **POST /pedidos**
  * Cria um novo pedido.

- **GET /rotas**
  * Retorna a lista de rotas.

- **POST /rotas**
  * Cria uma nova rota.

- **GET /melhor-rota/:id**
  * Verifica a melhor rota de entrega com base na rota cadastrada especificada pelo id.

## Requisitos para executar o projeto

- Node.js
- npm

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/NiangZd/API-GQS

2. Navegue até o diretório do projeto:
    ```bash
    cd `seu-repositorio`

3. Instale as dependências:
    ```bash   
   Se ainda não instalou, execute: npm install

4. Logo após, execute um por um esses comandos: 
    ```bash
    npm init -y
    npm install express body-parser
    npm install --save-dev jest supertest

## Testes

1. **Para executar os testes:**
  Pode ser executado navegando até a pasta __test__ e executando o comando:
   ```bash
   npm test .\app.test.js