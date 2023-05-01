import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PageLayout } from "../../components/Layouts/PageLayout";
import { FlexWrapper } from "../../components/Wrappers/FlexWrapper";
import { useDispatch, useSelector } from "react-redux";
import { reservationSelector } from "../../state/reservation/selector";
import { BodyTitle } from "../../components/BodyTitle";
import { BodyText } from "../../components/BodyText";
import { useQuery } from "../../styles/breakpoints";
import { COLORS } from "../../styles/colors";
import {
  orderData,
  getProduct,
  clearSingleProducts,
} from "../../state/reservation/reducer";
import { TitleText } from "../../components/TitleText";
import { useNavigate } from "react-router-dom";

export const Info = () => {
  const dispatch = useDispatch();
  const { orderProducts, book_from, book_to, singleProducts } =
    useSelector(reservationSelector);
  const { isTablet } = useQuery();
  const [finalProdPrice, setFinalProdPrice] = useState(0);
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const finalOrder = {};
    finalOrder.first_name = e.target.name.value;
    finalOrder.last_name = e.target.lastname.value;
    finalOrder.phone = e.target.phone.value;
    finalOrder.email = e.target.email.value;
    finalOrder.payment_method = e.target.payment.value;
    finalOrder.products = orderProducts;
    finalOrder.book_from = book_from;
    finalOrder.book_to = book_to;
    finalOrder.customer_note = e.target.comment.value;

    dispatch(orderData(finalOrder));
    navigate("/thankyou");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchOrderedProducts = () => {
      orderProducts.forEach((element) => {
        dispatch(getProduct(element.id));
      });
    };

    if (singleProducts.length === 0) {
      fetchOrderedProducts();
    }

    if (orderProducts.length > 0 && singleProducts.length > 0) {
      let finalPrice = 0;
      singleProducts?.map((item) => {
        orderProducts.map((order) => {
          if (order.id === item.id) {
            const productPrice = order.qty * item.unit_price;
            finalPrice += productPrice;
            setFinalProdPrice(finalPrice);
          }
        });
      });
    }
  }, [orderProducts, singleProducts, finalProdPrice, dispatch]);

  const goBack = () => {
    dispatch(clearSingleProducts());
    navigate("/rezervacija");
  };

  console.log(orderProducts);
  console.log(singleProducts);
  return (
    <PageLayout>
      <FlexWrapper
        flexDirection={isTablet ? "row-reverse" : "column"}
        padding={isTablet ? "0 100px" : " 0 24px"}
        gap="24px"
      >
        <FlexWrapper
          flexDirection="column"
          flex={1}
          bgColor={COLORS.darkCreme}
          padding="24px"
          borderRadius="8px"
        >
          <TitleText color={COLORS.gray} align="left">
            Jūsų užsakymas
          </TitleText>
          <FlexWrapper flexDirection="column">
            {singleProducts?.map((item, index) => {
              let finalPrice = 0;
              orderProducts.map((order) => {
                console.log(order.id, item.id);
                if (order.id === item.id) {
                  finalPrice = order.qty * item.unit_price;
                  return finalPrice;
                }
              });
              return (
                <FlexWrapper
                  key={index}
                  justifyContent="space-between"
                  bgColor={COLORS.darkCreme}
                  alignSelf="flex-start"
                  width="100%"
                >
                  <BodyTitle color={COLORS.gray}>{item.name}</BodyTitle>
                  <BodyText color={COLORS.gray}>{finalPrice} €</BodyText>
                </FlexWrapper>
              );
            })}
          </FlexWrapper>
          <FlexWrapper
            justifyContent="space-between"
            borderTop="1px solid gray"
            margin="24px 0 0 0"
          >
            <BodyTitle color={COLORS.gray}>Viso:</BodyTitle>
            <BodyText color={COLORS.gray}>{finalProdPrice} €</BodyText>
          </FlexWrapper>
        </FlexWrapper>
        <PersonalInfo onSubmit={handleFormSubmit}>
          <FlexWrapper flexDirection="column" gap="10px">
            <StyledInput id="name" placeholder="Vardas" required />
            <StyledInput id="lastname" placeholder="Pavarde" required />
            <StyledInput id="phone" placeholder="Telefono numeris" required />
            <StyledInput id="email" placeholder="El. paštas" required />
            <StyledSelect id="payment" placeholder="Mokejimo budas" required>
              <option value="cash">Grynais</option>
              <option value="banktransfer">Kortele</option>
            </StyledSelect>
            <StyledTextarea id="comment" placeholder="papildomas komentaras" />
            <FlexWrapper justifyContent="space-between">
              <ReserveBtn type="submit">REZERVUOTI</ReserveBtn>
              <ReserveBtn type="button" onClick={goBack} red={true}>
                GRĮŽTI
              </ReserveBtn>
            </FlexWrapper>
          </FlexWrapper>
        </PersonalInfo>
      </FlexWrapper>
    </PageLayout>
  );
};

const PersonalInfo = styled.form`
  flex: 1;
`;

const ReserveBtn = styled.button`
align-self: flex-start;
margin-top: 14px;
padding: 10px 24px;
border: none;
border-radius: 8px;
text-decoration: none;
color: ${(props) => (props.red === true ? "white" : COLORS.creme)};
background-color: ${(props) =>
  props.red === true ? "#E50914" : COLORS.forestGreen};
font-weight: 700;
font-size: 16px;
transition: 0.3s; ease-out;
&:hover {
  background-color: ${COLORS.darkForest};
    color: ${COLORS.darkCreme};
}
`;

const StyledInput = styled.input`
  border: 1px solid ${COLORS.creme};
  background-color: ${COLORS.white};
  padding: 16px 24px;
  border-radius: 8px;
`;

const StyledSelect = styled.select`
  border: 1px solid ${COLORS.creme};
  background-color: ${COLORS.white};
  padding: 16px 20px;
  border-radius: 8px;
  font-size: 14px;
  appearance: none;
`;

const StyledTextarea = styled.textarea`
  border: 1px solid ${COLORS.creme};
  background-color: ${COLORS.white};
  padding: 16px 24px;
  border-radius: 8px;
  min-height: 100px;
`;
