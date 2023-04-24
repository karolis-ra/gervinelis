import React, { useState } from "react";
import { BodyText } from "./BodyText";
import { BodyTitle } from "./BodyTitle";
import { FlexWrapper } from "./Wrappers/FlexWrapper";
import { COLORS } from "../styles/colors";
import { useQuery } from "../styles/breakpoints";
import { TitleText } from "./TitleText";
import SmallSlider from "../pages/houses/sections/SmallSlider";
import { Image } from "./Image";
import { DefaultButton } from "./DefaultButton";
import styled from "styled-components";

export const ReservationItem = ({
  title,
  description,
  price,
  perks,
  images,
  handleOrder,
  cancelOrder,
  handleCayakOrder,
  id,
  service,
  orderList,
  cayakCount,
}) => {
  const { isTablet, isXlgTablet } = useQuery();
  const [countCayak, setCountCayak] = useState(0);

  const addCayak = () => {
    countCayak < 8 - cayakCount && setCountCayak(countCayak + 1);
  };

  const removeCayak = () => {
    countCayak > 0 && setCountCayak(countCayak - 1);
  };

  return (
    <FlexWrapper
      flexDirection={isXlgTablet ? "row" : "column"}
      flex="1 0 25%"
      gap="24px"
      margin={isTablet ? "50px 0 0 0 " : "24px 0 0 0"}
    >
      <SmallSlider images={images} />
      <FlexWrapper
        gap={isTablet && "80px"}
        flexDirection={isTablet ? "row" : "column"}
      >
        <FlexWrapper
          flexDirection="column"
          flex="2"
          justifyContent="center"
          gap="24px"
        >
          <BodyTitle
            mobFs={isTablet ? "24px" : "18px"}
            align="left"
            color={COLORS.forestGreen}
          >
            {title}
          </BodyTitle>
          <BodyText align="left" color={COLORS.gray}>
            {description}
          </BodyText>
          <FlexWrapper flexWrap="wrap" gap="10px">
            {perks.map((singlePerk, index) => {
              return (
                <BodyTitle
                  color={COLORS.forestGreen}
                  key={`perk-${index}`}
                  align="left"
                >
                  {singlePerk}
                </BodyTitle>
              );
            })}
          </FlexWrapper>
        </FlexWrapper>

        <FlexWrapper
          flexDirection={isTablet ? "column" : "row-reverse"}
          flex="1"
          alignItems={isTablet ? "flex-end" : "flex-start"}
          justifyContent={isTablet ? "space-around" : "space-between"}
          gap="24px"
          padding="0 24px 0 0 "
        >
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
    </FlexWrapper>
  );
};

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
