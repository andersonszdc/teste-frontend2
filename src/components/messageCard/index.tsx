import React from "react";
import { StyledMessageCard } from "./styles";
import { IoMdClose } from "react-icons/io";

const MessageCard = ({ errorMessage }) => {
  return (
    <StyledMessageCard>
      <div className="left">
        <div>
          <div className="wrapper-icon">
            <IoMdClose className="icon" />
          </div>
        </div>
        <div>
          <p className="title">Something went wrong!</p>
          <p className="subtitle">{errorMessage}</p>
        </div>
      </div>
      <div className="btn-close">
        <IoMdClose className="btn-close__icon" />
      </div>
    </StyledMessageCard>
  );
};

export default MessageCard;
