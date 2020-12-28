/**
 * Defines routes for the bootcamp
 */
const router = require('express').Router();
const {
    getBootcamp,
    getBootcamps,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp
} = require('../controllers/bootcamp');

// handle for routes
router
    .route('/')
    .get(getBootcamps)
    .post(createBootcamp);

// router /:id
router
    .route('/:id')
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp);

// export the router
module.exports = router;