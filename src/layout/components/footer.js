import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { Wrapper, FlexBox, Icon } from '../../styles';

const Content = styled.footer`
  color: white;
  padding: 1em 0;
  background-color: #151b26;
`;

const Contact = styled.div`
  display: grid;
  grid-gap: 0 2em;
  align-items: center;
  grid-template: 2em / repeat(5, auto);
  @media (max-width: 576px){
    grid-gap: 1em;
    margin: 0 0 1em 0;
    justify-items: center;
    grid-template: repeat(2, 2em) / repeat(4, 1fr);
  }
`;

const Figure = styled(Link)`
  font-size: 2em;
  font-family: "Magneto";
  @media (max-width: 576px){
    grid-row: 1 / 2;
    grid-column: 1 / 5;
  }
`;

const Social = styled.div`
  display: grid;
  grid-gap: 0 2em;
  align-items: center;
  justify-items: center;
  grid-template: 2em / repeat(3, 1fr);
  svg {
    font-size: 1.5em;
  }
`;

function Footer() {
  return (
    <Content>
      <Wrapper>
        <FlexBox>
          <Contact>
            <Figure to="/">Cue</Figure>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Privacy</Link>
            <Link to="/">Terms</Link>
          </Contact>
          <Social>
            <Link to="/"><FiFacebook /></Link>
            <Link to="/"><FiTwitter /></Link>
            <Link to="/"><FiInstagram /></Link>
          </Social>
        </FlexBox>
      </Wrapper>
    </Content>
  );
}

export default Footer;