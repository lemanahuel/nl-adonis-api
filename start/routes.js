'use strict'

const Route = use('Route');

Route.on('/').render('welcome');
Route.get('/docs', ({ view }) => {
  return view.render('docs', {
    app: {
      title: 'Adonisjs Docs'
    },
    endpoints: []
  });
});

require('../app/Routes/TasksRoutes')(Route);