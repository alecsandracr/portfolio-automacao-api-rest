const user01 = {
    nome: 'Lucke Skywalker',
    email: 'lucke@qa.com.br',
    password: '123456',
    administrador: 'false',

    message: 'Cadastro realizado com sucesso'

    } 

  const user02 = {
    nome: 'Dudu Carmago',
    email: 'aliQA@ambevn.com',
    password: '123456',
    administrador: 'false' ,
      
  } 

  const user03 = {
    nome: 'Darth Vader',
    email: 'darth12@qa.com.br',
    password: '12346',
    administrador: 'false',

  }

  const user04 = {
    nome: 'Lyoto MachidaTeste',
    email: 'lyoto@qqa.com.br',
    password: '123456',
    administrador: 'true',

  }
  
  const user04Updated = {
    ...user04, // importa as propriedades do user04
    nome: 'Lyoto Machida Updated' // Sobrescreve a propriedade nome
  }

   module.exports = {
    user01,
    user02,
    user03,
    user04,
    user04Updated
  }