import React from 'react';
import styled from 'styled-components';

import Login from '../../components/auth/Login';
import LayOut from '../../components/LayOut';

interface LoginPageProps {}

const LoginPageBlock = styled(LayOut)``;

function LoginPage(props: LoginPageProps) {
  return (
    <LoginPageBlock>
      <Login />
    </LoginPageBlock>
  );
}

export default LoginPage;
