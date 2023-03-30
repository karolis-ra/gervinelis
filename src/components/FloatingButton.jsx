import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../styles/colors";

import React from "react";

export const FloatingButton = () => {
  return <DefaultButton to="/rezervacija">REERVUOKITE</DefaultButton>;
};

export const DefaultButton = styled(Link)`
  position: fixed;
  top: 90%;
  right: 20%;

  
  padding: 10px 18px;
  border-radius: 8px;
  text-decoration: none;
  color: ${(props) =>
    props.reverse === 1 ? COLORS.creme : COLORS.forestGreen};
  font-weight: 700;
  background-color: ${(props) =>
    props.reverse === 1 ? COLORS.forestGreen : COLORS.creme};
  align-self: center;
  font-size: ${(props) => props.fs};
  margin: ${(props) => props.margin};
  transition: 0.3s; ease-out;
  &:hover {
    background-color: ${(props) =>
      props.reverse === 1 ? COLORS.darkForest : COLORS.brown};
      color: ${(props) =>
        props.reverse === 1 ? COLORS.darkCreme : COLORS.darkForest};
  }
`;
