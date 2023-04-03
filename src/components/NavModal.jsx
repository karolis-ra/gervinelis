import React from "react";
import styled from "styled-components";
import { COLORS } from "../styles/colors";
import { FlexWrapper } from "./Wrappers/FlexWrapper";
import { navOptions } from "../assets/navOptions";
import { Link } from "react-router-dom";
import { Text } from "./Text";
import { Image } from "./Image";
import { useDispatch } from "react-redux";
import { hideModal } from "../state/navigation/reducer";
import { DefaultButton } from "./DefaultButton";

export const NavModal = () => {
  const dispatch = useDispatch();

  const closeNavModal = () => {
    dispatch(hideModal());
  };
  return (
    <StyledWrapper flexDirection="column">
      <FlexWrapper
        alignSelf="flex-end"
        width="45px"
        padding="0 25px"
        flex="2"
        onClick={closeNavModal}
      >
        <Image src="./images/x_icon.png" />
      </FlexWrapper>
      <FlexWrapper
        flexDirection="column"
        justifyContent="flex-start"
        gap="20px"
        flex="10"
        padding="150px 0 0 0"
      >
        {navOptions.map((singleOption, index) => {
          return (
            <Link
              key={`footerOption-${index}`}
              to={singleOption.link}
              onClick={closeNavModal}
            >
              <Text
                align="center"
                color={COLORS.forestGreen}
                fw="600"
                fs="20px"
              >
                {singleOption.title}
              </Text>
            </Link>
          );
        })}
        <DefaultButton to="/rezervacija" onClick={closeNavModal}>
          REZERVUOKITE
        </DefaultButton>
      </FlexWrapper>
    </StyledWrapper>
  );
};

const StyledWrapper = styled(FlexWrapper)`
  position: absolute;
  width: 100vw;
  height: 100%;
  background-color: ${COLORS.white};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  overflow: scroll;
  justify-content: center;
  align-items: center;
`;
