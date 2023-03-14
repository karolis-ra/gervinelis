import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  gap: ${(props) => props.gap || "0"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  gap: ${(props) => props.gap};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  justify-content: ${(props) => props.justifyContent};
  max-width: ${(props) => props.maxWidth};
  padding: ${(props) => props.padding};
  align-items: ${(props) => props.alignItem};
  border-radius: ${(props) => props.borderRadius};
  height: ${(props) => props.height};
`;
