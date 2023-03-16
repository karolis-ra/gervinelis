import React from "react";
import { FlexWrapper } from "../Wrappers/FlexWrapper";
import { Hero } from "../Hero";
import { Footer } from "../Footer";

export const PageLayout = ({ children, heroText, heroBtnText, heroImg }) => {
  return (
    <FlexWrapper flexDirection="column" margin="0 auto">
      <Hero bgImage={heroImg} text={heroText} btnText={heroBtnText} />
      {children}
      <Footer />
    </FlexWrapper>
  );
};
