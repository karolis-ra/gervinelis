import styled from "styled-components";

export const Image = styled.img`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  object-fit: ${(props) => props.objectFit || "contain"};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  height: ${(props) => props.height};
  flex: ${(props) => props.flex};
`;
