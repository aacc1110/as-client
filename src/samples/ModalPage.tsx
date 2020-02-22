import React from 'react';
import styled from '@emotion/styled';

interface ModalPageProps {
  series: string;
}

const ModalPageBlock = styled.div`
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
    input[id='series1']:checked ~ .con1 {
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

function ModalPage({ series }: ModalPageProps) {
  return (
    <ModalPageBlock>
      <div className="tabContent">
        <input type="radio" name="series" id="series1" />
        <label htmlFor="series1">{series}</label>
        <input type="radio" name="series" id="series2" />
        <label htmlFor="series2">{series}</label>
        <input type="radio" name="series" id="series3" />
        <label htmlFor="series3">{series}</label>
        <div className="conbox con1">시리즈목록보기1</div>
        <div className="conbox con2">시리즈목록보기2</div>
        <div className="conbox con3">시리즈목록보기3</div>
      </div>
    </ModalPageBlock>
  );
}

export default ModalPage;
