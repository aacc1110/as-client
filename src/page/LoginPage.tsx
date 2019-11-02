import React from 'react';
import styled from 'styled-components';

import Login from '../components/auth/Login';

interface LoginPageProps {}

const LoginPageBlock = styled.div``;

function LoginPage(props: LoginPageProps) {
  return (
    <LoginPageBlock>
      <Login />
    </LoginPageBlock>
  );
}

export default LoginPage;
