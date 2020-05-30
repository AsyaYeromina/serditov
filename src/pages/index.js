import React from "react"
import "normalize.css"
// import { Link as LinkGatsby } from "gatsby"
// import TitleHeader from "../components/header"
import MainLogo from "../components/logo"
import headerStyles from "../components/header.module.css"
import MainNavigation from "../components/main-nav"
import { Title, Link, Meta } from "react-head"



const Seo = () => (
  <>
    <Title>Serditov architect</Title>
    <Meta name="description" content="Anton Serditov architect" />
    <Link rel="canonical" content="https://serditov.com/" />
  </>
);

export default function Home() {
  return (
    <header className={headerStyles.mainHeader}>
      <Seo />
      <MainLogo />
      <MainNavigation />

      {/* <TitleHeader headerText="Serditov"/> */}
    </header>
  );
}