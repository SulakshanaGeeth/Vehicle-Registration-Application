const checkValidate = (plateNumber) => {
  let plate = plateNumber.replace(/\s/g, ""); //replace whitespaces and spaces with ""
  if (plate.match(/[0-9]{2}ශ්‍රී[0-9]{4}/g)) {
    console.log("plate :" + plate.length);
    if (plate.length > 11) return "False";
    else return "True";
  } else if (plate.match(/[0-9]{2,3}-[0-9]{4}/g)) {
    console.log("plate :" + plate.length);
    if (plate.length > 8) return "False";
    else return "True";
  } else if (plate.match(/[a-zA-Z]{3,4}-[0-9]{4}/g)) {
    console.log("plate :" + plate.length);
    if (plate.length > 9) return "False";
    else return "True";
  } else return "False";
};

module.exports = checkValidate;
