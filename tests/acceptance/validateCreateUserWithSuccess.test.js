const { describeName } = require("../../data/describeName.data"),
  { getUsers } = require("../../endpoints/users/routes/getUsers.endpoint"),
  { user01, } = require("../../data/user/user.data"),
  { deleteUsers } = require("../../endpoints/users/routes/deleteUsers.endpoint"),
  { postUser } = require("../../endpoints/users/routes/postUser.endpoint"),
  { assert } = require("chai")

describe(describeName.user.acceptance, async () => {

  let usuarios

  before('Deve buscar o usuário e caso ele exista realizar a exclusão', async () => {
    usuarios = await getUsers({ email: user01.email, statusCode: 200 })
    await deleteUsers({ users: usuarios.json.usuarios })
  })

  it('[TC-02] - Cadastrar um usuário com sucesso', async () => {
    let { json } = await postUser({ userDTO: user01, statusCode: 201 })
    assert.equal(json.message, user01.message)
    assert.exists(json._id, 'Usuario não foi cadastrado')

  })
})





