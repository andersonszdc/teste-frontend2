import styled from "styled-components";

export const StyledRegistrationModal = styled.div`
  background-color: hsl(0, 0%, 100%);
  width: 60%;
  padding: 24px;
  border-radius: 16px;

  .title {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 48px;
  }

  .inputs {
    display: grid;
    gap: 24px;
    grid-template-columns: auto auto;
  }
`;

export const WrapperRegistrationModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 90%, 60%);
  backdrop-filter: blur(4px);

  display: flex;
  align-items: center;
  justify-content: center;
`;
