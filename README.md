# Todo list

Aplicação de lista de tarefas construida utilizando um banco de dados MYSQL, uma API RESTful e uma interface em React

Esse projeto foi feito para colocar em pratica varios conteudos estudados por mim até agora como contrução de APIs em Nodejs utilizando Express e Sequelize, criação de interfaces em React, Docker, banco de dados MYSQL.

## Descrição

Aplicação capaz de adicionar, editar, marca como concluida e remover tarefas.


### Caracteristicas

- API RESRful feita em Nodejs para realizar o CRUD(create, read, delete, update) de tarefas armazenadas em um banco de dados MYSQL.
- Interface construida em React.
- Docker compose para rodar as imagens do front-end, API e banco de dados.

[screen-capture.webm](https://user-images.githubusercontent.com/93946977/184506582-5f5800a4-2d57-4f98-b01e-e69460c49d6b.webm)

## Como executar localmente
#### Requisitos: Docker e docker compose

clonar este repositorio:
```bash
git clone https://github.com/viniciusym/Todo-list.git
```

Acessar o repositorio clonado:
```bash
cd Todo-list
```

Iniciar aplicação com o Docker compose:
```bash
docker-compose up -d
```
