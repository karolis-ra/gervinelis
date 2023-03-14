import styled from "styled-components";

export const GhostBtn = styled.btn`
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
  color: ${(props) => props.colors};
  border-radius: 8px;
`;
