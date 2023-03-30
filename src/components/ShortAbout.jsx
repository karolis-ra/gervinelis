import React from "react";
import { COLORS } from "../styles/colors";
import { BodyText } from "./BodyText";
import { FlexWrapper } from "./Wrappers/FlexWrapper";
import { Image } from "./Image";
import { useQuery } from "../styles/breakpoints";

export const ShortAbout = ({
  imageSrcLeft,
  imageSrcRight,
  imgPaddingTop,
  imgPaddingBot,
  width,
  marginTop,
  marginBottom,
  padding,
  transform,
  alignItems,
  alignLeftDoodle,
  alignRightDoodle,
}) => {
  const { isTablet } = useQuery();
  return (
    <FlexWrapper
      backgroundColor={COLORS.forestGreen}
      gap="80px"
      padding={padding}
      height="320px"
    >
      {isTablet && (
        <FlexWrapper alignItems={alignLeftDoodle} marginTop={marginTop}>
          <Image src={imageSrcLeft} width={width} padding={imgPaddingTop} />
        </FlexWrapper>
      )}

      <FlexWrapper
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={isTablet ? "46px" : "34px"}
        padding={!isTablet && "24px"}
      >
        <BodyText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          exercitationem neque ut incidunt fugiat? Necessitatibus autem non rem
          deserunt excepturi quo fugit eveniet perferendis ex explicabo est,
          laborum rerum quia.
        </BodyText>
        <Image src="./images/react-logo.png" width="45px" />
      </FlexWrapper>
      {isTablet && (
        <FlexWrapper alignItems={alignRightDoodle} marginBottom={marginBottom}>
          <Image
            src={imageSrcRight}
            width={width}
            padding={imgPaddingBot}
            transform={transform}
          />
        </FlexWrapper>
      )}
    </FlexWrapper>
  );
};
