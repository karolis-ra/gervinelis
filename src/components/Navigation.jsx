import styled from "styled-components";
import React from "react";
import { FlexWrapper } from "./Wrappers/FlexWrapper";
import { COLORS } from "../styles/colors";
import { useQuery } from "../styles/breakpoints";
import { navOptions } from "../assets/navOptions";
import { Text } from "./Text";
import { Link } from "react-router-dom";
import { DefaultButton } from "./DefaultButton";

export const Navigation = () => {
  const { isTablet, isSmDesktop } = useQuery();
  return (
    <>
      {isSmDesktop ? (
        <NavWrapper>
          <Logo src="./images/react-logo.png" />
          <FlexWrapper
            flexDirection={isTablet ? "row" : "column"}
            justifyContent="center"
            alignItems="center"
            gap={isTablet ? "36px" : "8px"}
          >
            {navOptions.map((singleOption) => {
              return (
                <Link to={singleOption.link}>
                  <Text
                    align="center"
                    fs="18px"
                    color={COLORS.forestGreen}
                    fw="600"
                  >
                    {singleOption.title}
                  </Text>
                </Link>
              );
            })}
          </FlexWrapper>
          <DefaultButton>REZERVUOKITE</DefaultButton>
        </NavWrapper>
      ) : (
        <>
          <FlexWrapper justifyContent="space-between" padding="25px 50px">
            <Logo src="./images/react-logo.png" />
            <FlexWrapper
              gap="6px"
              flexDirection="column"
              justifyContent="center"
            >
              <Bar />
              <Bar />
              <Bar />
            </FlexWrapper>
          </FlexWrapper>
        </>
      )}
    </>
  );
};

const NavWrapper = styled(FlexWrapper)`
  width: 100%;
  justify-content: center;
  gap: 80px;
  padding: 15px 0;
  background: rgba(204, 204, 204, 0.5);
`;

const Bar = styled.div`
  width: 27px;
  border: 3px solid ${COLORS.creme};
  border-radius: 5px;
`;

const Logo = styled.img`
  margin-right: 20px;
`;
