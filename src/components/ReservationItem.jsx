import React from "react";
import { BodyText } from "./BodyText";
import { BodyTitle } from "./BodyTitle";
import { FlexWrapper } from "./Wrappers/FlexWrapper";
import { COLORS } from "../styles/colors";
import { useQuery } from "../styles/breakpoints";
import SmallSlider from "../pages/houses/sections/SmallSlider";

import { ItemOrderBlock } from "./ItemOrderBlock";
export const ReservationItem = ({
  title,
  description,
  perks,
  images,
  handleOrder,
  cancelOrder,
  handleCayakOrder,
  id,
  service,
  orderList,
  cayakCount,
  sauna,
  price,
  hotTub,
}) => {
  const { isTablet, isXlgTablet } = useQuery();
  console.log(hotTub)

  return (
    <FlexWrapper
      flexDirection={isXlgTablet ? "row" : "column"}
      flex="1 0 25%"
      gap="24px"
      margin={isTablet ? "50px 0 0 0 " : "24px 0 0 0"}
    >
      <SmallSlider images={images} />
      <FlexWrapper

        flexDirection= "column"
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
        <FlexWrapper flexDirection={isTablet ? "row" : "column"} gap={isTablet ? "" : "24px"}>
        <ItemOrderBlock   handleOrder={handleOrder}
          cancelOrder={cancelOrder}
          handleCayakOrder={handleCayakOrder}
          id={id}
          service={service}
          orderList={orderList}
          cayakCount={cayakCount}
          price={price}
        />
          {service !== "cayak" && (
          <ItemOrderBlock handleOrder={handleOrder}
          cancelOrder={cancelOrder}
          id={hotTub[0].id} 
          service={hotTub[0].key}
          price={hotTub[0].unit_price}
          orderList={orderList}
          />
        )}
        {service !== "cayak" && (
          <ItemOrderBlock handleOrder={handleOrder}
          cancelOrder={cancelOrder}
          id={sauna[0].id} 
          service={sauna[0].key}
          price={sauna[0].unit_price}
          orderList={orderList}
          />
        )}
        </FlexWrapper>

      </FlexWrapper>
    </FlexWrapper>
  );
};


