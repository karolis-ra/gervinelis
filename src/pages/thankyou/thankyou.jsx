import React from "react";
import { PageLayout } from "../../components/Layouts/PageLayout";
import { TitleText } from "../../components/TitleText";
import { BodyText } from "../../components/BodyText";
import { BodyTitle } from "../../components/BodyTitle";
import { FlexWrapper } from "../../components/Wrappers/FlexWrapper";
import { DefaultButton } from "../../components/DefaultButton";
import { Image } from "../../components/Image";

export const Thankyou = () => {
  return (
    <PageLayout>
      <FlexWrapper flexDirection="column" alignItems="center">
        <Image src="./images/check-circle.png" width="220px" />
        <TitleText>JŪSŲ UŽSAKYMAS PRIIMTAS</TitleText>
        <BodyText>Greitu metu su Jumis susisieksime</BodyText>
        <BodyTitle>Dekojame, kad renkates GERVINĖLĮ</BodyTitle>
        <DefaultButton to="/" reverse>
          PAGRINDINIS
        </DefaultButton>
      </FlexWrapper>
    </PageLayout>
  );
};
