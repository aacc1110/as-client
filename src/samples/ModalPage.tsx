import React from 'react';
import styled from '@emotion/styled';

interface ModalPageProps {
  series: string;
  useremail: string;
}

const ModalPageBlock = styled.div<{ useremail: string }>`
  .tabContent {
    /* input[type='radio'] {
          display: none;
        } */
    input[type='radio'] + label {
      cursor: pointer;
      :hover {
        color: red;
      }
    }
    input[type='radio']:checked + label {
      font-size: 2rem;
      font-weight: 600;
      color: red;
    }
    .conbox {
      display: none;
      width: 500px;
      height: 300px;
      background-color: coral;
      margin: 0;
    }
    input[id='${props => props.useremail}']:checked ~ .${props =>
  props.useremail} {
      display: block;
    }
    input[id='series2']:checked ~ .con2 {
      display: block;
    }
    input[id='series3']:checked ~ .con3 {
      display: block;
    }
  }
`;

function ModalPage({ series, useremail }: ModalPageProps) {
  return (
    <ModalPageBlock useremail={useremail}>
      <div className="tabContent">
        <input type="radio" name="series" id={useremail} />
        <label htmlFor={useremail}>{series}</label>
        <input type="radio" name="series" id="series2" />
        <label htmlFor="series2">{series}</label>
        <input type="radio" name="series" id="series3" />
        <label htmlFor="series3">{series}</label>
        <div className={`conbox ${useremail}`}>시리즈목록보기1</div>
        <div className="conbox con2">시리즈목록보기2</div>
        <div className="conbox con3">시리즈목록보기3</div>
      </div>
    </ModalPageBlock>
  );
}

export default ModalPage;
