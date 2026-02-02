const { spec } = require("pactum");
const { baseUrl, apisName } = require("../../endpoints.data")

/**
 * Method o busca usuário por email
 * @param {*} param0 
 * @returns 
 */

async function getUsers({ email, statusCode = 200 }) {
  return await spec()
    .get(`${baseUrl}${apisName.users}?email={email}`)
    .withHeaders({
      'Content-Type': 'application/json'
    })
    .withPathParams({ email: email })
    .expectStatus(statusCode);
}

module.exports = { getUsers };


