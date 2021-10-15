import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import database from '../services/database.js'
import config from '../config.js'

export const handleLogin = async (req, res) => {
  const { doctorId, password } = req.body
  console.log(doctorId.toUpperCase())
  if (doctorId.toUpperCase() === 'ADMIN') {
    if (password === config.adminPassword) {
      const adminInfo = {
        id: 'ADMIN',
        name: 'ADMIN',
      }
      const accessToken = jwt.sign(adminInfo, config.jwtSecret, {
        expiresIn: config.tokenExpires,
      })
      return res.json({
        ...adminInfo,
        accessToken,
      })
    } else {
      return res.status(401).json({
        message: 'Wrong password',
      })
    }
  }

  const doctor = (
    await database.query('SELECT * FROM doctor WHERE doctor_id=$1', [doctorId])
  ).rows[0]

  if (!doctor) {
    return res.status(401).json({
      message: 'Invalid doctor ID',
    })
  }

  const match = await bcrypt.compare(password, doctor.doctor_password)
  if (match) {
    const doctorInfo = {
      id: doctorId,
      name: doctor.doctor_name,
    }
    const accessToken = jwt.sign(doctorInfo, config.jwtSecret, {
      expiresIn: config.tokenExpires,
    })
    res.json({
      ...doctorInfo,
      accessToken,
    })
  } else {
    return res.status(401).json({
      message: 'Wrong password',
    })
  }
}

export const verifyToken = (req, res, next) => {
  const { authorization } = req.headers
  const token = authorization?.replace('Bearer ', '')

  if (!token) {
    return res.status(401).json({
      message: 'No token provided',
    })
  }

  jwt.verify(token, config.jwtSecret, (err, decodedUser) => {
    if (err) {
      console.log(err, token)

      return res.status(401).json({
        message: 'Invalid token',
      })
    }
    req.locals = {
      user: decodedUser,
    }
    next()
  })
}
