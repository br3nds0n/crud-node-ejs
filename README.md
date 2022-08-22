# 👤 crud de usuário [<img align="right" src="https://img.shields.io/badge/release-v0.1.0-green">](https://github.com/br3nds0n/crud-node-ejs/releases)

<br>

> <b>Status code:</b>  🚧 andamento 🚧

## ℹ index

-   [🧠 contexto](#-contexto)
-   [📥 download](#-download)
    -   [setup](#-setup)
    -   [starting](#-starting)
-   [🛠 tecnologias](#-tecnologias)
-   [✍🏼 autor](#-autor)
-   [📝 license](#-license)

## 🧠 contexto
> **feature do projeto:** *crud usuário* 👤

Este projeto é um monolito num padrão de arquitetura mvc, onde faço as seguintes implementações:

 * interação de métodos http. (POST, GET, UPDATE e DELETE);
 * conexão com banco de dados;
 * telas (listagem, adicionar e atualizar);
 
## 📥 download

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e o [MongoDB](https://www.mongodb.com/pt-br).
Além disso, é bom ter um editor para trabalhar com código como [VSCode](https://code.visualstudio.com/).

### 💻 setup

```php
# clonar este repositório
$ git clone <https://github.com/br3nds0n/crud-node-ejs.git>

# acesse a pasta do projeto
$ cd crud-node-ejs

# instale as dependências
$ npm install
```

#

### ⚙ Configurar variáveis de ambiente

> Será necessário criar um arquivo `.env` na raiz do projeto para configurar as variáveis. Exemplo:

```bash
# porta para o servidor
PORT_SERVER = <port>

# endereço para se conectar ao MongoDB
DATABASE_URI = mongodb://localhost:27017/<name>

```

#

### ▶ starting

```php
# rode o executável para iniciar a aplicação
$ ./run

# --- ou ---

# executando em modo de produção
$ npm run start

# executando em modo de desenvolvimento
$ npm run start:dev

# o projeto começará na porta setada no .env
# acesse o <http://localhost:3000/>
```

<br>

## 🛠 tecnologias

As seguintes ferramentas/tecnologias foram usadas na construção e teste do projeto. Ao clicar no ícone da tecnologia, você será redirecionado ao site oficial para instalação: <br>

| logo                                                                                                                                                                                                                                                         | Framework  |  Version  |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------- | :-------: |
| <a href="https://www.javascript.com/" target="_blank"><img align="center" alt="js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"></a>                                         | JavaScript |  `4.6.3`  |
| <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank"><img align="center" alt="html" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"></a>                        | HTML       |  `5.0.0`  |
| <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><img align="center" alt="css" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"></a>                                        | CSS        |  `3.0.0`  |
| <a href="https://getbootstrap.com/" target="_blank"><img align="center" alt="css" height="35" width="40" src="https://github.com/devicons/devicon/blob/master/icons/bootstrap/bootstrap-original.svg"></a>                                        | Bootstrap  |  `5.2.0`  |
| <a href="https://www.postgresql.org/download/" target="_blank"><img align="center" alt="node" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nodejs/nodejs-original.svg"></a> | NodeJS     | `16.14.2` |
| <a href="https://www.mongodb.com/try/download/community" target="_blank"><img align="center" alt="mongo" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-original.svg">                                    | MongoDB    |  `5.0.5`  |

 <br>

## ✍🏼 autor

<div align=left>
   <table>
      <tr align=center>
        <th><strong> Brendson Victor </strong></th>
      </tr>
       <td>
          <a href="https://github.com/br3nds0n">
            <img width="168" height="140" src="https://user-images.githubusercontent.com/82064724/185726784-e8d151e8-29d6-4475-ba50-ca23f9429650.png" > <p align="left">
    </p></a>
        </td>
      </tr>
    </table>
    </div>

<div align=left>

<br>

## 📝 license

Este repositório está licenciado sob **MIT LICENSE**. Para informações mais detalhadas, leia o arquivo [LICENSE](./LICENSE) contido neste repositório.

 <br> 
	
[<Back](#-crud-de-usuário)
