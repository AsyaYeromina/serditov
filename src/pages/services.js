import React from "react";
import { Title, Link, Meta } from "react-head";
import Layout from '../components/layout'

const Seo = () => (
  <>
    <Title>Serditov architect Services</Title>
    <Meta name="description" content="Anton Serditov architect Services" />
    <Link rel="canonical" content="https://serditov.com/" />
  </>
);

 const Services = ({location}) => {
  
  return (
    <Layout location={location}> 
      <Seo />
    </Layout>
  );
}

export default Services