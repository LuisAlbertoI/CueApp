import React from 'react';
import styled from 'styled-components';
import { Header, Footer } from './components';

const Content = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template: auto minmax(calc(100vh - 7em), auto) auto / 1fr;
  @media (max-width: 576px){
    grid-template: auto minmax(calc(100vh - 13em), auto) auto / 1fr;
  }
`;

function Layout({ children }) {
  return (
    <Content>
      <Header />
      {children}
      <Footer />
    </Content>
  );
}

export default Layout;