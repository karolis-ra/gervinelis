import React from "react";
import { PageLayout } from "../../components/Layouts/PageLayout";
import { FlexWrapper } from "../../components/Wrappers/FlexWrapper";
import { services } from "../../assets/services";
import { useQuery } from "../../styles/breakpoints";
import { TitleText } from "../../components/TitleText";
import { COLORS } from "../../styles/colors";
import { DateForm } from "../../components/DateForm";
import styled from "styled-components";
import { reservationSelector } from "../../state/reservation/selector";
import { useSelector, useDispatch } from "react-redux";
import { sectionControl } from "../../state/reservation/reducer";

export const Reservation = () => {
  const { isTablet } = useQuery();
  const { activeServiceBlocks } = useSelector(reservationSelector);
  const dispatch = useDispatch();

  const showHideServices = (e) => {
    dispatch(sectionControl(e.target.id));
  };

  return (
    <PageLayout
      heroText="REZERVACIJA"
      contPadding="50px 0 80px 0"
      reservation={true}
    >
      <TitleText color={COLORS.gray}>
        PASIRINKITE PASLAUGĄ KURIĄ NORITE REZERVUOTI
      </TitleText>
      <FlexWrapper
        width="90%"
        gap={isTablet ? "55px" : "20px"}
        justifyContent="center"
        margin="0 auto"
      >
        {services.map(({ service, img }, index) => {
          return (
            <FlexWrapper
              key={`icon-${index}`}
              bgImage={img}
              width={isTablet ? "290px" : "100px"}
              height={isTablet ? "290px" : "100px"}
              borderRadius="8px"
            ></FlexWrapper>
          );
        })}
      </FlexWrapper>
      <DateForm></DateForm>
      {services.map(({ service }, index) => {
        return (
          <FlexWrapper flexDirection="column" key={index}>
            <FlexWrapper
              justifyContent="space-between"
              backgroundColor={COLORS.forestGreen}
            >
              {service}
              <TitleText id={service} onClick={showHideServices}>
                zemyn
              </TitleText>
            </FlexWrapper>
            <StyledBlock
              flexDirection="column"
              id="serviceBlock"
              border="2px solid red"
              closed={activeServiceBlocks.includes(service)}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                cupiditate quo quod, magni laborum unde eaque architecto facere
                repellat illum. Nihil laboriosam minima facere quasi optio quia
                similique corporis sint!
              </p>
            </StyledBlock>
          </FlexWrapper>
        );
      })}
    </PageLayout>
  );
};

const StyledBlock = styled.div`
  overflow-x: hidden;
  max-height: ${(props) => (props.closed === true ? "0px" : "500px")};
  transition: all 0.5s ease-in-out;
`;
