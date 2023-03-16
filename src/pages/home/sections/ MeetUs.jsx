import React from "react";
import { Text } from "../../../components/Text";
import { FlexWrapper } from "../../../components/Wrappers/FlexWrapper";
import { COLORS } from "../../../styles/colors";
import { Image } from "../../../components/Image";
import { useQuery } from "../../../styles/breakpoints";

export const MeetUs = () => {
  const { isTablet } = useQuery();
  return (
    <FlexWrapper backgroundColor={COLORS.forestGreen} flexDirection="column">
      {/* <Text
        fs={isTablet ? "32px" : "18px"}
        fw="600"
        color={isTablet ? COLORS.gray : COLORS.creme}
        align="left"
        padding={isTablet ? "50px 10%" : " 36px 0 0 24px"}
        backgroundColor={isTablet && COLORS.white}
      >
        Praleiskite laisvalaikį su mumis
      </Text> */}
      <FlexWrapper
        margin="0 auto"
        padding={isTablet ? "40px 10%" : "24px 24px"}
        flexDirection={isTablet ? "row-reverse" : "column"}
        backgroundColor={COLORS.forestGreen}
        gap={isTablet ? "24px" : "8px"}
      >
        <FlexWrapper flexDirection="column" gap="24px" flex="1">
          <Image src="./images/Foto.png" />
        </FlexWrapper>
        <FlexWrapper
          flexDirection="column"
          gap="24px"
          flex="1"
          justifyContent="center"
        >
          <Text
            fs={isTablet ? "24px" : "16px"}
            fw="600"
            color={COLORS.creme}
            align="left"
          >
            SUSIPAŽINKIME
          </Text>
          <Text
            color={COLORS.white}
            fs={isTablet ? "18px" : "16px"}
            align={isTablet ? "left" : "center"}
            padding={isTablet && "0 80px 0 0"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, illum
            placeat delectus veniam temporibus molestiae magni dolorum
            repellendus eligendi at animi, tempora autem rerum praesentium
            ratione maiores in quae quos.
          </Text>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};
