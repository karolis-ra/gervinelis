import React from "react";
import { BodyText } from "../../components/BodyText";
import { TitleText } from "../../components/TitleText";
import { DefaultButton } from "../../components/DefaultButton";
import { Image } from "../../components/Image";
import { PageLayout } from "../../components/Layouts/PageLayout";
import { FlexWrapper } from "../../components/Wrappers/FlexWrapper";
import { useQuery } from "../../styles/breakpoints";
import { COLORS } from "../../styles/colors";

export const AboutUs = () => {
  const { isTablet } = useQuery();
  return (
    <PageLayout
      heroImg="./images/Foto.png"
      heroText="SUSIPAŽINKIME"
      contPadding="150px 0 250px 0"
    >
      <TitleText
        align="left"
        color={COLORS.forestGreen}
        padding={isTablet ? "50px 10% 20px 10%" : "16px 24px"}
        fs={isTablet ? "32px" : "24px"}
      >
        GERVINĖLIS.LT
      </TitleText>
      <FlexWrapper
        flexDirection={isTablet ? "row-reverse" : "column"}
        padding={isTablet ? "50px 10% 20px 10%" : "16px 24px"}
        gap="30px"
      >
        <Image src="./images/baidares.png" flex="1" />
        <BodyText align="left" color={COLORS.gray} fw="400" flex="1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          deleniti maiores quasi quo quae voluptatum reiciendis labore eius
          perspiciatis ut? Temporibus neque, quos at nemo eius itaque corrupti
          quis? Exercitationem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dicta deleniti maiores quasi quo quae voluptatum
          reiciendis labore eius perspiciatis ut? Temporibus neque, quos at nemo
          eius itaque corrupti quis? Exercitationem.
        </BodyText>
      </FlexWrapper>
      <DefaultButton to="/rezervacija" margin="20px 0">
        REZERVUOKITE
      </DefaultButton>
    </PageLayout>
  );
};
