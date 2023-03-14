import styled from "styled-components";
import React from "react";
import { FlexWrapper } from "./Wrappers/FlexWrapper";
import { COLORS } from "../styles/colors";

export const Navigation = () => {
  return (
    <NavigationWrapper justifyContent="space-between">
      <Logo src="./images/react-logo.png" />
      <FlexWrapper gap="6px" flexDirection="column" justifyContent="center">
        <Bar />
        <Bar />
        <Bar />
      </FlexWrapper>
    </NavigationWrapper>
  );
};

const Bar = styled.div`
  width: 27px;
  border: 3px solid ${COLORS.creme};
  border-radius: 5px;
`;

const Logo = styled.img``;

const NavigationWrapper = styled(FlexWrapper)`
  padding: 15px 20px;
`;
