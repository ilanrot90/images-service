const router = require('express').Router();
// routes
const imagesRoutes = require('./images.routes');

router.use('/images', imagesRoutes);

module.exports = router;