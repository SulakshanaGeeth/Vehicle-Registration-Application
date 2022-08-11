const Register = require("../../models/Registration");
const checkType = require("../../utils/checkType");

exports.createRegistration = async (req, res) => {
  const { plateNumber } = req.body;

  // const checkType = () => {
  //   let plate = plateNumber.replace(/-/g, ""); //replace with ""
  //   if (isNaN(plate) === false) return "old";
  //   else if (plateNumber.includes("ශ්‍රී")) return "Vintage";
  //   else return "modern";
  // };

  const type = checkType(plateNumber);

  const newRegisterScheme = new Register({ plateNumber, type });

  //   if (isAvailable) {
  //     // if satisfied return proper error
  //     return res
  //       .status(401)
  //       .json({ error: "Not a valid license plate number" });
  //   }

  await newRegisterScheme
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch((error) => res.json({ success: false, error: error })); // else save to the db
};

// function checkType(plateNumber) {
//     return "modern";
// }

//controller for getting registrations
exports.getRegistrations = async (req, res) => {
  await Register.find()
    .then((scheme) => res.json(scheme))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

//controller for getting topic by id
exports.getRegistration = async (req, res) => {
  const { id } = req.params;

  await Register.findById(id) //find by the document by id
    .then((scheme) => res.json(scheme))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

//controller for updating register by id
exports.updateRegistration = async (req, res) => {
  const { id } = req.params;
  const { plateNumber } = req.body;
  const type = checkType(plateNumber);

  await Register.findByIdAndUpdate(id, {
    plateNumber,
    type,
  }) //find the document by and update the relavant data
    .then(() => res.json({ success: true }))
    .catch((error) => res.json({ success: false, Error: error }));
};

//controller for deleting topic by id
exports.deleteRegistration = async (req, res) => {
  const { id } = req.params;

  await Register.findByIdAndDelete(id) //find by the document by id and delete
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};
