import React from "react";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { StyledBackButton } from "./styles";

const BackButton = () => {
  return (
    <StyledBackButton>
      <RiArrowDropLeftLine className="icon" size={36} />
    </StyledBackButton>
  );
};

export default BackButton;
