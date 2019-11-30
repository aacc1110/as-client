import React, { FormEvent, useState, useRef } from 'react';
import styled from '@emotion/styled';
import palette from '../../styles/palette';
import {
  IconLogo,
  IconFacebook,
  IconGoogle,
  IconKakaotalk,
  IconNaver,
  IconTwitter
} from '../../images/svg';
import { loginAdvertise } from '../../images/img';
import useBoolean from '../../lib/hooks/useBoolean';
import { Link } from 'react-router-dom';
import useLogin from './hook/useLogin';

const LoginBlock = styled.div`
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
      .signin-break-wrapper {
        background: #fff none repeat scroll 0 0;
        color: #555;
        margin-top: 20px;
        position: relative;
        text-align: center;
      }
      .signin-break-wrapper::before {
        background-color: #cbcbcb;
        bottom: 0;
        content: '';
        height: 1px;
        left: 0;
        margin: auto;
        position: absolute;
        top: 0;
        width: 100%;
      }
      .signin-break-wrapper span {
        background: inherit;
        padding: 0 10px;
        position: relative;
      }
      .aws-signin-color-mid-gray {
        color: #999;
      }
      .social-Login {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 1rem;
        svg {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 1.25rem;
          display: flex;
          justify-content: center;
          align-items: center;
          outline: none;
          transition: 0.125s all ease-in;
          color: white;
          border: 1px solid ${palette.gray3};
          cursor: pointer;
          &:hover,
          &:focus {
            box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.35);
          }
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
  .loginInfo {
    margin-top: 3rem;
    font-size: 0.625rem;
    width: 50rem;
    a {
      color: hotpink;
      text-decoration-line: none;
      :hover {
        color: blue;
        text-decoration-line: underline;
      }
    }
    .infoTitle {
      font-weight: bold;
    }
    .infoFooter {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
`;

interface LoginProps {}

// export type LoginFormType = {
//   email?: string;
//   password?: string;
// };

function Login(props: LoginProps) {
  const { value, show } = useBoolean(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const registerRef = useRef<HTMLButtonElement>(null);
  const loginModeRef = useRef<HTMLButtonElement>(null);
  const [input, setInput] = useState({
    email: '',
    password: ''
  });
  const { login, checkUser, sendEmail } = useLogin();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onBlur = async (e: FormEvent) => {
    await checkUser({
      variables: {
        email: input.email
      }
    }).then(response => {
      const data: any = response.data;
      console.log(data);
      if (!value && !data.checkUser) {
        if (!emailRef.current) return;
        emailRef.current.value = '';
        emailRef.current.placeholder = 'Please enter a valid email.';
        emailRef.current.focus();
        return;
      }
    });
  };

  const onClick = async (e: FormEvent) => {
    await checkUser({
      variables: {
        email: input.email
      }
    }).then(response => {
      const data: any = response.data;
      console.log(data);
      if (value && data.checkUser) {
        if (!emailRef.current) return;
        emailRef.current.value = '';
        emailRef.current.placeholder = 'This email is already in use.';
        emailRef.current.focus();
        return;
      } else {
        sendEmail({
          variables: {
            email: input.email
          }
        }).then(response => {
          const data: any = response.data;
          console.log(data);
          if (data) {
            if (!emailRef.current) return;
            emailRef.current.value = '';
            emailRef.current.placeholder = '인증요청 메일이 발송되었습니다.';
            emailRef.current.disabled = true;
            if (!registerRef.current) return;
            registerRef.current.innerText = '발송완료';
            registerRef.current.disabled = true;
            if (!loginModeRef.current) return;
            loginModeRef.current.disabled = true;
          }
        });
      }
    });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // const test = {
    //   id: '7fc3e2c5-cd2b-44b2-af99-a7ca4e1b2196',
    //   email: 'tadrow@daum.net',
    //   name: '테드로',
    //   userProfile: {
    //     about: '솔로 풀스택 개발자?,
    //     id: '8d8c13ed-a9dd-45c0-9cc0-cc35e21af22d',
    //     thumbnail: 'image'
    //   }
    // };

    await login({
      variables: {
        email: input.email,
        password: input.password
      }
    })
      .then(response => {
        if (response.data) {
          const user = response.data ? response.data.login.user : null;
          // localStorage.setItem('CurrentUser', JSON.stringify(response.data.login.user));
          localStorage.setItem('CurrentUser', JSON.stringify(user));
          document.location.href = '/';
        }
      })
      .catch(e => {
        if (e) {
          if (!passwordRef.current) return;
          passwordRef.current.value = '';
          passwordRef.current.placeholder = 'Please enter a valid password';
          passwordRef.current.focus();
          return;
        }
      });
  };
  const infoText: string = `AS-SERVICE Web Services는 귀하의 AS-SERVICE.com 계정의 정보를 사용하여 귀하의 신원을
  확인하고 AS-SERVICE Web Services에 대한 액세스를 허용합니다. 이 사이트 이용 시 아래에
  링크된 당사의 이용 약관 및 개인정보보호 정책이 적용됩니다. AS-SERVICE Web Services 제품 및
  서비스 시용 시 귀하가 AS-SERVICE Web Services 또는 이러한 제품과 서비스를 판매하는 AWS
  VAR(Value Added Reseller)과 별도의 계약을 체결하지 않은 한, 아래 링크된 AS-SERVICE 고객 계약이
  적용됩니다. AS-SERVICE 고객 계약은 2017년 3월 31일에 업데이트되었습니다. 이러한 업데이트에 대한
  자세한 내용은 최근 변경 사항을 참조하십시오.`;
  return (
    <LoginBlock>
      <header>
        <Link to="/">
          <IconLogo />
        </Link>
      </header>
      <main>
        <form onSubmit={onSubmit}>
          <div className="login">
            <div className="title">{value ? `회원가입` : `로그인`}</div>
            {value ? (
              <input
                type="email"
                name="email"
                ref={emailRef}
                value={input.email}
                onChange={onChange}
                autoComplete="email"
                placeholder="E-mail Register"
                required
              />
            ) : (
              <input
                type="email"
                name="email"
                ref={emailRef}
                value={input.email}
                onChange={onChange}
                onBlur={onBlur}
                autoComplete="email"
                placeholder="E-mail Login"
                required
              />
            )}

            {value ? (
              <input
                type="password"
                name="password"
                ref={passwordRef}
                value={input.password}
                onChange={onChange}
                autoComplete="password"
                placeholder="작성하신 E-mail 로 인증번호가 발송됩니다."
                disabled
              />
            ) : (
              <input
                type="password"
                name="password"
                ref={passwordRef}
                value={input.password}
                onChange={onChange}
                autoComplete="password"
                placeholder="Password"
              />
            )}
            {value ? (
              <button type="button" onClick={onClick} ref={registerRef}>
                회원가입
              </button>
            ) : (
              <button type="submit">로그인</button>
            )}

            <div className="signin-break-wrapper">
              <div className="signin-break-wrapper::before" />
              <span className="aws-signin-color-mid-gray">
                {value ? `회원이신가요?` : `처음 방문이신가요?`}
              </span>
            </div>
            <button type="button" onClick={show} ref={loginModeRef}>
              {value ? `로그인모드` : `AS-SERVICE 계정만들기`}
            </button>
            <div className="signin-break-wrapper">
              <div className="signin-break-wrapper::before" />
              <span className="aws-signin-color-mid-gray">소셜 로그인</span>
            </div>
            <div className="social-Login">
              <Link to="">
                <IconTwitter />
              </Link>
              <IconFacebook />
              <IconGoogle />
              {/* <IconYoutube /> */}
              <IconKakaotalk />
              <IconNaver />
              {/* <IconLine /> */}
            </div>
          </div>
        </form>
        <div className="advertise">
          <img src={loginAdvertise} alt="advertise" />
        </div>
      </main>
      <div className="loginInfo">
        <div className="infoTitle">AS-SERVICE.com 로그인 정보</div>
        <div className="info">{infoText}</div>
        <div className="infoFooter">
          © 2019, AS-SERVICE Web Services, Inc.또는 자회사. All rights reserved.
          <Link to="/">이용 약관</Link> | <Link to="/">개인정보 보호정책</Link> |
          <Link to="/">AS-SERVICE 고객 계약서</Link>
        </div>
      </div>
    </LoginBlock>
  );
}

export default Login;
