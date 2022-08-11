const checkType = (plateNumber) => {
  let plate = plateNumber.replace(/-/g, ""); //replace with ""
  if (isNaN(plate) === false) return "old";
  else if (plateNumber.includes("ශ්‍රී")) return "Vintage";
  else return "modern";
};

module.exports = checkType;
