'use strict'

const Cloudinary = use('Cloudinary');

module.exports = class Cloudy {

  async upload(files) {
    return await Cloudinary.uploader.upload(files.tmpPath)
  }

};