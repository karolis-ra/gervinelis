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
  heroText,
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
        <BodyText>{heroText}</BodyText>
        <Image src="./images/gervinelis_logo.png" width="100px" />
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
