import styled from "styled-components";

export const Image = styled.img`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  object-fit: ${(props) => props.objectFit};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;
