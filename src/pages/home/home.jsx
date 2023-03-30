import React from "react";
import styled from "styled-components";
import { DefaultButton } from "../../components/DefaultButton";
import { Text } from "../../components/Text";
import { FlexWrapper } from "../../components/Wrappers/FlexWrapper";
import { COLORS } from "../../styles/colors";
import { MeetUs } from "./sections/ MeetUs";
import { ServiceBlock } from "./sections/ServiceBlock";
import { SimpleSlider } from "./sections/Slider";
import { PageLayout } from "../../components/Layouts/PageLayout";
import { useQuery } from "../../styles/breakpoints";
import { BodyText } from "../../components/BodyText";

export const services = [
  {
    title: "PLAUKIMAS BAIDARĖMIS",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nesciunt laudantium facere nobis quaerat modi quibusdam doloremque aspernatur earum ipsa doloribus praesentium repellat ullam itaque rerum omnis, porro velit vel.",
    id: "baidares",
    img: "./images/cayak.png",
  },
  {
    title: "APGYVENDINIMAS",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nesciunt laudantium facere nobis quaerat modi quibusdam doloremque aspernatur earum ipsa doloribus praesentium repellat ullam itaque rerum omnis, porro velit vel.",
    id: "apgyvendinimas",
    img: "./images/apgyvendinimas.png",
  },
  {
    title: "PIRTYS IR KUBILAI",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nesciunt laudantium facere nobis quaerat modi quibusdam doloremque aspernatur earum ipsa doloribus praesentium repellat ullam itaque rerum omnis, porro velit vel.",
    id: "pirtysirkubilai",
    img: "./images/pirtys.png",
  },
];

export const Home = () => {
  const { isTablet } = useQuery();
  return (
    <>
      <PageLayout
        heroImg="./images/heroBg.png"
        heroText="POILSIS IR PRAMOGOS GAMTOJE"
        heroBtnText="REZERVUOKITE VIETĄ"
        contPadding="135px 0 135px 0"
      >
        <MeetUs />
        <Text
          fs={isTablet ? "32px" : "18px"}
          align="left"
          fw="600"
          color={COLORS.gray}
          padding={isTablet ? "50px 10% 20px 10%" : "16px 24px"}
          backgroundColor={COLORS.white}
        >
          Mes Jums siūlome
        </Text>
        {services.map(({ title, description, img, id }, index) => {
          return (
            <ServiceBlock
              key={index}
              title={title}
              img={img}
              id={id}
              direction={index % 2 !== 0 ? "row-reverse" : "row"}
              padding={isTablet ? "16px 10%" : "16px 24px"}
            >
              {description}
            </ServiceBlock>
          );
        })}
        <BodyText
          fs="18px"
          fw="600"
          color={COLORS.gray}
          backgroundColor={COLORS.white}
          padding={isTablet ? "0 0 0 10%" : "0 0 0 24px"}
          align="left"
        >
          Klientai mus vertina
        </BodyText>
        <SliderBox>
          <SimpleSlider />
        </SliderBox>
        <FlexWrapper flexDirection="column" gap="32px" padding="36px 0">
          <Text align="center" fs="18px" fw="600" color={COLORS.gray}>
            Turite klausimų?
          </Text>
          <DefaultButton>SUSISIEKITE</DefaultButton>
        </FlexWrapper>
      </PageLayout>
    </>
  );
};

const SliderBox = styled.div`
  background-color: ${COLORS.white};
`;
