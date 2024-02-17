# **Api para filmes - MongoDB**

* Descrição da Api
* Funcionalidade
* Bibliotecas Utilizadas
* Como rodar o projeto

---

## Descrição da Api

Fiz esse projeto quando estava estudando aplicação node.js, usei um dos meus lazeres favoritos como inspiração.

## Funcionalidade

É um Crud simples com as funcionalidades basicas, os dados podem ser inseridos, alterados ou deletados por requisição usando um Body Json

* GET - busca todos os filmes cadastrados
* POST - Insere o filme desejado
* DELETE - Deleta o filme selçecionado por ID
* PUT - Autera o filme de acordo com a necessidade e atualização

## Bibliotecas Utilizadas

* Express,
* Mongoose,
* Dotenv

## Como rodar o projeto

1. Clone o projeto;
2. abra sua ide na pasta do projeto
3. crie um um arquivo .env com o database acces do mongodb
4. de npm install
5. rode o projeto com o comando 'npm run dev'
6. e para ver a magica acontecer faca a requisição no postman ou no insominia com o seguinte body:

   `{    "title": "Episódio V – O Império Contra-Ataca",   "description": "Três anos após a destruição da Estrela da Morte, a Aliança Rebelde continua fugindo da ameaça do Império Galáctico, que manda sondas espiãs por toda a Galáxia em busca dos rebeldes. Uma das sondas vai para o planeta gelado de Hoth, onde a Aliança Rebelde montou a base Echo. Han Solo planeja partir para pagar o dinheiro que deve ao gangster Jabba the Hutt, embora tenha sentimentos pela Princesa Leia, que nega gostar dele.",     	  "image_url": "https://upload.wikimedia.org/wikipedia/pt/5/5c/The_Empire_Strikes_Back.jpg",   "trailer_ur": "https://www.youtube.com/watch?v=P8bq_zB201Y",   "genero": "Ficção Cientifica | Syfy"   }`
