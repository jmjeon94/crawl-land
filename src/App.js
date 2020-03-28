import React from "react";
import styled from "styled-components";
import "./App.css";
import Button from "./components/Button";
import Text from "./components/Text";
import InputText from "./components/InputText";

const MainContainer = styled.div`
  background: #cae8d5;
  height: 100%;
  width: 100%;
  display: flex;
`;

const MenuBar = styled.div`
  background: #84a9ac;
  width: 250px;
`;

const ContentsContainer = styled.div`
  /* background: blue; */
  flex: 1;
`;

function App() {
  return (
    <MainContainer>
      <MenuBar>
        <Button url="http://land.naver.com" name="네이버 부동산 바로가기" />
        <Button name="아파트 번호로 변환" />
        <Text text="URL을 입력하세요" />
        <InputText></InputText>
        <Button name="동단위 조회" />
        <Text text="아파트 리스트" />
      </MenuBar>
      <ContentsContainer></ContentsContainer>
    </MainContainer>
  );
}

export default App;
