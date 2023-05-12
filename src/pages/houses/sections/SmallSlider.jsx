import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Image } from "../../../components/Image";
import { xlgTabletMF } from "../../../styles/breakpoints";
import { COLORS } from "../../../styles/colors";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <StyledNextImage
      width="14px"
      height="28px"
      src="./images/arrow-right-creme.png"
      className={className}
      onClick={onClick}
      alt="react-next"
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <StyledPrevImage
      width="14px"
      height="28px"
      src="./images/arrow-left-creme.png"
      className={className}
      onClick={onClick}
      alt="react-prev"
    />
  );
}
export const SmallSlider = ({ images }) => {
  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <SliderWrapper>
      <StyledSlider {...settings} flex="1">
        {images.map((image, index) => {
          return <Image key={`image-${index}`} src={image} flex="1" />;
        })}
      </StyledSlider>
    </SliderWrapper>
  );
};

const SliderWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  flex: 1;
  align-items: center;
  @media ${xlgTabletMF} {
    min-width: 450px;
  }
`;

const StyledSlider = styled(Slider)`
  .slick-dots {
    top: 84%;
    left: 25%;
    width: 50%;
  }

  .slick-dots li button:before {
    color: ${COLORS.creme};
    font-size: 10px;
  }
`;

const StyledNextImage = styled(Image)`
  position: absolute;
  top: 90%;
  right: 15%;
`;

const StyledPrevImage = styled(Image)`
  position: absolute;
  top: 90%;
  left: 15%;
  z-index: 1;
`;

export default SmallSlider;
