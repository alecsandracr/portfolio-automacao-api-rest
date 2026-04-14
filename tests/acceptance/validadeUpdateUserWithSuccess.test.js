const { describeName } = require("../../data/describeName.data"),
    { user04, user04Updated } = require("../../data/user/user.data"),
    { deleteUsers } = require("../../endpoints/users/routes/deleteUsers.endpoint"),
    { getUsers } = require("../../endpoints/users/routes/getUsers.endpoint"),
    { postUser } = require("../../endpoints/users/routes/postUser.endpoint"),
    { putUserById } = require("../../endpoints/users/routes/updateUser.endpoint"),
    { assert } = require("chai")

describe(describeName.user.acceptance, async () => {

    let user, newUser

    before('Validar se o usuário existe e excluir caso exista', async () => {

        user = await getUsers({ email: user04.email, statusCode: 200 })
        await deleteUsers({ users: user.json.usuarios, statusCode: 200 })
        newUser = await postUser({ userDTO: user04, statusCode: 201 })

    })

    it('[TC-04] - Deve atualizar um usuário', async () => {
        let { json } = await putUserById({ id: newUser.json._id, userDTO: user04Updated })
        assert.equal(json.message, 'Registro alterado com sucesso')

    })

})