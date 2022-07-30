module.exports = async (number) => {
  if (!number) throw new Error("Number is not defined");
  if (number?.startsWith("0")) {
    number = "+62" + number.substring(1);
  }
  if (number?.startsWith("62")) {
    number = "+" + number;
  }
  if (number?.includes("-") || number?.includes(" ")) {
    number = number.replace("-", "");
    number = number.replace(" ", "");
  }
  return number;
};
