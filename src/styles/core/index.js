import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 1em;
  max-width: 1376px;
  box-sizing: border-box;
  position: relative;
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

export const Center = styled.div`
  display: grid;
  padding: 0 ${props => props.paddign ? "0" : "1em"};
  align-content: center;
  justify-content: center;
  grid-template: auto / auto;
`;

export const Form = styled.form`
  padding: 1em;
  display: grid;
  grid-gap: 1em 0;
  align-items: center;
  grid-template: auto / minmax(auto, 376px);
  background-color: teal;
  border-radius: 0.5em;
  input {
    width: 100%;
    height: 2.5em;
    padding: 0 1em;
    box-sizing: border-box;
    text-transform: uppercase;
    border-radius: 0.2em;
    border: none;
  }
  h2 {
    margin: 0.5em 0;
    text-align: center;
  }
  a {
    color: peru;
    text-align: center;
  }
`;

export const Submit = styled.input`

`;