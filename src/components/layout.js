/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";
import "normalize.css";
import "./layout.css";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <main>{children}</main>
        <Footer />
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
