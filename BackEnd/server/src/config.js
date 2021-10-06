import dotenv from 'dotenv'
dotenv.config()

// Required environment variables
const ENV_VARS = ['DATABASE_URL']

export default {
  databaseUrl: process.env.DATABASE_URL,
  port: process.env.PORT || 5000,

  checkEnvVariables: function () {
    ENV_VARS.forEach(function (key) {
      if (!process.env[key]) {
        console.warn('WARNING: Missing the environment variable ' + key)
      }
    })
  },
}
