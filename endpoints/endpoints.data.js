
const baseUrl = 'https://serverest.dev';

const apisName = {
    users: '/usuarios',
    deleteUserById: '/usuarios/{_id}' ,
    getUsers : '/usuarios',
    putUserById: '/usuarios/{_id}'
}

module.exports = {
    baseUrl,
    apisName
}