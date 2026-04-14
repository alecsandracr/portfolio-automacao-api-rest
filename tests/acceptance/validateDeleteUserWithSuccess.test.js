const { assert } = require("chai"),
  { describeName } = require("../../data/describeName.data"),
  { user03 } = require("../../data/user/user.data"),
  { deleteUser, deleteUsers } = require("../../endpoints/users/routes/deleteUsers.endpoint"),
  { getUsers } = require("../../endpoints/users/routes/getUsers.endpoint"),
  { postUser } = require("../../endpoints/users/routes/postUser.endpoint")

describe(describeName.user.acceptance, async () => {

  let respUser, newUser

  before('Validar se o usuário existe e excluir caso exista', async () => {
    respUser = await getUsers({ email: user03.email, statusCode: 200 })
    await deleteUsers({ users: respUser.json.usuarios, statusCode: 200 })
    newUser = await postUser({ userDTO: user03, statusCode: 201 })

  })

  it('[TC-03] - Deve validar a exclusão de um usuário', async () => {
    let { json } = await deleteUser({ userId: newUser.json._id, statusCode: 200 })  
    assert.equal(json.message, 'Registro excluído com sucesso')
    assert.equal(respUser.json.usuarios.length, 0)

  })
})
