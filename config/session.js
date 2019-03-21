'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

module.exports = {
  driver: Env.get('SESSION_DRIVER', 'cookie'),
  cookieName: 'adonis-session',
  clearWithBrowser: true,
  age: '2h',
  cookie: {
    httpOnly: true,
    sameSite: false,
    path: '/'
  },
  file: {
    location: 'sessions'
  },
  redis: 'self::redis.local'
}
