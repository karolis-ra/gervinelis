import React from "react";
import styled from "styled-components";
import { Navigation } from "./Navigation";
import { COLORS } from "../styles/colors";
import { Text } from "./Text";
import { DefaultButton } from "./DefaultButton";

export const Hero = ({ bgImage }) => {
  return (
    <HeroWrapper bgImage={bgImage}>
      <Navigation />
      <HeroContent>
        <Text
          width="80%"
          margin="0 auto"
          color={COLORS.white}
          align="center"
          fs="24px"
          fw="700"
        >
          POILSIS IR PRAMOGOS GAMTOJE
        </Text>
        <DefaultButton reverse>REZERVUOKITE VIETĄ</DefaultButton>
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
  justify-content: center;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 85px 0 135px 0;
`;
