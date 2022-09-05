const express = require('express')

const registrationsRouter = express.Router()

const { getAllRegister, getIdRegister, createRegister, updateRegister, deleteRegister } = require('../Controllers/controllers')

registrationsRouter.get('/', getAllRegister)
registrationsRouter.get('/:id', getIdRegister)
registrationsRouter.post('/', createRegister)
registrationsRouter.patch('/:id', updateRegister)
registrationsRouter.delete('/:id', deleteRegister)

module.exports = { registrationsRouter }