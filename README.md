# Processo Seletivo Verzel
## ⚙️ Como Utilizar
1- Abra o terminal, clone o projeto e entre em sua pasta:
- `git clone git@github.com:Adadezer/PSVerzel.git`
- `cd PSVerzel`

2- Iremos primeiro subir o servidor backend, e depois o do frontend. Pra isso entre na pasta do backend, instale as dependências:

- `cd backend`
- `npm install`

3- O banco de dados usado no projeto é o MySQL, e o ORM é o Prisma, é necessário criar um arquivo `.env` na raiz da pasta backend, e adicionar as configurações para a criação do banco. Crie o arquivo e adicione o seguinte conteúdo:
```
DATABASE_URL="mysql://{usuário do banco}:{senha do banco}@localhost:3306/psverzel?schema=public"

APP_PORT=3001 
```
existe um arquivo de exemplo que poderá ser consultado

4- Será necessário criar também um arquivo na raiz da pasta backend chamado `jwt.evaluation.key`, esse arquivo serve para a autenticação do usuário no login, nesse arquivo insira uma senha qualquer. Existe um arquivo de exemplo que poderá ser consultado

5- Após criar o arquivo `.env` e adicionar as configurações, execute a migration para criar o banco com as tabelas e o usuário admin:

- `npx prisma migrate dev`

com esse comando será criado no mysql um banco de dados chamado psverzel com as tabelas User e Vehicles

6- Após criar o banco de dados, rode o servidor:

- `npm run dev`

será exibida a mensagem "Api rodando na porta 3001"

7- Com o backend rodando, abra outra aba no terminal para executar o frontend, partindo da pasta raiz do projeto (PSVerzel), digite no terminal:

- `cd frontend`

8- Dentro da pasta do frontend, entre na pasta chamada psverzel, e instale as dependências:

- `cd psverzel`
- `npm install`

9- Após, execute o projeto:

- `npm start`

O projeto começará a ser carregado e a página será aberta no browser

## 📌 Considerações

- O projeto não está completo até o momento, é possível somente cadastrar veículos preenchendo os campos, e exibi-los.
- O botão de imagem não está completo, é possível carregar uma foto, mas ela não é salva no banco de dados.
- Após cadastrar um veículo, atualize a página para exibi-lo na tela.
- A validação JWT não está completa, ela somente gera o token após o usuário fazer a requisição post, para verificar o token gerado é necessário fazer uma requisição post no postman (ou outro programa de preferência), com o json:
```
{
  "username": "admin",
  "password": "1234"
}
```
a resposta dessa requisição é um objeto com as chaves auth e token