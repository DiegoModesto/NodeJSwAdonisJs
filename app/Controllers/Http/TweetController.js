'use strict'

const TweetModel = use('App/Models/Tweet')

/**
 * Resourceful controller for interacting with tweets
 */
class TweetController {
  /**
   * Show a list of all tweets.
   * GET tweets
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  index = async () => {
    return await TweetModel
                  .query()
                  .with('user')
                  .fetch()
  }
  /**
   * Create/save a new tweet.
   * POST tweets
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  store = async ({ request, auth }) => {
    const data = request.only(['content'])
    return await TweetModel.create({ user_id: auth.user.id, ...data})
  }

  /**
   * Display a single tweet.
   * GET tweets/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    return await TweetModel.findOrFail(params.id)
  }

  /**
   * Delete a tweet with id.
   * DELETE tweets/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth, response }) {
    const tweet = await TweetModel.findOrFail(params.id)

    if(tweet.user_id !== auth.user.id)
      return response.status(401)

    await tweet.delete()
  }
}

module.exports = TweetController
