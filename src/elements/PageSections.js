import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#fff"};
  padding: 1.5em 1.5em 0;
`;
