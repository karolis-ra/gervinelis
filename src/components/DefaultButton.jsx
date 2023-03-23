import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../styles/colors";

export const DefaultButton = styled(Link)`
  padding: 10px 18px;
  border-radius: 8px;
  text-decoration: none;
  color: ${(props) => (props.reverse ? COLORS.forestGreen : COLORS.creme)};
  font-weight: 700;
  background-color: ${(props) =>
    props.reverse === 1 ? COLORS.creme : COLORS.forestGreen};
  align-self: center;
  font-size: ${(props) => props.fs};
  margin: ${(props) => props.margin};
  transition: 0.3s; ease-out;
  &:hover {
    background-color: ${(props) =>
      props.reverse === 1 ? COLORS.forestGreen : COLORS.creme};
      color: ${(props) =>
        props.reverse === 1 ? COLORS.creme : COLORS.forestGreen};
  }
`;
