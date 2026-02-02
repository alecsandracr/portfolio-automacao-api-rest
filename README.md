# portifolio-automacao-api-rest

Projeto de automação de testes de API desenvolvido para fins de estudo utilizando a API pública **Serverest**. O objetivo é validar endpoints REST por meio de testes automatizados, simulando cenários uso.

 API utilizada:  
**https://serverest.dev/**

# Tecnologias e Bibliotecas Utilizada

 Tecnologia | Descrição 
 **Node.js** | Plataforma de execução JavaScript |
 **Mocha** | Framework de testes |
 **PactumJS** | Biblioteca para automação de testes de API |
 **Chai / Joi** | Validações e asserções |
 **JavaScript** | Linguagem base do projeto |

 # Estrutura do Projeto
 
├── data
│ |__ user
│ │ └── user.data.js # Massa de dados de usuário
│ └── describeName.data.js # Nomes dos testes
│
├── endpoints
│ ├── users
│ │ └── routes
│ │ ├── getUsers.endpoint.js
│ │ ├── postUsers.endpoint.js
│ │ └── deleteUsers.endpoint.js
│ └── endpoints.data.js - BaseURL e rotas
│
├── tests
│ ├── acceptance
│ │ └── validateApiWorking.test.js
│ └── contract
│
├── package.json
└── README.md

# Funcionalidades Testadas

-Cadastro de usuários
-Consulta de usuários por email  
-Exclusão de usuários  
-Validação de respostas HTTP 

# Estratégia dos Testes

Os testes seguem o padrão: **Arrange → Act → Assert**

**Para executar o projeto, realize o clone do repositório e execute os comandos abaixo**

-npm install

# Executar Teste
-npm test

