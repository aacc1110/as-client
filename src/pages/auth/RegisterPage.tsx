import React from 'react';
import styled from '@emotion/styled';
import Register from '../../components/auth/Register';

const RegisterPageBlock = styled.div``;

interface RegisterPageProps {}

function RegisterPage(props: RegisterPageProps) {
  return (
    <RegisterPageBlock>
      <Register />
    </RegisterPageBlock>
  );
}

export default RegisterPage;
