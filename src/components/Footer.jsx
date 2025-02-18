import React from "react";

import { FlexWrapper } from "./Wrappers/FlexWrapper";
import { Image } from "./Image";
import { Text } from "./Text";
import { COLORS } from "../styles/colors";
import { Link } from "react-router-dom";
import { useQuery } from "../styles/breakpoints";
import { navOptions } from "../assets/navOptions";
export const Footer = () => {
  const { isTablet } = useQuery();
  return (
    <FlexWrapper
      backgroundColor={COLORS.forestGreen}
      flexDirection="column"
      alignItems="center"
      padding="50px 0"
      gap="25px"
      margin="50px 0 0 0"
    >
      <FlexWrapper justifyContent="center" gap="15px">
        <Link to="https://www.facebook.com/" target="new">
          <Image
            width="25px"
            height="25px"
            src="./images/assets/facebook.png"
          />
        </Link>

        <Link>
          <Image
            width="25px"
            height="25px"
            src="./images/assets/instagram.png"
          />
        </Link>

        <Link>
          <Image width="25px" height="25px" src="./images/assets/tiktok.png" />
        </Link>
      </FlexWrapper>
      <FlexWrapper
        flexDirection={isTablet ? "row" : "column"}
        justifyContent="center"
        gap={isTablet ? "36px" : "8px"}
      >
        {navOptions.map((singleOption, index) => {
          return (
            <Link key={`footerOption-${index}`} to={singleOption.link}>
              <Text align="center" textDecor="underline">
                {singleOption.title}
              </Text>
            </Link>
          );
        })}
      </FlexWrapper>
      <Image src="./images/gervinelis_logo.png" width="100px" margin="0 auto" />
      {/* <Text>© Copyrights gknkodas.lt</Text> */}
    </FlexWrapper>
  );
};
