import React from "react";
import { BodyTitle } from "../../components/BodyTitle";
import { PageLayout } from "../../components/Layouts/PageLayout";
import { Link } from "react-router-dom";
import { TitleText } from "../../components/TitleText";
import { FlexWrapper } from "../../components/Wrappers/FlexWrapper";
import { useQuery } from "../../styles/breakpoints";
import { COLORS } from "../../styles/colors";
import { Image } from "../../components/Image";
import styled from "styled-components";
import { tabletMF } from "../../styles/breakpoints";

export const Contacts = () => {
  const { isTablet } = useQuery();

  return (
    <PageLayout>
      <FlexWrapper
        flexDirection="column"
        gap="46px"
        alignItems="center"
        margin="50px 0 -50px 0"
      >
        <TitleText
          color={COLORS.gray}
          align="center"
          fs="40px"
          mobFs="24px"
          width="80%"
        >
          TURITE KLAUSIMŲ? SUSISIEKIME!{" "}
        </TitleText>
        <FlexWrapper
          flexDirection="column"
          padding="24px"
          borderBottom={`2px solid ${COLORS.creme}`}
          maxWidth="220px"
        >
          <StyledTitle>Paskambinkite </StyledTitle>
          <Link>
            <StyledContact>+37061621663</StyledContact>
          </Link>
        </FlexWrapper>
        <FlexWrapper
          flexDirection="column"
          padding="24px"
          borderBottom={`2px solid ${COLORS.creme}`}
          maxWidth="220px"
        >
          <StyledTitle>Parašykite </StyledTitle>
          <Link>
            <StyledContact>info@gervinelis.lt</StyledContact>
          </Link>
        </FlexWrapper>
        <FlexWrapper flexDirection="column" padding="24px" gap="20px">
          <StyledTitle>Bendraukime: </StyledTitle>
          <FlexWrapper
            justifyContent="center"
            flexDirection={isTablet ? "row" : "column"}
            gap={isTablet ? "50px" : "8px"}
            alignItems="center"
          >
            <Link>
              <FlexWrapper
                width="120px"
                gap="10px"
                alignItems="center"
                justifyContent="space-between"
              >
                <Image src="./images/tiktok.png" width="25px" />
                <StyledContact>gervinelis</StyledContact>
              </FlexWrapper>
            </Link>
            <Link>
              <FlexWrapper
                width="120px"
                gap="10px"
                alignItems="center"
                justifyContent="space-between"
              >
                <Image src="./images/facebook.png" width="16px" />
                <StyledContact>gervinelis</StyledContact>
              </FlexWrapper>
            </Link>
            <Link>
              <FlexWrapper
                width="120px"
                gap="10px"
                alignItems="center"
                justifyContent="space-between"
              >
                <Image src="./images/instagram.png" width="25px" />
                <StyledContact>gervinelis</StyledContact>
              </FlexWrapper>
            </Link>
          </FlexWrapper>
        </FlexWrapper>
        {isTablet && (
          <FlexWrapper justifyContent="space-between" width="95%">
            <FlexWrapper alignItems="flex-end">
              <Image src="/images/leaf-left-big.svg" width="120px" />
              <Image src="/images/leaf-left-big.svg" width="80px" />
            </FlexWrapper>
            <FlexWrapper alignItems="flex-end" gap="20px">
              <Image src="/images/leaf-right-big.svg" width="60px" />
              <Image src="/images/leaf-left-big.svg" width="60px" />
            </FlexWrapper>
            <FlexWrapper alignItems="flex-end">
              <Image src="/images/leaf-right-small.svg" width="80px" />
              <Image src="/images/leaf-right-big.svg" width="120px" />
            </FlexWrapper>
          </FlexWrapper>
        )}
      </FlexWrapper>
    </PageLayout>
  );
};

const StyledTitle = styled(BodyTitle)`
  font-size: 18px;
  color: ${COLORS.gray};
  @media ${tabletMF} {
    font-size: 24px;
  }
`;

const StyledContact = styled(BodyTitle)`
  font-size: 18px;
  color: ${COLORS.forestGreen};
  @media ${tabletMF} {
    font-size: 24px;
  }
`;
