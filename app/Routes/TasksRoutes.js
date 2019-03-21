'use strict'

module.exports = Route => {
  Route.post('tasks', 'TasksController.create');
  Route.get('tasks', 'TasksController.list');
  Route.get('tasks/:id', 'TasksController.read');
  Route.put('tasks/:id', 'TasksController.update');
  Route.put('tasks/:id/completed', 'TasksController.completed');
  Route.put('tasks/:id/images', 'TasksController.uploadImages');
  Route.delete('tasks/:id', 'TasksController.delete');
};