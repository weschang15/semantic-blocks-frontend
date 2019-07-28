import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../utils/theme";

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.lightestGray};
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 14px;
  padding: 2.25em 1em;
  text-align: center;
`;

function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <StyledFooter>
        Developed by {` `}
        <a href="https://wesleychang.me">Wesley Chang</a> &copy;{" "}
        {new Date().getFullYear()}
      </StyledFooter>
    </ThemeProvider>
  );
}

export default Footer;
