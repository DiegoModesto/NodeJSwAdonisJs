'use strict'

const UserModel = use('App/Models/User')

class AuthController {
    register = async ({ request }) => {
        const data = request.only(['username', 'email', 'password'])
        return await UserModel.create(data)
    }

    authenticate = async ({ request, auth }) => {
        const { email, password } = request.all()
        return await auth
                        .withRefreshToken()
                        .attempt(email, password)
    }
}

module.exports = AuthController