'use strict'

const Route = use('Route');

Route.on('/').render('welcome')

require('../app/Routes/TasksRoutes')(Route);