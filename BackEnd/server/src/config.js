import dotenv from 'dotenv'
dotenv.config()

// Required environment variables
const ENV_VARS = ['DATABASE_URL', 'JWT_SECRET', 'TOKEN_EXPIRES', 'SALT_ROUNDS']

export default {
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  tokenExpires: process.env.TOKEN_EXPIRES,
  saltRounds: +process.env.SALT_ROUNDS,
  port: process.env.PORT || 5000,

  checkEnvVariables: function () {
    ENV_VARS.forEach(function (key) {
      if (!process.env[key]) {
        console.warn('WARNING: Missing the environment variable ' + key)
      }
    })
  },
}
