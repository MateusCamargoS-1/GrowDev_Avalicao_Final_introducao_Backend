
# GrowDev Avaliação Final de Modulo

Este projeto consiste em uma aplicação simples usando Express.js que funciona como um backend para gerenciar usuários e suas mensagens. Inclui autenticação de usuários e autorização usando bcrypt para hash de senhas. Além disso, fornece funcionalidades para criar, ler, atualizar e excluir mensagens (recados).

## Como Começar

1. Clone este repositório em sua máquina local:

   ```bash
   git clone https://github.com/MateusCamargoS-1/GrowDev_AvaliacaoFinal_Modulo_Backend
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd <diretório-do-projeto>
   ```

3. Instale as dependências:

   ```bash
   yarn install
   ```

4. Inicie o servidor:

   ```bash
   yarn dev
   ```

   O servidor será iniciado na porta 3333 por padrão. Você pode alterar essa porta modificando a variável `port` no arquivo `index.js`.

## Endpoints

### Autenticação de Usuários

- **Cadastro**: `POST /signup`
  - Cria uma nova conta de usuário.
  - Corpo da Requisição:
    - `name`: Nome do usuário
    - `email`: Endereço de e-mail do usuário
    - `password`: Senha do usuário
  - Resposta:
    - `success`: Indica se a operação foi bem-sucedida
    - `message`: Mensagem descritiva

- **Login**: `POST /login`
  - Faz login de um usuário existente.
  - Corpo da Requisição:
    - `email`: Endereço de e-mail do usuário
    - `password`: Senha do usuário
  - Resposta:
    - `success`: Indica se a operação foi bem-sucedida
    - `message`: Mensagem descritiva

### Operações CRUD de Recados (Mensagens)

- **Criar Recado**: `POST /criarRecados`
  - Cria uma nova mensagem para um usuário.
  - Corpo da Requisição:
    - `userEmail`: Endereço de e-mail do usuário
    - `title`: Título da mensagem
    - `message`: Conteúdo da mensagem
  - Resposta:
    - `success`: Indica se a operação foi bem-sucedida
    - `message`: Mensagem descritiva
    - `data`: Informações sobre a mensagem criada

- **Ler Recados**: `GET /recados`
  - Recupera todas as mensagens.
  - Resposta:
    - `success`: Indica se a operação foi bem-sucedida
    - `message`: Mensagem descritiva
    - `data`: Lista de mensagens

- **Atualizar Recado**: `PUT /recados/:id`
  - Atualiza uma mensagem específica pelo seu ID.
  - Parâmetros da Requisição:
    - `id`: ID da mensagem a ser atualizada
  - Corpo da Requisição:
    - `title`: Título atualizado da mensagem
    - `message`: Conteúdo atualizado da mensagem
  - Resposta:
    - `success`: Indica se a operação foi bem-sucedida
    - `message`: Mensagem descritiva

- **Excluir Recado**: `DELETE /recados/:userEmail/:id`
  - Exclui uma mensagem específica pelo seu ID para um determinado usuário.
  - Parâmetros da Requisição:
    - `userEmail`: Endereço de e-mail do usuário
    - `id`: ID da mensagem a ser excluída
  - Resposta:
    - `success`: Indica se a operação foi bem-sucedida
    - `message`: Mensagem descritiva

### Endpoints Adicionais

- **Listar Usuários**: `GET /users`
  - Recupera uma lista de todos os usuários registrados.
  - Resposta:
    - `success`: Indica se a operação foi bem-sucedida
    - `message`: Mensagem descritiva
    - `data`: Lista de usuários

## Tecnologias Utilizadas

- Node.js
- Express.js
- Bcrypt.js
- CORS
