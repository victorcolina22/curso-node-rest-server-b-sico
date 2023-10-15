const { response, request } = require('express')

const getUsers = (req = request, res = response) => {
  const { nombre, apellido, apiKey } = req.query
  res.json({
    msg: 'get API - usuarios',
    nombre,
    apellido,
    apiKey
  })
}

const postUser = (req = request, res = response) => {
  const body = req.body
  console.log({ body })
  res.status(201).json({
    msg: 'post API - usuarios'
  })
}

const putUser = (req = request, res = response) => {
  const { id } = req.params
  res.json({
    msg: 'put API - usuarios',
    id
  })
}

const deleteUser = (req = request, res = response) => {
  res.json({
    msg: 'delete API - usuarios'
  })
}

module.exports = {
  getUsers,
  postUser,
  putUser,
  deleteUser
}
