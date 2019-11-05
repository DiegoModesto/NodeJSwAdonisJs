'use strict'

/*
|--------------------------------------------------------------------------
| ProfileSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const uuid = use('uuid/v4')

const ProfileModel = use('App/Models/Profile')
const UserModel = use('App/Models/User')

class ProfileSeeder {
  async run () {
    const pSimpleId = uuid()
    const pMiddleId = uuid()
    const pSuperId = uuid()
    const pAdminId = uuid()

    //#region Creating Profile
    await ProfileModel.create({
      id: pSimpleId,
      title: 'Simple Profile',
      access_level: 0
    })
    await ProfileModel.create({
      id: pMiddleId,
      title: 'Middle Profile',
      access_level: 1
    })
    await ProfileModel.create({
      id: pSuperId,
      title: 'Super Profile',
      access_level: 2
    })
    await ProfileModel.create({
      id: pAdminId,
      title: 'Administrator Profile',
      access_level: 3
    })
    //#endregion

    //#region Creating User
    await UserModel.create({
      username: 'Simple User',
      email: 'user_1@teste.com',
      password: '@123mudar',
      profile_id: pSimpleId
    })
    await UserModel.create({
      username: 'Middle User',
      email: 'user_2@teste.com',
      password: '@123mudar',
      profile_id: pMiddleId
    })
    await UserModel.create({
      username: 'Super User',
      email: 'user_3@teste.com',
      password: '@123mudar',
      profile_id: pSuperId
    })
    await UserModel.create({
      username: 'Administrator User',
      email: 'user_4@teste.com',
      password: '@123mudar',
      profile_id: pAdminId
    })
    //#endregion
  }
}

module.exports = ProfileSeeder
