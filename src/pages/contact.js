import React from "react";
import { Title, Link, Meta } from "react-head";
import Layout from '../components/layout';

const Seo = () => (
  <>
    <Title>Contacts</Title>
    <Meta name="description" content="Contacts Anton Serditov architect" />
    <Link rel="canonical" content="https://serditov.com/contact" />
  </>
);

const Contact = ({location}) => {
  return (
    <Layout location={location}>
      <Seo />
      <p>Send us a message!</p>
    </Layout>
  )
}

export default Contact