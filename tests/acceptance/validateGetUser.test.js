const { describeName } = require("../../data/describeName.data"),
  { user02 } = require("../../data/user/user.data"),
  { deleteUsers } = require("../../endpoints/users/routes/deleteUsers.endpoint"),
  { getUsers } = require("../../endpoints/users/routes/getUsers.endpoint"),
  { assert } = require("chai"),
  { postUser } = require("../../endpoints/users/routes/postUser.endpoint")

describe(describeName.user.acceptance, async () => {

  let usuarios

  before('Deve buscar o usuário e caso ele exista realizar a exclusão', async () => {
    usuarios = await getUsers({ email: user02.email, statusCode: 200 })
    await deleteUsers({ users: usuarios.json.usuarios })
    await postUser({ userDTO: user02, statusCode: 201 })
  })

  it('[TC-01] - Deve buscar o usuário quando o email existir', async () => {
    let { json } = await getUsers({ email: user02.email, statusCode: 200 })
    assert.equal(json.quantidade, json.usuarios.length)
    assert.equal(json.usuarios[0].email, user02.email)
    assert.equal(1, json.usuarios.length)

  })
})

