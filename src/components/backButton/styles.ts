import styled from "styled-components";

export const StyledBackButton = styled.div`
  display: flex;
  .icon {
    cursor: pointer;
    background-color: hsla(220, 100%, 50%);
    color: hsla(0, 0%, 100%);
    border-radius: 8px;
    transition: 0.2s ease-out;
    :hover {
      background-color: hsla(220, 100%, 75%);
    }
  }
`;
