import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "./Wrappers/FlexWrapper";
import { COLORS } from "../styles/colors";
import { TitleText } from "./TitleText";
import { useDispatch } from "react-redux";
import { addDate } from "../state/reservation/reducer";
import { useQuery } from "../styles/breakpoints";

export const DateForm = () => {
  const dispatch = useDispatch();
  const { isTablet } = useQuery();
  const handleDateSubmit = (e) => {
    e.preventDefault();
    const dates = [];
    dates.push(e.target.elements.arrival.value);
    dates.push(e.target.elements.departure.value);
    dispatch(addDate(dates));
  };

  return (
    <form onSubmit={handleDateSubmit}>
      <FlexWrapper
        flexDirection="column"
        alignItems="center"
        gap="32px"
        padding="50px 0"
      >
        <TitleText color={COLORS.gray} mobFs="16px" fs="18px">
          TIKRINKITE UŽIMTUMĄ
        </TitleText>
        <FlexWrapper gap="32px" flexDirection={isTablet ? "row" : "column"}>
          <FlexWrapper flexDirection="column" alignItems="center" gap="8px">
            <StyledLabel>Atvykimo data</StyledLabel>
            <StyledInput id="arrival" type="date" required />
          </FlexWrapper>
          <FlexWrapper flexDirection="column" alignItems="center" gap="8px">
            <StyledLabel>Išvykimo data</StyledLabel>
            <StyledInput id="departure" type="date" required />
          </FlexWrapper>
          <SubmitBtn type="submit" maxHeight="32px">
            IEŠKOTI
          </SubmitBtn>
        </FlexWrapper>
      </FlexWrapper>
    </form>
  );
};

const StyledInput = styled.input`
  border: 2px solid ${COLORS.forestGreen};
  padding: 14px 50px;
  border-radius: 8px;
  font-size: 18px;
  background-color: ${COLORS.white};
`;

const SubmitBtn = styled.button`
  align-self: flex-end;
  background-color: ${COLORS.forestGreen};
  color: ${COLORS.creme};
  padding: 18px 100px;
  font-size: 16px;
  border-radius: 8px;
  font-weight: 700;
  font-size: ${(props) => props.fs};
  transition: 0.3s; ease-out;
  border: none; 
  &:hover {
    background-color: ${COLORS.darkForest};
    color: ${COLORS.darkCreme};
  }
`;

const StyledLabel = styled.label`
  font-size: 16px;
  color: ${COLORS.gray};
  font-weight: 600;
`;
