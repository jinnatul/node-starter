import cloudinary from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_KEY, 
  api_secret: process.env.CLOUD_SECRET
});

export default cloudinary
