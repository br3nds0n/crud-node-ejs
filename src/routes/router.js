const router = require('express').Router();

const core = require('../app/core/core')

/**
 *  @description Root Route
 *  @method GET /
 */
router.get('/', core.home);

module.exports = router
