const { describeName } = require("../../data/describeName.data");
const { getUsers } = require("../../endpoints/users/routes/getUsers.endpoint");
const { user01, } = require("../../data/user/user.data");
const { deleteUsers } = require("../../endpoints/users/routes/deleteUsers.endponint");
const { postUser } = require("../../endpoints/users/routes/postUsers.endpoint");
const { assert } = require("chai");


describe(describeName.user.acceptance, async () => {

  let usuarios

  before('Deve buscar o usuário e caso ele exista realizar a exclusão', async () => {
    usuarios = await getUsers({ email: user01.email, statusCode: 200 })
    console.log(usuarios.json)
    await deleteUsers({ users: usuarios.json.usuarios })
  })

  it('[TC-01], Cadastrar um usuário com sucesso', async () => {

    let { json } = await postUser({ userDTO: user01, statusCode: 201 })
    assert.equal(json.message, user01.message)
    assert.exists(json._id, 'Usuario não foi cadastrado')

  })
})





