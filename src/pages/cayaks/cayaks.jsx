import React from "react";
import { PageLayout } from "../../components/Layouts/PageLayout";
import { ShortAbout } from "../../components/ShortAbout";
import { TitleText } from "../../components/TitleText";
import { FlexWrapper } from "../../components/Wrappers/FlexWrapper";
import { useQuery } from "../../styles/breakpoints";
import { COLORS } from "../../styles/colors";
import { routes } from "../../assets/route";
import { RouteCard } from "../../components/RouteCard";
import { ServiceBlock } from "../home/sections/ServiceBlock";
import { services } from "../home/home";
export const Cayaks = () => {
  const { isTablet } = useQuery();
  return (
    <PageLayout
      heroText="PLAUKIMAS BAIDARĖMIS"
      heroImg="./images/baidares_v2.png"
      heroBtnText="REZERVUOKITE VIETĄ"
      contPadding="85px 0 135px 0"
    >
      <ShortAbout
        imageSrcLeft="./images/leaf-left.svg"
        imageSrcRight="./images/leaf-right.png"
      />
      <FlexWrapper
        padding={isTablet ? "50px 10% 20px 10%" : "16px 24px"}
        flexDirection="column"
      >
        <TitleText color={COLORS.gray} align="left">
          MARŠRUTAI
        </TitleText>
        <FlexWrapper flexWrap="wrap" gap="24px" margin="30px 0 0 0">
          {routes.map(({ routeName, route, img, length }, index) => {
            return (
              <RouteCard
                key={`card-${index}`}
                routeFt={img}
                routeName={routeName}
                route={route}
                length={length}
              />
            );
          })}
        </FlexWrapper>
        <TitleText color={COLORS.gray} align="left" margin="40px 0 25px 0">
          PAPILDOMAI SIŪLOME
        </TitleText>
        <FlexWrapper flexDirection={isTablet ? "row" : "column"} gap="24px">
          {services.map(({ title, description, img, id }, index) => {
            if (id !== "baidares") {
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
