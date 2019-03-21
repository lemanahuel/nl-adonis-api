'use strict'

const TaskModel = use('App/Models/Task');
const Cloudinary = use('Cloudinary');
const SendGrid = use('SendGrid');

module.exports = class TasksController {

  async create({ request, response }) {
    let task = await TaskModel.create(request.body);
    return response.json(task);
  }

  async list({ params, request, response }) {
    const q = request.get();
    let findParams = { enable: true };
    let queryParams = {};

    if (q.sort) {
      queryParams.sort = q.sort;
    }
    if (q.filter) {
      findParams[q.filter.replace('-', '')] = q.filter.includes('-');
    }

    let tasks = await TaskModel.find(findParams, null, queryParams);
    return response.json(tasks);
  }

  async read({ params, response }) {
    const task = await TaskModel.findById(params.id);
    return response.json(task);
  }

  async update({ params, request, response }) {
    const task = await TaskModel.findByIdAndUpdate(params.id, request.body, { new: true, safe: true })
    return response.json(task);
  }

  async completed({ params, request, response }) {
    const task = await TaskModel.findByIdAndUpdate(params.id, {
      completed: request.body.completed
    }, { new: true, safe: true });
    await SendGrid.send({
      from: 'NL-ADONIS-API <lema.nahuel+adonis-api@gmail.com>',
      to: 'lema.nahuel@gmail.com',
      subject: `Notificacion de complitud desde NL-ADONIS-API`,
      html: `Se completo la tarea <strong>${task.title}</strong>`,
    });
    return response.json(task);
  }

  async uploadImages({ params, request, response }) {
    let file = request.file('file', { types: ['image'], size: '2mb' });
    let image = await Cloudinary.uploader.upload(file.tmpPath);
    const taskTmp = await TaskModel.findById(params.id).limit('images');
    const task = await TaskModel.findByIdAndUpdate(params.id, {
      images: [].concat(taskTmp.images || [], image.secure_url)
    }, { new: true, safe: true });
    return response.json(task);
  }

  async delete({ params, response }) {
    await TaskModel.findByIdAndRemove(params.id)
    return response.status(204).json(null);
  }
}