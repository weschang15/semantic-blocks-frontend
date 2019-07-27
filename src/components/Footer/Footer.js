import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.lightestGray};
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 14px;
  padding: 2.25em 1em;
  text-align: center;
`;

function Footer() {
  return (
    <StyledFooter>
      Developed by {` `}
      <a href="https://wesleychang.me">Wesley Chang</a> &copy;{" "}
      {new Date().getFullYear()}
    </StyledFooter>
  );
}

export default Footer;
