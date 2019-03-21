const Env = use('Env')

const parmas = process.env.CLOUDINARY_URL.replace('//', '').split(':').slice(1);
module.exports = {
  // name: Env.get('CLOUDINARY_NAME', ''),
  // api_key: Env.get('CLOUDINARY_API_KEY', ''),
  // api_secret: Env.get('CLOUDINARY_API_SECRET', '')
  name: parmas[1].split('@')[1],
  api_key: parmas[0],
  api_secret: parmas[1].split('@')[0],
  url: process.env.CLOUDINARY_URL
}