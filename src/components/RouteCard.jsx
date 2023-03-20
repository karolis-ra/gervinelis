import React from "react";
import { BodyText } from "./BodyText";
import { BodyTitle } from "./BodyTitle";
import { FlexWrapper } from "./Wrappers/FlexWrapper";
import { Image } from "./Image";
import { COLORS } from "../styles/colors";

export const RouteCard = ({ routeFt, routeName, route, length }) => {
  return (
    <FlexWrapper flexDirection="column" flex="1 0 25%">
      <Image src={routeFt} />
      <FlexWrapper
        gap="8px"
        flexDirection="column"
        padding="24px"
        border={`1px solid ${COLORS.gray}`}
        borderBottomLeftRadius="8px"
        borderBottomRightRadius="8px"
        borderTop="none"
      >
        <BodyTitle align="left" color={COLORS.gray}>
          {routeName}
        </BodyTitle>
        <FlexWrapper margin="8px 0 0 0" gap="10px">
          <Image width="18px" src="./images/map-pin.png" />
          <BodyText color={COLORS.gray}>{route}</BodyText>
        </FlexWrapper>
        <FlexWrapper gap="10px">
          <Image width="18px" src="./images/clock.png" />
          <BodyText color={COLORS.gray}>{length}</BodyText>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};
