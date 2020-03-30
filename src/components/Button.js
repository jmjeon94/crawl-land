import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  margin: 20px 10px;
  background: #3b6978;

  display: flex;
  align-items: center;
  justify-content: center;

  color: whitesmoke;
  border-radius: 5px;

  cursor: pointer;
  &:hover {
    background: #204051;
  }
  transition: 0.3s;
`;
function Button({ url, name, request }) {
  let onClicked = "";
  if (url) {
    onClicked = () => {
      window.location = url;
    };
  } else if (request) {
    onClicked = request;
  } else {
    onClicked = () => {};
  }
  return <Container onClick={onClicked}>{name}</Container>;
}

export default Button;
