import React from "react";

interface TestProps {
  textProcessNumberOne: string;
  textProcessNumberTwo: string;
  textProcessNumberThree: string;
  textProcessNumberFour: string;
  textProcessNumberFive: string;
}

const Test: React.FC<TestProps> = ({
  textProcessNumberOne,
  textProcessNumberTwo,
  textProcessNumberThree,
  textProcessNumberFour,
  textProcessNumberFive,
}) => {
  return (
    <div>
      <span>{textProcessNumberOne}</span>
      <br />
      <span>{textProcessNumberTwo}</span>
      <br />
      <span>{textProcessNumberThree}</span>
      <br />
      <span>{textProcessNumberFour}</span>
      <br />
      <span>{textProcessNumberFive}</span>
    </div>
  );
};

export default Test;
