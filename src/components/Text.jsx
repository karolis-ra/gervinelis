import styled from "styled-components";
import { COLORS } from "../styles/colors";

export const Text = styled.div`
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color || COLORS.creme};
  font-weight: ${(props) => props.fw};
  font-size: ${(props) => props.fs || "16px"};
  text-align: ${(props) => props.align || "center"};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};
  &:hover {
    text-decoration: ${(props) => props.textDecor};
  }
`;
