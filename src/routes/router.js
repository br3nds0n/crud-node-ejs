const router = require('express').Router()

const core = require('../app/core/core')

router.get('/', core.home)

module.exports = router
