### API Diet App


### Iniciar projeto (conhecimento)


npm init -y

npm i -D typescript

npm tsc --init

npm install -D @types/node

npm i fastify

npm install tsx -D //converte o código para js e roda a aplicação

npm i @fastify/cookie

### NSLint

npm i eslint@8 @rocketseat/eslint-config -D //instala o lint para padronizar código. Neste caso, utilizei um preset pronto da Rocketseat

npm install eslint-plugin-import --save-dev

npx eslint . --fix  //verifica o código e corrige-o

### TSUP

- npm i tsup -D


coloquei no package-loco para rodar o nslint ` "dev": "npx eslint . --fix && tsx watch src/server.ts" `

### Configurando knex sqlite3

- npm install knex --save

- npm install sqlite3 --save

### Usando knex

- knex init

- knex migrate:make migration_name

- knex migrate:latest

- knex migrate:rollback


### .env

- Instalar extensão dotenv

- npm i dotenv

- npm i zod

- Seguir o .env.example para criar um .env

### Vitest

- npm i vitest -D

- npm i supertest -D

- npm i -D @types/supertest

### Tecnologias utilizadas

- JS

- TS

- Node 20

- NSLint

- Knex

- Fastify

- Zod

- TSUp

- Testes automatizados