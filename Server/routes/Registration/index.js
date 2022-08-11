const router = require("express").Router();

const { createRegistration } = require("../../controllers/Registration");

router.route("/create").post(createRegistration);

module.exports = router;
