import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import database from '../services/database.js'
import config from '../config.js'

export const handleLogin = async (req, res) => {
  const { doctorId, password } = req.body

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
    const token = jwt.sign(doctorInfo, config.jwtSecret, {
      expiresIn: config.tokenExpires,
    })
    res.json({
      ...doctorInfo,
      accessToken: token,
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

  jwt.verify(token, jwtSecret, (err, decodedUser) => {
    if (err) {
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
