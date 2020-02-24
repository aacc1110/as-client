import React from 'react';
import styled from '@emotion/styled';

const Popup2Block = styled.div`
  .seriesPost {
    input[id*='info'] {
      display: none;
    }
    input[id*='info'] + label {
      cursor: pointer;
      :hover {
        color: red;
      }
    }
    input[id*='info'] + label + div {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: white;
      opacity: 0.5;
      z-index: 100;
    }
    input[id*='info'] + label + div > div {
      position: absolute;
      top: 60px;
      right: 0;
      /* transform: translate(-50%, -50%); */
      width: 500px;
      height: 500px;
      background: coral;
      z-index: 99;
    }
    input[id*='info'] + label + div > label {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      z-index: 98;
    }
    input[id*='info'] + label + div > div > label {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(-40%, -40%);
      padding: 20px;
      background: black;
      border-radius: 100%;
      z-index: 99;
    }

    input[id*='info'] + label + div {
      display: none;
    }
    input[id*='info']:checked + label + div {
      display: block;
    }
  }
`;

interface Popup2Props {}

function Popup2(props: Popup2Props) {
  return (
    <Popup2Block>
      <div className="seriesPost">
        <input type="checkbox" id="info" />
        <label htmlFor="info">
          sksksks
          <br />
        </label>
        <div>
          <div>
            <label htmlFor="info"></label>
          </div>
          <label htmlFor="info"></label>
        </div>
      </div>
    </Popup2Block>
  );
}

export default Popup2;
