import React from 'react';
import styled from 'styled-components';
import { Wrapper, FlexBox } from '../../styles';
import cover from '../../assets/images/cover.jpg';
import pattern from '../../assets/images/pattern.png';

const Content = styled.main`
  
`;

const Primary = styled.section`
  width: 100%;
  color: white;
  margin: 0 0 2em 0;
  padding: 5em 0 1em 0;
  position: relative;
  box-sizing: border-box;
  background-image: url(${cover});
  background-position: top right;
  background-repeat: no-repeat;
  background-size: cover;
  &:before {
    content: '';
    background-image: url(${pattern}), linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(71,71,71,0.5) 100%);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const Fat = styled.div`

`;

function Intro() {
  return (
    <Content>
      <Primary>
        <Wrapper>
          <FlexBox>
          
          </FlexBox>
        </Wrapper>
      </Primary>
    </Content>
  );
}

export default Intro;