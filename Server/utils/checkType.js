const checkType = (plateNumber) => {
  let plate = plateNumber.replace(/\s/g, ""); //replace whitespaces and spaces with ""
  if (plate.match(/[0-9]{2}ශ්‍රී[0-9]{4}/g)) return "Vintage";
  else if (plate.match(/[0-9]{2,3}-[0-9]{4}/g)) return "Old";
  else return "modern";
};

module.exports = checkType;
