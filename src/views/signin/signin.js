import React from 'react';
import { Link } from 'react-router-dom';
import { Center, Submit, Form } from '../../styles';

function SignIn() {
  return (
    <Center>
      <Form>
        <h2>Welcome Back!</h2>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <Submit type="submit" />
        <Link to="/">Forgot Password!</Link>
      </Form>
    </Center>
  );
}

export default SignIn;