import React from "react";
import styled from "styled-components";
import { DefaultButton } from "../../components/DefaultButton";
import { Hero } from "../../components/Hero";
import { Text } from "../../components/Text";
import { FlexWrapper } from "../../components/Wrappers/FlexWrapper";
import { COLORS } from "../../styles/colors";
import { MeetUs } from "./sections/ MeetUs";
import { ServiceBlock } from "./sections/ServiceBlock";
import { SimpleSlider } from "./sections/Slider";

const services = [
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
  return (
    <>
      <Hero bgImage="./images/heroBg.png" />
      <MeetUs />
      <Text
        fs="18px"
        fw="600"
        color={COLORS.gray}
        padding="16px 24px"
        backgroundColor={COLORS.white}
      >
        Mes Jums siūlome
      </Text>
      {services.map(({ title, description, img, id }, index) => {
        return (
          <ServiceBlock key={index} title={title} img={img} id={id}>
            {description}
          </ServiceBlock>
        );
      })}
      <Text
        fs="18px"
        fw="600"
        color={COLORS.gray}
        padding="16px 24px"
        backgroundColor={COLORS.white}
      >
        Klientai mus vertina
      </Text>
      <SliderBox>
        <SimpleSlider />
      </SliderBox>
      <FlexWrapper flexDirection="column" gap="32px" padding="36px 0">
        <Text align="center" fs="18px" fw="600" color={COLORS.gray}>
          Turite klausimų?
        </Text>
        <DefaultButton>SUSISIEKITE</DefaultButton>
      </FlexWrapper>
    </>
  );
};

const SliderBox = styled.div`
  background-color: ${COLORS.white};
`;
