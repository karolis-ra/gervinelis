import React from "react";
import { BodyTitle } from "../../components/BodyTitle";
import { PageLayout } from "../../components/Layouts/PageLayout";
import { Link } from "react-router-dom";
import { TitleText } from "../../components/TitleText";
import { FlexWrapper } from "../../components/Wrappers/FlexWrapper";
import { useQuery } from "../../styles/breakpoints";
import { COLORS } from "../../styles/colors";
import { Image } from "../../components/Image";

export const Contacts = () => {
  const { isTablet } = useQuery();

  return (
    <PageLayout>
      <FlexWrapper flexDirection="column" gap="46px" padding="80px 0 160px 0">
        <TitleText color={COLORS.gray} align="center">
          TURITE KLAUSIMŲ? SUSISIEKIME!{" "}
        </TitleText>
        <FlexWrapper flexDirection="column" padding="24px">
          <BodyTitle>Paskambinkite </BodyTitle>
          <Link>
            <BodyTitle>+37061621663</BodyTitle>
          </Link>
        </FlexWrapper>
        <FlexWrapper flexDirection="column" padding="24px">
          <BodyTitle>Parašykite </BodyTitle>
          <Link>
            <BodyTitle>info@gervinelis.lt</BodyTitle>
          </Link>
        </FlexWrapper>
        <FlexWrapper flexDirection="column" padding="24px" gap="20px">
          <BodyTitle>Bendraukime: </BodyTitle>
          <FlexWrapper
            justifyContent="center"
            flexDirection={isTablet ? "row" : "column"}
          >
            <Link>
              <FlexWrapper>
                <Image src="./images/react-logo.png" width="55px" />
                <BodyTitle>gervinelis</BodyTitle>
              </FlexWrapper>
            </Link>
            <Link>
              <FlexWrapper>
                <Image src="./images/react-logo.png" width="55px" />
                <BodyTitle>gervinelis</BodyTitle>
              </FlexWrapper>
            </Link>
            <Link>
              <FlexWrapper>
                <Image src="./images/react-logo.png" width="55px" />
                <BodyTitle>gervinelis</BodyTitle>
              </FlexWrapper>
            </Link>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </PageLayout>
  );
};
