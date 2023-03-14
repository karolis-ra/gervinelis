import React from "react";
import { Text } from "../../../components/Text";
import { FlexWrapper } from "../../../components/Wrappers/FlexWrapper";
import { COLORS } from "../../../styles/colors";
import { Image } from "../../../components/Image";
import { Link } from "react-router-dom";

export const ServiceBlock = ({ img, title, children, id }) => {
  return (
    <FlexWrapper
      padding="16px 24px"
      flexDirection="column"
      backgroundColor={COLORS.white}
      gap="24px"
    >
      <Image src={img} />
      <FlexWrapper flexDirection="column" gap="8px">
        <Text fs="18px" fw="600" color={COLORS.forestGreen} align="left">
          {title}
        </Text>
        <Text fs="16px" fw="400" color={COLORS.gray} align="left">
          {children}
        </Text>
      </FlexWrapper>
      <Link to={`/${id}`}>
        <FlexWrapper
          justifyContent="space-around"
          border={`1px solid ${COLORS.creme}`}
          width="122px"
          borderRadius="8px"
          padding="8px 16px"
        >
          <Text color={COLORS.forestGreen} fw="600" width="56px">
            Plačiau
          </Text>
          <Image width="24px" src="./images/arrow-right.png" />
        </FlexWrapper>
      </Link>
    </FlexWrapper>
  );
};
