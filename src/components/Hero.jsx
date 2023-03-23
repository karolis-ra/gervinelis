import React from "react";
import styled from "styled-components";
import { Navigation } from "./Navigation";
import { COLORS } from "../styles/colors";
import { Text } from "./Text";
import { DefaultButton } from "./DefaultButton";
import { useQuery } from "../styles/breakpoints";

export const Hero = ({ bgImage, text, btnText, heroHeight, contPadding }) => {
  const { isTablet } = useQuery();
  return (
    <HeroWrapper bgImage={bgImage} height={heroHeight}>
      <Navigation />
      <HeroContent contPadding={contPadding}>
        <Text
          width="80%"
          margin="0 auto"
          color={COLORS.white}
          align="center"
          fs={isTablet ? "56px" : "24px"}
          fw="700"
        >
          {text}
        </Text>
        {btnText && (
          <DefaultButton
            fs={isTablet ? "24px" : "16px"}
            margin="32px 0 0 0"
            reverse={1}
          >
            {btnText}
          </DefaultButton>
        )}
      </HeroContent>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  max-width: 1800px;
  display: flex;
  flex-direction: column;
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: ${(props) => props.height};
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: ${(props) => props.contPadding};
`;
