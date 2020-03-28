import React from "react";
import styled from "styled-components";

const Container = styled.textarea`
  background: #dee3e2;

  height: 100px;
  width: calc(100% - 20px);
  margin: 10px;
  box-sizing: border-box;

  border-radius: 2px;
  border: none;

  font-size: 16px;
  resize: none;
`;
function InputText() {
  return <Container></Container>;
}

export default InputText;
