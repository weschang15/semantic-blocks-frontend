import React from "react";
import styled from "styled-components";
import { Section } from "../../elements";
import Icons from "../../elements/Icons";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.lightestGray};
  border-radius: 8px;
  padding: 3em;
`;

const Header = styled.header`
  margin: 0 auto;
  max-width: 1440px;
  text-align: center;
`;

const HeaderCopy = styled.p`
  max-width: 720px;
  margin: 0 auto;
`;

const IconGrid = styled.div`
  margin: 5em 0;
  @media only screen and (min-width: 48em) {
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 480px));
    grid-gap: 2em;
    justify-content: center;
  }
`;

const IconGridItem = styled.div`
  padding: 1em;
  text-align: center;
`;

const IconGridItemIcon = styled.div`
  margin-bottom: 1em;
`;

const IconGridItemCopy = styled.p`
  font-size: 14px;
`;

function Features() {
  return (
    <Section>
      <Container>
        <Header>
          <h2>Build rich user experiences</h2>
          <HeaderCopy>
            Semantic Blocks provide highly customizable atomic components to let
            you build your WordPress pages exactly how you want.
          </HeaderCopy>
        </Header>
        <IconGrid>
          <IconGridItem>
            <IconGridItemIcon>
              <Icons name="formatting" />
            </IconGridItemIcon>
            <h4>Better Formatting</h4>
            <IconGridItemCopy>
              Semantic Blocks introduces the missing formatting tools that every
              content writer needs, start highlighting, superscripting,
              subscripting and more, hassle-free.
            </IconGridItemCopy>
          </IconGridItem>
          <IconGridItem>
            <IconGridItemIcon>
              <Icons name="structured-data" />
            </IconGridItemIcon>
            <h4>HTML5 Native</h4>
            <IconGridItemCopy>
              Start using next generation elements baked into HTML5 without
              worrying about browser compatibility or extra code bloat.
            </IconGridItemCopy>
          </IconGridItem>
          <IconGridItem>
            <IconGridItemIcon>
              <Icons name="developer-friendly" />
            </IconGridItemIcon>
            <h4>Developer Friendly</h4>
            <IconGridItemCopy>
              A weightless front-end architecture means you won't be struggling
              to apply custom <code>CSS</code>.
            </IconGridItemCopy>
          </IconGridItem>
          <IconGridItem>
            <IconGridItemIcon>
              <Icons name="pen-tool" />
            </IconGridItemIcon>
            <h4>Advanced Customizations</h4>
            <IconGridItemCopy>
              Design dropdowns, modals, heroes, and more to your heart's
              content.
            </IconGridItemCopy>
          </IconGridItem>
        </IconGrid>
      </Container>
    </Section>
  );
}

export default Features;
