'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers')

module.exports = {
  connection: Env.get('DB_CONNECTION', 'mongodb'),
  mongodb: {
    connectionString: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/todo-list',
    connection: {
      options: {
        useNewUrlParser: true
      },
      debug: false
    }
    // connectionString: Env.get('MONGO_CONNECTION_STRING', process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/todo-list'),
    // connection: {
    //   host: Env.get('MONGO_HOST', 'localhost'),
    //   port: Env.get('MONGO_PORT', 27017),
    //   user: Env.get('MONGO_USER', ''),
    //   pass: Env.get('MONGO_PASSWORD', ''),
    //   database: Env.get('MONGO_DATABASE', 'todo-list'),
    //   options: {
    //     useNewUrlParser: true
    //   },
    //   debug: false
    // }
  },
}
