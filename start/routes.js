'use strict'

const Route = use('Route');

// Route.on('/').render('welcome');
Route.get('/', ({ response }) => {
  return response.redirect('docs', false, 301);
});

Route.get('/docs', ({ view }) => {
  return view.render('docs', {
    app: {
      title: 'Adonisjs Docs'
    },
    endpoints: Route.list().map(endpoint => {
      return {
        path: endpoint.name,
        methods: endpoint.verbs
      };
    })
  });
});

require('../app/Routes/TasksRoutes')(Route);