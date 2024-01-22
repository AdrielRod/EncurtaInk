<h1 align="center">
  <img src="https://www.hisegseguranca.com.br/portaria-virtual/wp-content/uploads/2017/06/logo.png" width="300">
  <br>
  EncurtaInk
</h1>

<p align="center">
  <br/>
</p>

<h4 align="center">
  Projeto realizado através de um teste técnico da @Hiseg Soluções. Para a construção do aplicativo foi consumida uma api, no qual eu pude permitir que os usuários encurtem links. Além disso, o app conta com autenticação JWT.
</h4>

<p align="center">
  <a href="#technologies">Tecnologias</a>
</p>

<img src="https://media.discordapp.net/attachments/773386365311909938/1198795726411534438/Apresentacao_de_Persona_do_Usuario_Geometrico_Corporativo_Simples_em_Laranja_e_Amarelo.png?ex=65c03485&is=65adbf85&hm=45af971f92503818082abd95525632bd6b7d2579a2e4b83225485173743ea681&=&format=webp&quality=lossless&width=821&height=462">


# Rodando o Projeto
Clone o repositório:
```bash
git clone https://github.com/AdrielRod/EncurtaInk.git
```

## Backend
Abra o projeto e em seguida, abra a pasta backend.
```bash
cd backend
```

Com o backend aberto, instale as dependencias.
```bash
npm install 
```

Com tudo instalado, incialize o servidor
```bash
npm run dev
```


---


## Tecnologias

O projeto foi criado com as seguintes tecnologias

- [Node](https://nodejs.org/docs/latest/api/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [CORS](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
- [JSONWebToken](https://www.npmjs.com/package/jsonwebtoken)

## Rotas
### /login
- POST
- A única rota da aplicação. Você deve enviar no corpo um JSON com apenas o email e password.

```ts
const response = await apiLogin.post('/login', {
    email,
    password,
});
```

Extraindo a response
```ts
const { name, token } = response.data;
```


## Api
- [Encurtador de Link](https://autocode.com/url/api/temporary/0.3.0/create/)
## Percurso

Possuo conhecimento razóavel na criação de apis, então pude realizar o básico e o necessário para tornar a autenticação com JWT possivel.

Simulei com variáveis um banco de dados para a realização da busca de usuários.
___

