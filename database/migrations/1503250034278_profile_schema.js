'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfileSchema extends Schema {
  up = async () => {
    await this.db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    
    this.create('profiles', (table) => {
      table.uuid('id').primary().defaultTo(this.db.raw('uuid_generate_v4()'))
      table.string('title', 120).notNullable()
      table.integer('access_level').notNullable()
      table.timestamps()
    })
  }

  down = async () => {
    this.drop('profiles')
  }
}

module.exports = ProfileSchema
