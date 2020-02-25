import React from 'react';
import styled from '@emotion/styled';
import { bottom } from '../images/img';

const AccordionBlock = styled.div`
  input[id*='answer'] {
    display: none;
  }
  input[id*='answer'] + label {
    display: block;
    padding: 20px;
    border: 1px solid #232188;
    color: #fff;
    font-weight: 900;
    background: #3634a5;
    cursor: pointer;
    position: relative;
  }
  input[id*='answer'] + label em {
    position: absolute;
    top: 50%;
    right: 10px;
    width: 30px;
    height: 30px;
    margin-top: -15px;
    display: inline-block;
    background: url(${bottom}) 0 0 no-repeat;
  }
  input[id*='answer'] + label + div {
    max-height: 0;
    transition: all 0.35s;
    overflow: hidden;
    font-size: 11px;
  }
  input[id*='answer'] + label + div p {
    display: inline-block;
    padding: 20px;
  }
  input[id*='answer']:checked + label + div {
    max-height: 100px;
  }
  input[id*='answer']:checked + label em {
    background-position: 0 -30px;
  }
`;

interface AccordionProps {}

function Accordion(props: AccordionProps) {
  return (
    <AccordionBlock>
      <div className="accordion">
        <input type="checkbox" name="" id="answer01" />
        <label htmlFor="answer01">
          컨텐츠 제목
          <em></em>
        </label>
        <div>
          <p>
            여기에 추가되는 부분이 자주묻는 질문의 답변내용이 이 영역에
            들어갑니다. 이곳에서 자연스럽게 나오는 효과를 볼 수 있습니다. 이
            기능으로 자주묻는 질문컨텐츠를 만들 수 있습니다.
          </p>
        </div>
        <input type="checkbox" name="" id="answer02" />
        <label htmlFor="answer02">
          컨텐츠 제목
          <em></em>
        </label>
        <div>
          <p>
            여기에 추가되는 부분이 자주묻는 질문의 답변내용이 이 영역에
            들어갑니다. 이곳에서 자연스럽게 나오는 효과를 볼 수 있습니다. 이
            기능으로 자주묻는 질문컨텐츠를 만들 수 있습니다.
          </p>
        </div>
        <input type="checkbox" name="" id="answer03" />
        <label htmlFor="answer03">
          컨텐츠 제목
          <em></em>
        </label>
        <div>
          <p>
            여기에 추가되는 부분이 자주묻는 질문의 답변내용이 이 영역에
            들어갑니다. 이곳에서 자연스럽게 나오는 효과를 볼 수 있습니다. 이
            기능으로 자주묻는 질문컨텐츠를 만들 수 있습니다.
          </p>
        </div>
        <input type="checkbox" name="" id="answer04" />
        <label htmlFor="answer04">
          컨텐츠 제목
          <em></em>
        </label>
        <div>
          <p>
            여기에 추가되는 부분이 자주묻는 질문의 답변내용이 이 영역에
            들어갑니다. 이곳에서 자연스럽게 나오는 효과를 볼 수 있습니다. 이
            기능으로 자주묻는 질문컨텐츠를 만들 수 있습니다.
          </p>
        </div>
      </div>
    </AccordionBlock>
  );
}

export default Accordion;
