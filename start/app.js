'use strict'
const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/framework/providers/ViewProvider',
  '@adonisjs/lucid/providers/LucidProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/shield/providers/ShieldProvider',
  '@adonisjs/session/providers/SessionProvider',
  '@adonisjs/auth/providers/AuthProvider',
  'adonis-mongoose-model/providers/MongooseProvider',
  'adonis-4-cloudinary/provider/Cloudinary',
  'adonis-sendgrid-mail/providers/SendGridProvider',
  '@adonisjs/http-logger/providers/LoggerProvider'
]

const aceProviders = [
  '@adonisjs/lucid/providers/MigrationsProvider'
]

const aliases = {
  Cloudinary: 'Adonis/Addons/AdonisCloudinary',
  SendGrid: 'Adonis/Addons/SendGrid'
}

const commands = []

module.exports = { providers, aceProviders, aliases, commands }
