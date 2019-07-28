import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/Hero/Hero";
import Features from "./Home/Features";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Features />
  </Layout>
);

export default IndexPage;
