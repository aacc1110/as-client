import React from 'react';
import styled from '@emotion/styled';
import useForm from 'react-hook-form';

const LoginBlock = styled.div``;

interface LoginProps {}

function Login(props: LoginProps) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <LoginBlock>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="email" ref={register({ required: true })} />
        <input type="password" name="password" />
        <button type="submit">로그인</button>
      </form>
    </LoginBlock>
  );
}

export default Login;
