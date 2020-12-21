import React from "react";
import NumberFormat from "react-number-format";

const FormattedNumber = ({ number = 0 }) => {
  if (isNaN(number)) {
    return "N/A";
  }

  return (
    <NumberFormat
      value={number.toString().replace("-", "")}
      displayType="text"
      thousandSeparator
      suffix="₪"
    />
  );
};

export default FormattedNumber;
