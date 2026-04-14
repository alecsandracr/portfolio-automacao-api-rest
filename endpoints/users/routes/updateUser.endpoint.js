const { spec } = require("pactum")
const { baseUrl, apisName } = require("../../endpoints.data")


/**
 * Metódo para atualizar o registro de um usuário
 * @param {*} userDTO - Objeto com os dados necessários para realizar a atualização
 * @param {*} statusCode - Status code que a API deve retorna ao realizar a atualização
 * @returns 
 */

async function putUserById({ id, userDTO, statusCode = 200 }) {
    return await spec()
        .put(`${baseUrl}${apisName.users}/${id}`)
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

module.exports = { putUserById }