import React from "react";
import { BodyText } from "./BodyText";
import { BodyTitle } from "./BodyTitle";
import { FlexWrapper } from "./Wrappers/FlexWrapper";
import { COLORS } from "../styles/colors";
import { useQuery } from "../styles/breakpoints";
import { TitleText } from "./TitleText";
import SmallSlider from "../pages/houses/sections/SmallSlider";

export const ServiceCard = ({ title, description, price, perks, images }) => {
  const { isXlgTablet, isTablet } = useQuery();
  return (
    <FlexWrapper
      flexDirection={isXlgTablet ? "row" : "column"}
      flex="1 0 25%"
      gap="24px"
    >
      <SmallSlider images={images} />
      <FlexWrapper gap="8px" flexDirection="column" flex="1">
        <BodyTitle
          mobFs={isTablet ? "24px" : "18px"}
          align="left"
          color={COLORS.forestGreen}
        >
          {title}
        </BodyTitle>
        <BodyText align="left" color={COLORS.gray}>
          {description}
        </BodyText>
        <FlexWrapper flexWrap="wrap" gap="10px">
          {perks.map((singlePerk, index) => {
            return (
              <BodyTitle
                color={COLORS.forestGreen}
                key={`perk-${index}`}
                align="left"
              >
                {singlePerk}
              </BodyTitle>
            );
          })}
        </FlexWrapper>
        <TitleText align="left" color={COLORS.gray}>
          {price}
        </TitleText>
      </FlexWrapper>
    </FlexWrapper>
  );
};
