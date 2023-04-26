import React, { useEffect } from "react";
import { Text } from "../../../components/Text";
import { FlexWrapper } from "../../../components/Wrappers/FlexWrapper";
import { COLORS } from "../../../styles/colors";
import { Image } from "../../../components/Image";
import { Link } from "react-router-dom";
import { useQuery } from "../../../styles/breakpoints";
import { BodyTitle } from "../../../components/BodyTitle";
import { useLocation } from "react-router-dom";

export const ServiceBlock = ({
  img,
  title,
  children,
  id,
  direction,
  padding,
}) => {
  const { isTablet } = useQuery();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <FlexWrapper
      padding={padding}
      flexDirection={isTablet ? `${direction}` : "column"}
      backgroundColor={COLORS.white}
      gap="24px"
    >
      <FlexWrapper alignItems="center" flex="1">
        <Image src={img} objectFit="cover" maxHeight="350px" height="300px" />
      </FlexWrapper>

      <FlexWrapper flexDirection="column" gap="24px" flex="1">
        <FlexWrapper flexDirection="column" gap="8px">
          <BodyTitle color={COLORS.forestGreen} align="left">
            {title}
          </BodyTitle>
          <Text fw="400" color={COLORS.gray} align="left">
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
