import React from "react";
import styled from "styled-components";

const Container = styled.input`
  background: #dee3e2;

  height: 40px;
  width: calc(100% - 20px);
  margin-left: 10px;
  box-sizing: border-box;

  border-radius: 2px;
  border: none;

  font-size: 20px;
  padding: 10px;
`;
function InputText() {
  return <Container></Container>;
}

export default InputText;
