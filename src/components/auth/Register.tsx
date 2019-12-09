import React, { FormEvent } from 'react';
import styled from '@emotion/styled';
import palette from '../../styles/palette';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { IconLogo } from '../../images/svg';
import { loginAdvertise } from '../../images/img';

import { useMutation, useQuery } from '@apollo/react-hooks';
import { CREATE_ME, UserEmailConfirmResponse, USER_EMAIL_CONFIRM } from './hooks/useRegister';
import useInputs from '../../lib/hooks/useInputs';

const RegisterBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  header {
    height: 4rem;
    display: flex;
    justify-content: start;
    align-items: center;
    width: 50rem;
    svg {
      font-size: 1rem;
      color: ${palette.gray7};
      cursor: pointer;
      :hover {
        color: ${palette.blue5};
        opacity: 0.7;
      }
    }
  }
  main {
    display: flex;
    justify-content: center;
    padding-top: 2rem;
    .login {
      display: flex;
      flex-direction: column;
      width: 23rem;
      border-right: 2px solid ${palette.gray6};
      padding: 2rem;
      .title {
        font-size: 1.25rem;
        font-weight: bold;
        color: ${palette.gray7};
      }
      input {
        height: 1.5rem;
        border-radius: 5px;
        padding: 0.2rem;
        margin-top: 1rem;
        font-size: 0.875rem;
        border: 1px solid ${palette.gray3};
        /* border-right: none; */
        &::placeholder {
          color: ${palette.gray5};
        }
        &:disabled {
          background: ${palette.gray1};
        }
      }
      /* span {
        margin-top: 1rem;
        font-size: 0.8125rem;
      } */
      button {
        background: ${palette.blue5};
        color: white;
        font-size: 1rem;
        font-weight: bold;
        outline: none;
        border: none;
        border-radius: 5px;
        padding: 0.2rem;
        margin-top: 1rem;
        cursor: pointer;
        &:hover,
        &:focus {
          background: ${palette.blue3};
        }
        &:disabled {
          background: ${palette.gray5};
          color: ${palette.gray3};
          cursor: default;
        }
      }
    }
    .advertise {
      width: 23rem;
      padding: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 18rem;
        height: auto;
      }
    }
  }
`;

interface RegisterProps {}

function Register(props: RegisterProps) {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const code = query.get('code');

  const [form, onChange] = useInputs({
    email: '',
    password: '',
    name: '',
    about: ''
  });

  const [createMe] = useMutation(CREATE_ME);

  const { data, error } = useQuery<UserEmailConfirmResponse>(USER_EMAIL_CONFIRM, {
    variables: {
      code
    },
    fetchPolicy: 'no-cache'
  });

  if (!data || error) return <div>유효하지 않은 코드입니다.</div>;

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await createMe({
      variables: {
        user: {
          name: form.name,
          email: data.userEmailConfirm.email || form.email,
          password: form.password
        },
        userprofile: {
          about: form.about
        }
      }
    }).catch(e => {
      console.log(e);
      return;
    });
    history.push('login');
  };
  return (
    <RegisterBlock>
      <header>
        <Link to="/">
          <IconLogo />
        </Link>
      </header>
      <main>
        <form onSubmit={onSubmit}>
          <div className="login">
            <div className="title">회원가입</div>
            <input
              type="email"
              name="email"
              value={data.userEmailConfirm.email || form.email}
              disabled
            />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={onChange}
              autoComplete="password"
              placeholder="Password"
            />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="username"
            />
            <input
              type="text"
              name="about"
              value={form.about}
              onChange={onChange}
              placeholder="Introduce one line."
            />
            <button type="submit">회원가입</button>
          </div>
        </form>
        <div className="advertise">
          <img src={loginAdvertise} alt="advertise" />
        </div>
      </main>
    </RegisterBlock>
  );
}

export default Register;
