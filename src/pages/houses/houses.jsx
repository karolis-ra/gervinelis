import React, { useState, useEffect } from "react";
import { PageLayout } from "../../components/Layouts/PageLayout";
import { ShortAbout } from "../../components/ShortAbout";
import { TitleText } from "../../components/TitleText";
import { FlexWrapper } from "../../components/Wrappers/FlexWrapper";
import { useQuery } from "../../styles/breakpoints";
import { COLORS } from "../../styles/colors";
import { ServiceBlock } from "../home/sections/ServiceBlock";
import { services } from "../home/home";
import { ServiceCard } from "../../components/ServiceCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../state/reservation/reducer";
import { reservationSelector } from "../../state/reservation/selector";

export const Houses = () => {
  const { products } = useSelector(reservationSelector);
  const { isXlgTablet, isTablet } = useQuery();
  const dispatch = useDispatch();
  const [housingList, setHousingList] = useState([]);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchData());
    }
    if (products.length > 0) {
      const houses = products.filter((item) => {
        return item.key === "housing";
      });
      setHousingList(houses);
    }
  }, [products]);
  return (
    <PageLayout
      heroText="APGYVENDINIMAS"
      heroImg="./images/apgyvendinimas.png"
      heroBtnText="REZERVUOKITE VIETĄ"
      contPadding="85px 0 135px 0"
    >
      <ShortAbout
        imageSrcLeft="./images/doodle-left.svg"
        imageSrcRight="./images/doodle-right.svg"
        width="285px"
        heroText="Siūlome skirtingo dydžio ir komplektacijų namelius atsižvelgiant į jūsų poreikius. Drąsiausiems - nakvynę palapinėje ar hamake. Nameliai turi ir papildomų pramogų - pirtys ir kubilai."
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
          {housingList.map(({ name, description, unit_price }, index) => {
            const desc = JSON.parse(description);
            return (
              <ServiceCard
                key={`card-${index}`}
                images={["./images/apgyvendinimas.png"]}
                title={name}
                description={desc.description}
                price={unit_price}
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
