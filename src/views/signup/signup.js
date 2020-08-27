import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Center, Submit, Form } from '../../styles';

const Row = styled.div`
  display: grid;
  grid-gap: 0 1em;
  grid-template: 1fr / repeat(2, 1fr);
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  input {
    zoom: 1.8;
    width: initial;
    height: initial;
    margin: 0 0.2em 0 0;
  }
`;

function SignUp() {
  return (
    <Center>
      <Form>
        <h2>Create Your Account</h2>
        <Row>
          <input type="text" placeholder="Frist name" />
          <input type="text" placeholder="Last name" />
        </Row>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Confirm password" />
        <Label>
          <input type="checkbox" />
          <span>I have accepted the <Link to="/">terms and conditions</Link></span>
        </Label>
        <Submit type="submit" />
        <Link to="/">Already have an account?</Link>
      </Form>
    </Center>
  );
}

export default SignUp;