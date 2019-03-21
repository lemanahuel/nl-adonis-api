'use strict'

const Env = use('Env')

module.exports = {
  apiKey: process.env.SENDGRID_API_KEY,
  substitutionWrappers: ['%', '%'],
  senderEmail: null
}