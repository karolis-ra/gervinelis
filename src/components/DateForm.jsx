import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "./Wrappers/FlexWrapper";
import { COLORS } from "../styles/colors";
import { TitleText } from "./TitleText";

export const DateForm = () => {
  const handleDateSubmit = (e) => {
    e.preventDefault();
    const arrival_date = e.target.elements.arrival.value;
    const departure_date = e.target.elements.departure.value;
  };

  return (
    <form onSubmit={handleDateSubmit}>
      <FlexWrapper flexDirection="column">
        <TitleText>Nurodykite viešnagės laiką</TitleText>
        <FlexWrapper>
          <StyledInput id="arrival" type="date" required></StyledInput>
          <StyledInput id="departure" type="date" required></StyledInput>
        </FlexWrapper>
        <SubmitBtn type="submit">IEŠKOTI</SubmitBtn>
      </FlexWrapper>
    </form>
  );
};

const StyledInput = styled.input`
  border: 2px solid ${COLORS.gray};
`;

const SubmitBtn = styled.button`
  background-color: ${COLORS.forestGreen};
  padding: 8px;
`;
