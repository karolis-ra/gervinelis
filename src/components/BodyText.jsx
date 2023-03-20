import styled from "styled-components";
import { COLORS } from "../styles/colors";
import { tabletMF } from "../styles/breakpoints";

export const BodyText = styled.div`
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  margin: ${(props) => props.margin};
  flex: ${(props) => props.flex};
  color: ${(props) => props.color || COLORS.creme};
  font-weight: ${(props) => props.fw};
  font-size: ${(props) => props.mobFs || "16px"};
  text-align: ${(props) => props.align || "center"};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};

  @media ${tabletMF} {
    font-size: ${(props) => props.fs || "18px"};
  }
`;
