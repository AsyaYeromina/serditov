import React from "react"
import { Title, Link, Meta } from "react-head"

// CSS
import "normalize.css"

// Components
import Header from "../components/header"

const Seo = () => (
  <>
    <Title>Serditov architect</Title>
    <Meta name="description" content="Anton Serditov architect" />
    <Link rel="canonical" content="https://serditov.com/" />
  </>
);

export default function Home() {
  return (
    <div> 
      <Seo />
      <Header />
    </div>
  );
}