const { spec } = require("pactum");
const { baseUrl, apisName } = require("../../endpoints.data");

/**
 * method to delete a user by ID
 * @param {*} param0 
 * @returns 
 */
async function deleteUser({userId, statusCode = 200}) {
return await spec( )
    .delete( `${baseUrl}${apisName.deleteUserById}`)
    .withHeaders({
        'Content-Type': 'application/json'
    })
    .withPathParams({ 
      _id: userId
    })
    .expectStatus(statusCode)    
}
async function deleteUsers({users, statusCode = 200}) {
    if(!users || users.length === 0)
        return;

    for (let user of users) {

        await deleteUser({userId: user._id, statusCode})
        
    }        
}

module.exports = { deleteUser, deleteUsers }