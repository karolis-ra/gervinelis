import React, { useState } from "react";
import { useQuery } from "../styles/breakpoints";
import { FlexWrapper } from "./Wrappers/FlexWrapper";
import { BodyTitle } from "./BodyTitle";
import { TitleText } from "./TitleText";
import { COLORS } from "../styles/colors";
import { DefaultButton } from "./DefaultButton";
import styled from "styled-components";
import { Image } from "./Image";

export const ItemOrderBlock = ({ price, handleOrder, id, orderList, service, cancelOrder, handleCayakOrder, cayakCount}) => {
    const { isTablet} = useQuery();
    const [countCayak, setCountCayak] = useState(0);

    const addCayak = () => {
      countCayak < 8 - cayakCount && setCountCayak(countCayak + 1);
    };
  
    const removeCayak = () => {
      countCayak > 0 && setCountCayak(countCayak - 1);
    };
    return (

        <FlexWrapper
          flexDirection="row"
          flex="1"
          alignItems={isTablet ? "center" : "flex-start"}
          justifyContent={isTablet ? "center" : "space-between"}
          gap="12px"
          padding="0 24px 0 0 "
        >
            <FlexWrapper flexDirection={isTablet ? "column" : "row"} width={isTablet ? "auto" : "100%"} justifyContent={isTablet ? "": "space-between"}>
            <FlexWrapper flexDirection="column">
            <BodyTitle alignSelf="flex-start" color={COLORS.gray}>
              Kaina
            </BodyTitle>
            <TitleText align="left" color={COLORS.gray}>
              {price} €
            </TitleText>
          </FlexWrapper>

          {service !== "cayak" ? (
            !orderList.some((item) => item.id === id) ? (
              <DefaultButton id={id} onClick={handleOrder} alignself="flex-end">
                PRIDETI
              </DefaultButton>
            ) : (
              <StyledButton id={id} onClick={cancelOrder} alignself="flex-end">
                ATŠAUKTI
              </StyledButton>
            )
          ) : (
            <StyledForm onSubmit={handleCayakOrder} id={id}>
              <Image
                src="/images/minus.png"
                width="20px"
                onClick={removeCayak}
              />
              <StyledInput type="number" id="qty" value={countCayak} />
              <Image src="/images/plus.png" width="20px" onClick={addCayak} />
            </StyledForm>
          )}
            </FlexWrapper>

        </FlexWrapper>
    )
}

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const StyledInput = styled.input`
  border: 1px solid black;
  background-color: ${COLORS.white};
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 20px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const StyledButton = styled.button`
  color: ${COLORS.white};
  background-color: ${COLORS.gray};
  padding: 12px 18px;
  border-radius: 8px;
  align-self: flex-end;
  border: none;
  font-weight: 700;
  font-size: 15px;
`;