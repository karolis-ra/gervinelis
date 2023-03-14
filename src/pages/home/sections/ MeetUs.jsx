import React from "react";
import { Text } from "../../../components/Text";
import { FlexWrapper } from "../../../components/Wrappers/FlexWrapper";
import { COLORS } from "../../../styles/colors";
import { Image } from "../../../components/Image";

export const MeetUs = () => {
  return (
    <FlexWrapper
      padding="38px 24px"
      flexDirection="column"
      backgroundColor={COLORS.forestGreen}
      gap="8px"
    >
      <FlexWrapper flexDirection="column" gap="24px">
        <Text fs="18px" fw="600" color={COLORS.creme} align="left">
          Praleiskite laisvalaikį su mumis
        </Text>
        <Image src="./images/Foto.png" />
      </FlexWrapper>
      <FlexWrapper flexDirection="column" gap="24px">
        <Text fs="18px" fw="600" color={COLORS.creme} align="left">
          Praleiskite laisvalaikį su mumis
        </Text>
        <Text color={COLORS.white}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, illum
          placeat delectus veniam temporibus molestiae magni dolorum repellendus
          eligendi at animi, tempora autem rerum praesentium ratione maiores in
          quae quos.
        </Text>
      </FlexWrapper>
    </FlexWrapper>
  );
};
