import React from "react";
import Layout from "../components/layout";
import { Title, Link, Meta } from "react-head";
import 'pure-react-carousel/dist/react-carousel.es.css';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, Dot } from 'pure-react-carousel';


const Seo = () => (
  <>
    <Title>Serditov Showcase</Title>
    <Meta name="description" content="Anton Serditov showcase" />
    <Link rel="canonical" content="https://serditov.com/showcase" />
  </>
);

class CarouselSlider extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={5}
        visibleSlides={3}
        step={1}
      >
        <div className="dots">
          <Dot disabled={false} children={<Image src="http://www.honky.co.uk/site/wp-content/uploads/2015/04/the_residence.jpg" />} slide={0} />
          <Dot disabled={false} children={<Image src="http://www.honky.co.uk/site/wp-content/uploads/2015/04/ab_frognal_way_20.jpg" />} slide={1} />
          <Dot disabled={false} children={<Image src="http://www.honky.co.uk/site/wp-content/uploads/2015/04/ab_frognal_way_01-375x250.jpg" />} slide={2} />
          <Dot disabled={false} children={<Image src="http://www.honky.co.uk/site/wp-content/uploads/2015/04/ab_frognal_way_12.jpg" />} slide={3} />
          <Dot disabled={false} children={<Image src="http://www.honky.co.uk/site/wp-content/uploads/2015/04/ab_knights_wood_10-RT-375x250.jpg" />} slide={4} />
        </div>
        <Slider>
          <Slide index={0}><Image src="http://www.honky.co.uk/site/wp-content/uploads/2015/04/the_residence.jpg" /></Slide>
          <Slide index={1}><Image src="http://www.honky.co.uk/site/wp-content/uploads/2015/04/ab_frognal_way_20.jpg" /></Slide>
          <Slide index={2}><Image src="http://www.honky.co.uk/site/wp-content/uploads/2015/04/ab_frognal_way_01-375x250.jpg" /></Slide>
          <Slide index={3}><Image src="http://www.honky.co.uk/site/wp-content/uploads/2015/04/ab_frognal_way_12.jpg" /></Slide>
          <Slide index={4}><Image src="http://www.honky.co.uk/site/wp-content/uploads/2015/04/ab_knights_wood_10-RT-375x250.jpg" /></Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}

const Showcase = ({location}) => {

  return (
    <Layout location={location}>
      <Seo />
      <CarouselSlider />
      <p>Such wow. Very React.</p>
      </Layout>
  )
}

export default Showcase