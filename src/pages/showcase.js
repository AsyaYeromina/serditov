import React from "react";
import Layout from "../components/layout";
import { Title, Link, Meta } from "react-head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Images from '../../src/imageSorce';


const Seo = () => (
  <>
    <Title>Serditov Showcase</Title>
    <Meta name="description" content="Anton Serditov showcase" />
    <Link rel="canonical" content="https://serditov.com/showcase" />
  </>
);

let sliderImages = Images.map((imageURL, i) => {
  return (
    <div key={i}>
      <img src={imageURL} alt={''}/>
    </div>
  )
})

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      customPaging: function (i) {
        return (
          <a>
            <img src={Images[i]} />
          </a>
        );
      }
    }
    return (
      <Slider {...settings}>
        {sliderImages}
      </Slider>
    );
  }
}

const Showcase = ({ location }) => {

  return (
    <Layout location={location}>
      <Seo />
      <SimpleSlider />
    </Layout>
  )
}

export default Showcase