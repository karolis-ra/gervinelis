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
import { sectionControl, addProducts } from "../../state/reservation/reducer";
import { useEffect } from "react";
import { fetchData } from "../../state/reservation/reducer";
import { ReservationItem } from "../../components/ReservationItem";
import { DefaultButton } from "../../components/DefaultButton";
import { BodyText } from "../../components/BodyText";

export const Reservation = () => {
  const { isTablet } = useQuery();
  const { activeServiceBlocks, products } = useSelector(reservationSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products?.length) {
      dispatch(fetchData());
    }
  }, []);

  const showHideServices = (e) => {
    dispatch(sectionControl(e.target.id));
  };

  const addOrder = (id, qty) => {
    const order = {};
    order.id = Number(id);
    order.qty = qty;
    dispatch(addProducts(order));
  };

  const handleProductSelect = (e) => {
    addOrder(e.target.id, 1);
  };

  const handleCayakOrder = (e) => {
    e.preventDefault();
    addOrder(e.target.id, e.target.elements.qty.value);
  };

  return (
    <PageLayout
      heroText="REZERVACIJA"
      contPadding="50px 0 80px 0"
      reservation={true}
    >
      <TitleText color={COLORS.gray} mobFs="16px" fs="18px">
        PASIRINKITE PASLAUGĄ
      </TitleText>
      <FlexWrapper
        width="90%"
        gap={isTablet ? "55px" : "20px"}
        justifyContent="center"
        margin="20px auto 0 auto"
      >
        {services.map(({ service, img, title }, index) => {
          return (
            <FlexWrapper flexDirection="column" gap="8px" alignItems="center">
              <StyledWrapper
                key={`icon-${index}`}
                bgImage={img}
                width={isTablet ? "290px" : "100px"}
                height={isTablet ? "290px" : "100px"}
                borderRadius="8px"
              />
              <BodyText mobFs="12px" fs="18px" color={COLORS.gray} fw="700">
                {title}
              </BodyText>
            </FlexWrapper>
          );
        })}
      </FlexWrapper>
      <DateForm></DateForm>
      {services.map(({ service }, index) => {
        const filteredProducts = products.filter((singleProduct) => {
          return singleProduct.key === service;
        });
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
              closed={!activeServiceBlocks.includes(service)}
            >
              {filteredProducts.map(
                (
                  { key, id, name, currency, unit_price, description },
                  index
                ) => {
                  const desc = JSON.parse(description);

                  return (
                    <ReservationItem
                      key={`card-${index}`}
                      id={id}
                      images={["./images/apgyvendinimas.png"]}
                      title={name}
                      description={desc.description}
                      price={unit_price}
                      perks={[]}
                      handleOrder={handleProductSelect}
                      handleCayakOrder={handleCayakOrder}
                      service={service}
                    />
                  );
                }
              )}
            </StyledBlock>
          </FlexWrapper>
        );
      })}
      <DefaultButton to="/info">TOLIAU</DefaultButton>
    </PageLayout>
  );
};

const StyledBlock = styled.div`
  overflow-x: hidden;
  max-height: ${(props) => (props.closed === true ? "0px" : "500px")};
  transition: all 0.5s ease-in-out;
`;

const StyledWrapper = styled(FlexWrapper)`
  box-sizing: border-box;

  &:hover {
    border: 5px solid ${COLORS.creme};
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }
`;
