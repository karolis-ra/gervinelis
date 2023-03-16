import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  flex: ${(props) => props.flex};
  width: ${(props) => props.width};
  max-wdith: ${(props) => props.maxWidth};
  margin: ${(props) => props.margin};
  gap: ${(props) => props.gap || "0"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  gap: ${(props) => props.gap};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  justify-content: ${(props) => props.justifyContent};
  max-width: ${(props) => props.maxWidth};
  padding: ${(props) => props.padding};
  align-items: ${(props) => props.alignItems};
  border-radius: ${(props) => props.borderRadius};
  height: ${(props) => props.height};
`;
