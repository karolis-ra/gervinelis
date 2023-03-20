import React from "react";
import { COLORS } from "../styles/colors";
import { BodyText } from "./BodyText";
import { FlexWrapper } from "./Wrappers/FlexWrapper";
import { Image } from "./Image";
import { useQuery } from "../styles/breakpoints";

export const ShortAbout = ({ imageSrcLeft, imageSrcRight }) => {
  const { isTablet } = useQuery();
  return (
    <FlexWrapper
      backgroundColor={COLORS.forestGreen}
      padding="40px 0"
      gap="80px"
    >
      {isTablet && <Image src={imageSrcLeft} width="200px" />}

      <FlexWrapper
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={isTablet ? "46px" : "34px"}
        padding={!isTablet && "0 24px"}
      >
        <BodyText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          exercitationem neque ut incidunt fugiat? Necessitatibus autem non rem
          deserunt excepturi quo fugit eveniet perferendis ex explicabo est,
          laborum rerum quia.
        </BodyText>
        <Image src="./images/react-logo.png" width="45px" />
      </FlexWrapper>
      {isTablet && <Image src={imageSrcRight} width="200px" />}
    </FlexWrapper>
  );
};
