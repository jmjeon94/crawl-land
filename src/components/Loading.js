import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    color: white;
    font-size: 16px;
  }
`;

const LoadingAnimationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Loading() {
  return (
    <Container>
      <h1>아파트 정보를 가져오는 중입니다...</h1>
      <LoadingAnimationContainer>
        <div id="loading"></div>
      </LoadingAnimationContainer>
    </Container>
  );
}

export default React.memo(Loading);
