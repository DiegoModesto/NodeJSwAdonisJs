'use strict'

const UserModel = use('App/Models/User')

class UserController {
    index = async () => {
        return UserModel
                    .query()
                    .with('profile')
                    .with('userById')
                    .fetch()
    }
}

module.exports = UserController
