import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Image } from "../../../components/Image";
import { Text } from "../../../components/Text";
import { FlexWrapper } from "../../../components/Wrappers/FlexWrapper";
import { COLORS } from "../../../styles/colors";
import { reviews } from "../../../assets/reviews";
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <Image
      width="14px"
      height="28px"
      src="./images/slider-arr-right.png"
      className={className}
      onClick={onClick}
      alt="react-next"
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <Image
      width="14px"
      height="28px"
      src="./images/slider-arr-left.png"
      className={className}
      onClick={onClick}
      alt="react-prev"
    />
  );
}
export const SimpleSlider = () => {
  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <SliderWrapper>
      <StyledSlider {...settings}>
        {reviews.map(({ name, review }, index) => {
          return (
            <FlexWrapper
              key={index}
              border={`1px solid ${COLORS.creme}`}
              padding="16px 0"
            >
              <Text fw="600" color={COLORS.forestGreen} align="center">
                {name}
              </Text>
              <Text
                align="center"
                margin="16px 0"
                padding=" 0 24px"
                height="250px"
                color={COLORS.gray}
              >
                {review}
              </Text>
              <Image
                src="./images/5stars.png"
                width="132px"
                margin="0 auto"
                padding="8px 0 16px 0"
              />
            </FlexWrapper>
          );
        })}
      </StyledSlider>
    </SliderWrapper>
  );
};

const SliderWrapper = styled.div`
  width: 80%;
  padding: 16px;
  margin: 0 auto;
`;

const StyledSlider = styled(Slider)`
  div.slick-slide > div {
    margin: 0 auto;
    max-width: 280px;
  }

  div.slick-list {
    margin: 0 -20px;
  }

  div.card {
    width: 100px;
  }
`;

export default SimpleSlider;
