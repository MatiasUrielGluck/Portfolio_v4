import { styled } from "styled-components";

export const InfoContainer = styled.div`
  background: ${(props) => props.theme.background.container};
  box-shadow: #0000003d 0 3px 8px;
  border-radius: 16px;
  padding: 20px;
  height: fit-content;
`;
