import React from "react";
import { Title, Link, Meta } from "react-head";
import Layout from '../components/layout'

const Seo = () => (
  <>
    <Title>Serditov architect Portfolio</Title>
    <Meta name="description" content="Anton Serditov architect Portfolio" />
    <Link rel="canonical" content="https://serditov.com/" />
  </>
);

 const Portfolio = ({location}) => {
  
  return (
    <Layout location={location}> 
      <Seo />
    </Layout>
  );
}

export default Portfolio