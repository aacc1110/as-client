import React from 'react';
import styled from '@emotion/styled';

const PopupBlock = styled.div`
  .label_content {
    position: absolute;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
  }
  .label_content input {
    display: none;
  }
  .label_content input + label {
  }
  .label_content input + label + div {
    display: none;
    width: 1000px;
    height: 300px;
    background: #f5f5f5;
    border: 1px solid #eee;
    position: absolute;
    top: 30px;
    left: 0;
    /* transform: translate(-50%, -50%); */
  }
  .label_content input:checked + label + div {
    display: block;
  }
  .label_content input + label + div label {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    background: #333;
    color: #f5f5f5;
    padding: 20px;
  }
`;

interface PopupProps {}

function Popup(props: PopupProps) {
  return (
    <PopupBlock>
      <div className="label_content">
        <input type="checkbox" name="" id="info" />
        <label htmlFor="info">Open</label>
        <div className="content">
          <label htmlFor="info">Close</label>
        </div>
      </div>
    </PopupBlock>
  );
}

export default Popup;
