import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  margin: 10px 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${props => props.size};
`;
function Text({ text, size }) {
  return <Container size={size + "px"}>{text}</Container>;
}

export default Text;
