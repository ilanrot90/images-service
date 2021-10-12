const router = require("express").Router();
const controllers = require("../controllers/images.controller");

router.route("/").get(controllers.getImages);

module.exports = router;
