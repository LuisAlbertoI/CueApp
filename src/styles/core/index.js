import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 1em;
  max-width: 1376px;
  box-sizing: border-box;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 576px){
    flex-direction: column;
    justify-content: initial;
  }
`;