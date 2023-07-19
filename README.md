# REST-API

O objetivo deste projeto é criar uma simples REST-API que replica algumas funções de login e registro, juntamente da leitura, remoção e atualização dos usuários.

## Características:

- Environment, Typescript, Nodemon setup
- MongoDB & Mongoose connect, criação de banco da Database
- Criação dos Controllers
- Criação dos Middlewares
- Autenticação baseada em cookies
- Create, Read, Update, Delete

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter os seguintes pré-requisitos instalados em sua máquina:

- Node.js (versão 14 ou superior)
- npm ou yarn

## Instalação

Siga as etapas abaixo para configurar e executar o projeto localmente:

1. Clone este repositório para o seu ambiente de desenvolvimento:

```
git clone https://github.com/pedrohxiv/rest-api.git
```

2. Navegue até o diretório do projeto:

```
cd rest-api
```

3. Instale as dependências do projeto:

```
npm install
# ou
yarn install
```

4. Configure o arquivo `.env` do projeto

```
MONGO_URL=<mongodb-server>
SECRET_KEY='<random-secret-key>'
```

Substitua `<mongodb-server>` pelo link de acesso ao mongodb e o `<random-secret-key>` por um token secreto.

5. Execute o projeto:

```
npm start
# ou
yarn start
```

Acesse o projeto no Thunder Client, Postman ou plataforma similar:

O projeto estará disponível no endereço http://localhost:3001.
