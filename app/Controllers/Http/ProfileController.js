'use strict'

const ProfileModel = use('App/Models/Profile')
const UserModel = use('App/Models/User')

/**
 * Resourceful controller for interacting with profiles
 */
class ProfileController {
  /**
   * Show a list of all profiles to logged user.
   */
  async index ({ auth }) {
    const x = await UserModel.find(auth.user.id)
    console.log('Xis', await x._profile())
    
    
    return {}
  }

  /**
   * Create/save a new profile.
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only(['title', 'access_level'])
    return await ProfileModel.create(data)
  }

  /**
   * Display a single profile.
   * GET profiles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Update profile details.
   * PUT or PATCH profiles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a profile with id.
   * DELETE profiles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ProfileController
