const router = require("express").Router();

const {
  createRegistration,
  getRegistrations,
  getRegistration,
  updateRegistration,
  deleteRegistration,
} = require("../../controllers/Registration");

router.route("/create").post(createRegistration);
router.route("/getAll").get(getRegistrations);
router.route("/get/:id").get(getRegistration);
router.route("/update/:id").put(updateRegistration);
router.route("/delete/:id").delete(deleteRegistration);

module.exports = router;
