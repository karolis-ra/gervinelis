import React from "react";
import { FlexWrapper } from "../Wrappers/FlexWrapper";
import { Hero } from "../Hero";
import { Footer } from "../Footer";

export const PageLayout = ({
  children,
  heroText,
  heroBtnText,
  heroImg,
  heroHeight,
  contPadding,
  reservation,
}) => {
  return (
    <FlexWrapper flexDirection="column" margin="0 auto">
      <Hero
        bgImage={heroImg}
        text={heroText}
        btnText={heroBtnText}
        heroHeight={heroHeight}
        contPadding={contPadding}
        reservation={reservation}
      />
      {children}
      <Footer />
    </FlexWrapper>
  );
};
