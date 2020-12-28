/**
 * Defines controller functions for the bootcamp resource
 */


 // @desc    Gets all the bootcamp courses
 // @route   GET /api/v1/bootcamps
 // @access  Public
 exports.getBootcamps = (request, response, next) => {
     response
        .status(200)
        .json({
            message: 'Returns all the bootcamp courses'
        });
 }

 // @desc    Gets a single bootcamp course
 // @route   GET /api/v1/bootcamps/:id
 // access   Public
 exports.getBootcamp = (req, res, next) => {
    res
        .status(200)
        .json({
            message: `Returns a boot camp course with the id of ${req.params.id}`
        });
}

// @desc    Creates a new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = (req, resp, next) => {
    resp
        .status(201)
        .json({
            message: 'Creates a new botcamp course'
        })
}

// @desc    Updates a bootcamp course
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, resp, next) => {
    resp
        .status(200)
        .json({
            message: `Updates a bootcamp course with the id ${req.params.id}`
        })
}

// @desc    Deletes a bootcamp course
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, resp, next) => {
    resp
        .status(204)
        .json({
            message: `Deletes a bootcamp course with the id ${req.params.id}`
        })
}