import React, { useEffect } from "react";
import styled from "styled-components";
import { PageLayout } from "../../components/Layouts/PageLayout";
import { FlexWrapper } from "../../components/Wrappers/FlexWrapper";
import { useDispatch, useSelector } from "react-redux";
import { reservationSelector } from "../../state/reservation/selector";
import { BodyTitle } from "../../components/BodyTitle";
import { BodyText } from "../../components/BodyText";
import { useQuery } from "../../styles/breakpoints";
import { COLORS } from "../../styles/colors";
import { orderData, getProduct } from "../../state/reservation/reducer";

export const Info = () => {
  const dispatch = useDispatch();
  const { orderProducts, book_from, book_to, singleProducts } =
    useSelector(reservationSelector);
  const { isTablet } = useQuery();

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
  };

  useEffect(() => {
    const fetchOrderedProducts = () => {
      orderProducts.forEach((element) => {
        dispatch(getProduct(element.id));
      });
    };
    if (singleProducts.length === 0) {
      fetchOrderedProducts();
    }
  }, [orderProducts, dispatch]);

  return (
    <PageLayout>
      <FlexWrapper
        flexDirection={isTablet ? "row-reverse" : "column"}
        padding={isTablet ? "0 100px" : " 0 24px"}
        gap="24px"
      >
        <FlexWrapper flexDirection="column" flex={1}>
          {singleProducts?.map((item) => {
            let finalPrice = 0;
            orderProducts.map((order) => {
              if (order.id === item.id) {
                finalPrice = order.qty * item.unit_price;
                return finalPrice;
              }
            });
            return (
              <FlexWrapper>
                <BodyTitle>{item.name}</BodyTitle>
                <BodyText>{finalPrice}</BodyText>
              </FlexWrapper>
            );
          })}
        </FlexWrapper>
        <PersonalInfo onSubmit={handleFormSubmit}>
          <FlexWrapper flexDirection="column" gap="10px">
            <StyledInput id="name" placeholder="Vardas" />
            <StyledInput id="lastname" placeholder="Pavarde" />
            <StyledInput id="phone" placeholder="Telefono numeris" />
            <StyledInput id="email" placeholder="El. paštas" />
            <StyledInput id="payment" placeholder="Mokejimo budas" />
            <StyledTextarea id="comment" placeholder="papildomas komentaras" />
            <ReserveBtn type="submit">Rezervuoti</ReserveBtn>
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
color: ${COLORS.creme};
font-weight: 700;
background-color: ${COLORS.forestGreen};
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

const StyledTextarea = styled.textarea`
  border: 1px solid ${COLORS.creme};
  background-color: ${COLORS.white};
  padding: 16px 24px;
  border-radius: 8px;
  min-height: 100px;
`;
