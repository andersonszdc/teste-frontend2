import styled from "styled-components";

export const StyledHome = styled.main`
  .list {
    margin-top: 64px;
    display: flex;
    gap: 40px;
  }
`;

export const StyledCardCompany = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 32px;
  border-radius: 8px;
  gap: 16px;

  background-color: hsla(220, 100%, 50%);
  color: #ffffff;

  cursor: pointer;
  transition: 0.2s ease-out;

  .logo {
    font-size: 48px;
    font-weight: 500;
  }

  .name {
    font-size: 18px;
    font-weight: 500;
  }

  :hover {
    background-color: #90b4fb;
  }
`;
