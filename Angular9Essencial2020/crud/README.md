# Visual Studio Code

## Plugin

- Material Icon Theme

## Inicializando o backend

Execute dentro da pasta crud/backend

```powershell
npm init -y
npm i json-server
```

Crie um arquivo chamado db.json

```javascript
{
    "products": [
        {
            "id": 1,
            "name": "Caneta BIC Preta",
            "price": 5.89
        },
        {
            "id": 2,
            "name": "Notebook Mac Pro",
            "price": 12000.89
        },
        {
            "id": 3,
            "name": "Samsung S20+",
            "price": 5000.89
        }
    ]
}
```

Altere a tag scripts no arquivo package.json

```javascript
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "json-server --watch db.json --port 3001"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "json-server": "^0.16.1"
  }
}
```

Execute no terminal o comando para iniciar o banco de dados.

```powershell
npm start
```

Abra o Postman e teste o backend.

[http://localhost:3001/products]

