# server-api
Servidor API nodeJS

You can change the basic configuration in the next fields:

Database
config/database.js

Path for images
config/upload.js

You will need a secret.js field with the credentials of Cloudinary and a own SECRET PHRASE for be able to working the JasonWebToken packagen. The field path should be config/secret.js and his structure the below:

module.exports = {
  cloudinary: {
    api_key: 'mycloudinaryqpikey',
    cloud_name: 'mycloudinaryname',
    api_secret: 'mycloudinaryapisecret'
  },
  jwtSecret: 'MySecret'
}
