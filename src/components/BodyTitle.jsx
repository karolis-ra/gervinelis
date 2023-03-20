import styled from "styled-components";
import { COLORS } from "../styles/colors";

export const BodyTitle = styled.div`
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color || COLORS.creme};
  font-weight: ${(props) => props.fw || "600"};
  font-size: ${(props) => props.mobFs || "18px"};
  text-align: ${(props) => props.align || "center"};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};
`;
