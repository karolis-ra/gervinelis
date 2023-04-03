import React from "react";
import styled from "styled-components";
import { PageLayout } from "../../components/Layouts/PageLayout";
import { FlexWrapper } from "../../components/Wrappers/FlexWrapper";
import { useDispatch } from "react-redux";
import { addPersonalData, orderData } from "../../state/reservation/reducer";
import { useSelector } from "react-redux";
import { reservationSelector } from "../../state/reservation/selector";

export const Info = () => {
  const dispatch = useDispatch();
  const { order } = useSelector(reservationSelector);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const personalInfo = {};

    personalInfo.first_name = e.target.name.value;
    personalInfo.last_name = e.target.lastname.value;
    personalInfo.phone = e.target.phone.value;
    personalInfo.email = e.target.email.value;
    personalInfo.payment_method = e.target.payment.value;
    personalInfo.customer_note = e.target.comment.value;

    dispatch(addPersonalData(personalInfo));

    console.log("this is order sending", JSON.stringify(order));
    dispatch(orderData(order));
    // await fetch("http://127.0.0.1:8000/api/order/create", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(order),
    // })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <PageLayout>
      <FlexWrapper>
        <PersonalInfo onSubmit={handleFormSubmit}>
          <input id="name" placeholder="Vardas" />
          <input id="lastname" placeholder="Pavarde" />
          <input id="phone" placeholder="Telefono numeris" />
          <input id="email" placeholder="El. paštas" />
          <input id="payment" placeholder="Mokejimo budas" />
          <input id="comment" placeholder="papildomas komentaras" />
          <ReserveBtn type="submit">Rezervuoti</ReserveBtn>
        </PersonalInfo>
      </FlexWrapper>
    </PageLayout>
  );
};

const PersonalInfo = styled.form`
  border: 1px solid red;
`;

const ReserveBtn = styled.button`
  background-color: green;
`;
