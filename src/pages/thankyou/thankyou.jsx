import React from "react";
import { PageLayout } from "../../components/Layouts/PageLayout";
import { TitleText } from "../../components/TitleText";
import { BodyText } from "../../components/BodyText";
import { useQuery } from "../../styles/breakpoints";
import { FlexWrapper } from "../../components/Wrappers/FlexWrapper";
import { Image } from "../../components/Image";
import { COLORS } from "../../styles/colors";

export const Thankyou = () => {
  const { isTablet } = useQuery();

  return (
    <FlexWrapper
      flexDirection="column"
      alignItems="center"
      height="100vh"
      justifyContent="center"
    >
      <Image
        src="./images/check-circle.png"
        width={isTablet ? "220px" : "150px"}
      />
      <TitleText color={COLORS.gray} margin="50px 0 0 0">
        JŪSŲ UŽSAKYMAS PRIIMTAS
      </TitleText>
      <BodyText color={COLORS.gray} margin="10px 0 0 0">
        Greitu metu su Jumis susisieksime
      </BodyText>
      <TitleText margin="24px 0 0 0">
        Dekojame, kad renkates GERVINĖLĮ
      </TitleText>
    </FlexWrapper>
  );
};
