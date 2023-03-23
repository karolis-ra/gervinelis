import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  flex: ${(props) => props.flex};
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.minWidth};
  margin: ${(props) => props.margin};
  gap: ${(props) => props.gap || "0"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  gap: ${(props) => props.gap};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  justify-content: ${(props) => props.justifyContent};
  padding: ${(props) => props.padding};
  align-items: ${(props) => props.alignItems};
  align-self: ${(props) => props.alignSelf};
  border-radius: ${(props) => props.borderRadius};
  border-bottom-left-radius: ${(props) => props.borderBottomLeftRadius};
  border-bottom-right-radius: ${(props) => props.borderBottomRightRadius};
  border-bottom: ${(props) => props.borderBottom};
  border-top: ${(props) => props.borderTop};
  height: ${(props) => props.height};
  flex-wrap: ${(props) => props.flexWrap};
`;
