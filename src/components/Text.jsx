import styled from "styled-components";

export const Text = styled.div`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fw};
  font-size: ${(props) => props.fs};
  text-align: ${(props) => props.align};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};
`;
