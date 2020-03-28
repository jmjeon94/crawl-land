import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  margin: 20px 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
`;
function Text({ text }) {
  return <Container>{text}</Container>;
}

export default Text;
