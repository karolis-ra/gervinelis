import React from "react";
import { Text } from "../../../components/Text";
import { FlexWrapper } from "../../../components/Wrappers/FlexWrapper";
import { COLORS } from "../../../styles/colors";
import { Image } from "../../../components/Image";
import { Link } from "react-router-dom";
import { useQuery } from "../../../styles/breakpoints";

export const ServiceBlock = ({ img, title, children, id, direction }) => {
  const { isTablet } = useQuery();
  return (
    <FlexWrapper
      padding={isTablet ? "16px 10%" : "16px 24px"}
      flexDirection={isTablet ? `${direction}` : "column"}
      backgroundColor={COLORS.white}
      gap="24px"
    >
      <FlexWrapper alignItems="center" flex="1">
        <Image src={img} />
      </FlexWrapper>

      <FlexWrapper flexDirection="column" gap="24px" flex="1">
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
    </FlexWrapper>
  );
};
