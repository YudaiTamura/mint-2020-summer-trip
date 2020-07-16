import React from "react";
import Slider from "react-slick";
import LazyLoad from "react-lazyload";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import himejijoImg from "../../images/himejijo.jpg";
import arimaImg from "../../images/arima.jpg";
import merikenparkImg from "../../images/merikenpark.jpg";

import { KeyVisualContainer, KeyVisual, Links, StyledLink } from "./style";

const TopPage = () => {
  const slickSetting = {
    fade: true,
    arrows: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const keyVisualImgs = [himejijoImg, arimaImg, merikenparkImg];

  return (
    <section className="top-page">
      <KeyVisualContainer>
        <Slider {...slickSetting}>
          {keyVisualImgs.map((img, index) => (
            <LazyLoad height={200} key={index}>
              <KeyVisual src={img} />
            </LazyLoad>
          ))}
        </Slider>
      </KeyVisualContainer>
      <Links>
        <StyledLink to={"/himejijo"}>姫路城</StyledLink>
      </Links>
    </section>
  );
};

export default TopPage;
