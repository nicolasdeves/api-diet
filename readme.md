### API Diet App


### Iniciar projeto (conhecimento)


npm init -y

npm i -D typescript

npm tsc --init

npm install -D @types/node

npm i fastify

npm install tsx -D //converte o código para js e roda a aplicação

### NSLint

npm i eslint@8 @rocketseat/eslint-config -D //instala o lint para padronizar código. Neste caso, utilizei um preset pronto da Rocketseat

npm install eslint-plugin-import --save-dev

npx eslint . --fix  //verifica o código e corrige-o

coloquei no package-loco para rodar o nslint ` "dev": "npx eslint . --fix && tsx watch src/server.ts" `

`Usar node 20`