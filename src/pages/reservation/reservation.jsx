import React, { useEffect } from "react";
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
import {
  sectionControl,
  addProducts,
  cancelProduct,
  handleCayaks,
  clearSingleProducts,
} from "../../state/reservation/reducer";
import { fetchData } from "../../state/reservation/reducer";
import { reservationInfo } from "../../state/reservation/reducer";
import { ReservationItem } from "../../components/ReservationItem";
import { DefaultButton } from "../../components/DefaultButton";
import { BodyText } from "../../components/BodyText";
import { Image } from "../../components/Image";
import { useState } from "react";
import { BodyTitle } from "../../components/BodyTitle";

export const Reservation = () => {
  const { isTablet } = useQuery();
  const {
    activeServiceBlocks,
    products,
    reservedDates,
    orderProducts,
    book_from,
    book_to,
    fetching,
  } = useSelector(reservationSelector);
  const dispatch = useDispatch();
  const [serviceList, setServiceList] = useState([]);
  const [filtereServiceList, setFilteredServiceList] = useState([]);
  const [cayaksReserved, setCayaksReserved] = useState(0);

  useEffect(() => {
    if (book_from && book_to) {
      if (reservedDates?.length === 0) {
        dispatch(fetchData());
        dispatch(reservationInfo());
      }
    }

    if (reservedDates.length > 0) {
      let filteredList = [];
      products.map((singleProduct) => {
        const productSchedule = reservedDates.filter(
          ({ product_id }) => product_id === singleProduct.id
        );
        const dates = Object.keys(productSchedule[0].booked_dates);
        const prod_id = productSchedule[0].product_id;

        const isDateReserved = dates.some((reservedDate) => {
          if (
            reservedDate >= book_from &&
            reservedDate <= book_to &&
            prod_id === 1
          ) {
            setCayaksReserved(
              productSchedule[0].booked_dates[reservedDate].qty
            );
          }
          return (
            reservedDate >= book_from &&
            reservedDate <= book_to &&
            prod_id !== 1
          );
        });

        if (isDateReserved) {
          return null;
        }
        return filteredList.push(singleProduct);
      });
      setFilteredServiceList(filteredList);
    }
  }, [book_from, book_to, reservedDates]);

  const showHideServices = (e) => {
    dispatch(sectionControl(e.target.id));
    if (!serviceList.includes(e.target.id)) {
      setServiceList([...serviceList, e.target.id]);
    } else {
      const newList = serviceList.filter((item) => item !== e.target.id);
      setServiceList(newList);
    }
  };

  const addOrder = (id, qty) => {
    const order = {};
    order.id = Number(id);
    order.qty = qty;
    dispatch(addProducts(order));
  };

  const cancelOrder = (e) => {
    const id = e.target.id;
    const order = {};
    order.id = Number(id);
    order.qty = 0;
    dispatch(cancelProduct(order));
  };

  const handleProductSelect = (e) => {
    addOrder(e.target.id, 1);
  };

  const handleCayakOrder = (id, qty) => {
    const order = {};
    order.id = Number(id);
    order.qty = qty;
    dispatch(handleCayaks(order));
  };

  const clearSingle = () => {
    dispatch(clearSingleProducts());
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
            <FlexWrapper
              flexDirection="column"
              gap="8px"
              alignItems="center"
              key={`box-${index}`}
            >
              <StyledWrapper
                id={service}
                key={`icon-${index}`}
                bgImage={img}
                width={isTablet ? "290px" : "100px"}
                height={isTablet ? "290px" : "100px"}
                borderRadius="8px"
                onClick={showHideServices}
                className={serviceList.includes(service) && "active"}
              />
              <BodyText mobFs="12px" fs="18px" color={COLORS.gray} fw="700">
                {title}
              </BodyText>
            </FlexWrapper>
          );
        })}
      </FlexWrapper>
      <DateForm></DateForm>
      {services.map(({ service, title }, index) => {
        const filteredProducts = filtereServiceList.filter((singleProduct) => {
          return singleProduct.key === service;
        });
        const sauna = filtereServiceList.filter((singleProduct) => {
          return singleProduct.key === "sauna";
        });
        const hotTub = filtereServiceList.filter((singleProduct) => {
          return singleProduct.key === "hot_tub";
        });

        const house = filtereServiceList.filter((singleProduct) => {
          return singleProduct.key === "housing";
        });
        return (
          <FlexWrapper
            flexDirection="column"
            key={index}
            padding={isTablet ? "0 108px" : "0 24px"}
            margin="0 0 40px 0"
          >
            <FlexWrapper
              id={service}
              justifyContent="space-between"
              backgroundColor={COLORS.forestGreen}
              padding="16px 24px"
              // onClick={showHideServices}
            >
              <TitleText color={COLORS.white} mobFs="16px" fs="18px">
                {title}
              </TitleText>
              <Image
                padding="0 0 0 50px"
                id={service}
                onClick={showHideServices}
                src={
                  serviceList.includes(service)
                    ? "./images/arr-up.png"
                    : "./images/arr-down.png"
                }
                width="14px"
              />
            </FlexWrapper>
            <StyledBlock
              flexDirection="column"
              id="serviceBlock"
              closed={!activeServiceBlocks.includes(service)}
            >
              {!book_to && !book_from && (
                <BodyTitle padding="24px">
                  Pasirinkite datą, kad matytumėte galimus variantus.
                </BodyTitle>
              )}
              {book_to &&
                book_from &&
                filteredProducts.length === 0 &&
                !fetching && (
                  <BodyTitle padding="24px">
                    Atsiprašome, bet šiomis dienomis laisvų paslaugų nėra.
                  </BodyTitle>
                )}
              {book_to && book_from && fetching && (
                <BodyTitle padding="24px">
                  Tikriname datas, prašome palaukti.
                </BodyTitle>
              )}
              {filteredProducts.map(
                ({ id, name, unit_price, description }, index) => {
                  const desc = JSON.parse(description);

                  const filteredSauna = sauna.filter((singleProduct) => {
                    return singleProduct.name.includes(name);
                  });

                  const filteredHotTub = hotTub.filter((singleProduct) => {
                    return singleProduct.name.includes(name);
                  });

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
                      cancelOrder={cancelOrder}
                      service={service}
                      orderList={orderProducts}
                      cayakCount={cayaksReserved}
                      sauna={filteredSauna}
                      hotTub={filteredHotTub}
                      houses={service === "housing" && house}
                    />
                  );
                }
              )}
            </StyledBlock>
          </FlexWrapper>
        );
      })}
      {orderProducts.length > 0 && (
        <DefaultButton to="/info" onClick={clearSingle}>
          TOLIAU
        </DefaultButton>
      )}
    </PageLayout>
  );
};

const StyledBlock = styled.div`
  gap: 20px;
  overflow-x: hidden;
  max-height: ${(props) => (props.closed === true ? "0px" : "auto")};
  transition: all 0.5s ease-in-out;
`;

const StyledWrapper = styled(FlexWrapper)`
  box-sizing: border-box;

  &:hover {
    border: none;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  }

  &.active {
    border: 5px solid ${COLORS.creme};
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }
`;
