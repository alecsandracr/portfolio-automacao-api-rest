const { spec } = require("pactum");
const { baseUrl, apisName } = require("../../endpoints.data");

/**
 * Metódo para cadastrar um usuário
 * @param {*} userDTO - Objeto com os dados necessários para realizar o cadastro
 * @param {*} statusCode - Status code que a API deve retorna ao realizar o cadastro
 * @returns 
 */

async function  postUser({userDTO, statusCode = 201}) {
    return await spec()

        .post(`${baseUrl}${apisName.users}`)
        .withHeaders({
            'Content-Type': 'application/json'
        })
        .withBody({
            'nome': userDTO.nome,
            'email': userDTO.email,
            'password': userDTO.password,
            'administrador': userDTO.administrator === undefined ? `${false}` : `${userDTO.administrator}`         
        })
        .expectStatus(statusCode)
}
module.exports = {postUser}
