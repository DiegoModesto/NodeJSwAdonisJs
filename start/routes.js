'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

const v1 = 'api/v1'
const v2 = 'api/v2'

//#region Public Routes
Route.group(() => {
  Route.post('/auth/authenticate', 'AuthController.authenticate')
}).prefix(v1)
//#endregion

//#region Private Routes
//AuthController
Route.group(() => {
  Route.post('/auth/register', 'AuthController.register')
}).prefix(v1).middleware('auth')
//AppController
Route.group(() => {
  Route.get('/app/dashboard', 'AppController.index')
}).prefix(v1).middleware('auth')
//TweetController
Route.group(() => {
  Route.resource('tweets', 'TweetController')
    .apiOnly()
    .except(['update'])
}).prefix(v1).middleware('auth')
//ProfileController
Route.group(() => {
  Route.resource('profiles', 'ProfileController')
    .apiOnly()
    .except(['update'])
}).prefix(v1).middleware('auth')
//UserController
Route.group(() => {
  Route.get('/users', 'UserController.index')
}).prefix(v1).middleware('auth')
//#endregion