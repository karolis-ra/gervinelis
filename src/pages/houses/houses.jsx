import React from "react";
import { PageLayout } from "../../components/Layouts/PageLayout";
import { ShortAbout } from "../../components/ShortAbout";
import { TitleText } from "../../components/TitleText";
import { FlexWrapper } from "../../components/Wrappers/FlexWrapper";
import { useQuery } from "../../styles/breakpoints";
import { COLORS } from "../../styles/colors";
import { ServiceBlock } from "../home/sections/ServiceBlock";
import { services } from "../home/home";
import { houses } from "../../assets/houses";
import { ServiceCard } from "../../components/ServiceCard";

export const Houses = () => {
  const { isXlgTablet, isTablet } = useQuery();
  return (
    <PageLayout
      heroText="APGYVENDINIMAS"
      heroImg="./images/baidares_v2.png"
      heroBtnText="REZERVUOKITE VIETĄ"
      contPadding="85px 0 135px 0"
    >
      <ShortAbout
        imageSrcLeft="./images/doodle-left.svg"
        imageSrcRight="./images/doodle-right.svg"
        width="550px"
      />
      <FlexWrapper
        padding={isXlgTablet ? "50px 10% 20px 10%" : "16px 24px"}
        flexDirection="column"
      >
        <TitleText color={COLORS.gray} align="left">
          POILSIS GAMTOJE
        </TitleText>
        <FlexWrapper
          flexDirection="column"
          gap={isTablet ? "54px" : "24px"}
          margin="30px 0 0 0"
        >
          {houses.map(({ title, images, description, price, perks }, index) => {
            return (
              <ServiceCard
                key={`card-${index}`}
                images={images}
                title={title}
                description={description}
                price={price}
                perks={perks}
              />
            );
          })}
        </FlexWrapper>
        <TitleText color={COLORS.gray} align="left" margin="40px 0 25px 0">
          PAPILDOMAI SIŪLOME
        </TitleText>
        <FlexWrapper flexDirection={isXlgTablet ? "row" : "column"} gap="24px">
          {services.map(({ title, description, img, id }, index) => {
            if (id !== "apgyvendinimas") {
              return (
                <ServiceBlock
                  key={index}
                  title={title}
                  img={img}
                  id={id}
                  direction="column"
                >
                  {description}
                </ServiceBlock>
              );
            }
          })}
        </FlexWrapper>
      </FlexWrapper>
    </PageLayout>
  );
};
