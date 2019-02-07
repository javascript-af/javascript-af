import React from 'react';
import styled, {
  ThemeProvider,
  createGlobalStyle,
} from '../../lib/styled-components';
import theme from '../shared/theme';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Meta } from '../Meta';
import { normalize } from 'polished';

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Inner = styled.div`
  @media all and (min-width: 1920px) {
    margin: 0 auto;
    max-width: ${props => props.theme.maxWidth};
  }
  flex-grow: 1;
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
`;

const Page: React.FC = props => (
  <ThemeProvider theme={theme}>
    <StyledPage {...props}>
      <GlobalStyle />
      <Meta />
      <Header />
      <Inner>{props.children}</Inner>
      <Footer />
    </StyledPage>
  </ThemeProvider>
);

export { Page };