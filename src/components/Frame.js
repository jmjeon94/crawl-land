import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  background: #84a9ac;
  color: white;

  display: flex;
  align-items: center;

  h1 {
    margin-left: 30px;
  }
`;
const FooterContainer = styled.div`
  width: 100%;
  height: 50px;
  background: #84a9ac;

  display: flex;
  align-items: center;

  h5 {
    margin: 0px 20px;
    color: lightgray;
  }
`;
export function Header() {
  return (
    <HeaderContainer>
      <h1>아파트 검색기 Ver 0.6</h1>
    </HeaderContainer>
  );
}

export function Footer() {
  return (
    <FooterContainer>
      <h5>
        본 프로그램은 상업 목적으로 사용될 수 없습니다. Powered by JM 2020{" "}
      </h5>
    </FooterContainer>
  );
}
