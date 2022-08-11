const Register = require("../../models/Registration");

exports.createRegistration = async (req, res) => {
  const { plateNumber } = req.body;

  const checkType = () => {
    let plate = plateNumber.replace(/-/g, ""); //replace with ""
    if (isNaN(plate) === false) return "old";
    else if (plateNumber.includes("ශ්‍රී")) return "Vintage";
    else return "modern";
  };

  const type = checkType();

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
