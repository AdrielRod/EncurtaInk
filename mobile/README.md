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

## Mobile
Adentre na pasta mobile e então, instale todas as dependencias.
```bash
npm install
```

Com as dependencias instaladas, você deve obter o seu Ipv4 para fazer login. Para conseguir, basta rodar:
- Windows
```bash
ipconfig
```
- Linux
```bash
hostname -I
```
Atente-se ao "I" maiúsculo ao digitar.

Copie o seu ip e no arquivo `mobile/src/api/axios-config.ts`, substitua ou crie uma nova constante com o ip e a porta 3333. Exemplo:`http://192.168.0.0:3333`
```ts
const urlYourName = 'http://192.168.0.0:3333'

const apiLogin = axios.create({
  baseURL: urlYourName
})
```

Agora você está pronto para rodar o projeto. 
```bash
npx expo start
```

Você precisa de um email e uma senha para acessar o app.
- Email: adriel@gmail.com
- Senha: 123123

# Documentação de Componentes

<details>
  <summary>Alert</summary>

  ### **Propriedades Aceitas**

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :----------------------------------- |
| `type` | `string` | **Obrigatório**. info | alert-circle - loading|
| `text` | `string` | **Obrigatório** string  |
| `containerStyles` | `ViewStyles` | **Opcional** Estilização de View  |

### type
- Define o tipo de Alert que será renderizado. Atualmente, existem 3.
- - Info: Utilizado para informar o usuário sobre algo.
- - Alert Circle: Utilizado como um alerta.
- - Loading: Utilizado para indicar que algo está carregando.

### text
- Texto que será exibido para o usuário.

### containerStyles
- Estilização adicional para o container do componente.

</details>

<details>
  <summary>CustomInput</summary>

  ### **Propriedades Aceitas**

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :----------------------------------- |
| `type` | `string` | **Obrigatório**. COMMOM | PASSWORD | CREATELINK|
| `placeholder` | `string` | **Obrigatório** string  |
| `value` | `string` | **Obrigatório** string  |
| `setValue` | `function` | **Obrigatório** retorna uma string  |
| `onPress` | `function` | **Opcional** chamada de uma função  |

### type
- Define o tipo de Input que será renderizado. Atualmente, existem 3.
- - COMMOM: Input comum sem botões.
- - PASSWORD: Input com opção de esconder ou mostrar o valor do input
- - CREATELINK: Input com botão que faz a chamada de alguma função.

### placeholder
- Placeholder visivel do input

### value
- Deve receber um state para atualizar o value.

### setValue
- Deve receber um setState para atualizar e receber o value.

### onPress
- Botão visivel para o tipo CREATELINK. Quando clicada, chama uma função.

</details>

<details>
  <summary>Label</summary>

  ### **Propriedades Aceitas**

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :----------------------------------- |
| `type` | `string` | **Obrigatório**. BLACK - WHITE|
| `text` | `string` | **Obrigatório** string  |
| `textStyles` | `TextStyles` | **Opcional** Estilização de Text  |

### type
- Define a cor do Label que será renderizado.
- - White: Label de cor branca
- - Black: Label de cor preta

### text
- Texto que será exibido para o usuário.

### textStyles
- Estilização adicional para o texto.

</details>

<details>
  <summary>Title</summary>

  ### **Propriedades Aceitas**

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :----------------------------------- |
| `type` | `string` | **Obrigatório**. BLACK - WHITE|
| `text` | `string` | **Obrigatório** string  |
| `containerStyles` | `ViewStyles` | **Opcional** Estilização de View  |

### type
- Define a cor do Title que será renderizado.
- - White: Label de cor branca
- - Black: Label de cor preta

### text
- Texto que será exibido para o usuário.

### containerStyles
- Estilização adicional para o view.

</details>

---

# Sobre o projeto
<details>
<summary> Como utilizar o aplicativo da melhor forma.</summary>


### Login
Efetue login com as credenciais acima. Você será direcionado para a tela principal do app.

### Criando uma URL encurtada.
Com uma URL em mão, cole ela no local indicado "Link". Depois, basta apenas apertar o ícone ao lado e sua URL será gerada.

### Favoritando uma URL
Arraste a URL desejada para o lado esquerdo. Será revelado duas opções. Aperte no botão azul, responsável por favoritar a sua URL. Você poderá acessa-la de forma mais rápida ao passar para a segunda tela.

### Desfavoritando uma URL
Na tela de favoritos, arraste a URL desejada para o lado esquerdo. Será revelado duas opções. Aperte no botão azul, responsável por desfavoritar a sua URL.

### Deletando uma URL
Arraste a URL desejada para o lado esquerdo. Será revelado duas opções. Aperte no botão vermelho, responsável por deletar a sua URL. 

</details>

## Tecnologias

O projeto foi criado com as seguintes tecnologias

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [useContext](https://react.dev/reference/react/useContext)
- [Styled-components](https://styled-components.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Async Storage](https://react-native-async-storage.github.io/async-storage/docs/usage)
- [Axios](https://axios-http.com/)
- [React Navigation](https://reactnavigation.org/)
- [Expo Clipboard](https://docs.expo.dev/versions/latest/sdk/clipboard/)

## Api
- [Encurtador de Link](https://autocode.com/url/api/temporary/0.3.0/create/)
## Percurso

Através do Styled-Components, defini um tema global para usar em minha aplicação. No qual a paleta de cores escolhi a partir do protótipo do figma.

Usando Axios, foi oferecido uma melhor forma requisição as apis utilizadas.

Com o Expo Clipboard, fui capaz de desenvolver a funcionalidade no qual o usuário clicava em um botão e automáticamente o link encurtado já iria para sua área de cópia do dispositivo.

Devido ao projeto ser uma aplicação pequena, o useContext me serviu perfeitamente. Foi desenvolvido apenas uma funcionalidade de signIn, signOut e também pude guardar os dados da aplicação em cache, utilizando o Async Storage.

Mantíve os componentes separados e sempre aplicando o melhor do Clean Code com a diminuição de responsabilidades das funções.

Foi utilizado, para fazer o gesto de swipe, a biblioteca de Gesture Handler que vem nativa no React Native. Tentei ao máximo não fazer o uso de muitas bibliotecas para deixar a aplicação mais simples e limpa de ser utilizada.

Tive um aprofundamento maior no hook useCallback, para fixar o entendimento tão razo que eu tinha nessa ferramente tão importante.

No projeto, o maior desafio que encontrei, foi na própria construção do Swipe, pois tinha que me concentrar também em deixar o código 100% legível para que qualquer um pudesse entender.
___


Acesse o Figma abaixo

[![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/file/Cs5B4G09yG5qktniv7Zk3a/EncurtaLink?type=design&node-id=1%3A285&mode=design&t=TdwMf9Rea3V7Htjh-1) 

![teste](https://media.discordapp.net/attachments/773386365311909938/1198796002526773278/2024-01-21_21-55.png?ex=65c034c7&is=65adbfc7&hm=483de9679c42f08e8d7109eacdca060fad81aa52c45f0bbfbeb48113e85c5713&=&format=webp&quality=lossless)