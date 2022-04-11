## Web service (API) para criação e listagem de usuário.

### Executando o projeto
- Ter instalado docker em sua
maquina
- criar arquivo .env de acordo com o arquivo .env.example
- executar em seu terminal o comando: ``` $ docker-compose up```

### Rotas 
- POST 
/users
body: ```{
	"name": "User example",
	"email": "example@mail.com",
	"password": "1234"
}```
response: 201

- GET
/users 
/users?limit=10&skip=10
response: 200
body response: ```{
	"users": [
		{
			"id": "5e6b0df7-9746-4ba1-9b14-6fb100f9b120",
			"name": "User example",
			"email": "example@mail.com"
		}
	]
}```

### Tecnologias
* Node.js
* Javascript
* PostgreSQL
* Sequelize
* Bcrypt
* Crypto
* Joi
* Docker