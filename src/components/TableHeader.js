import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* background: white; */
  width: 100%;
  height: 50px;

  display: flex;
  border-bottom: 1px solid rgb(0, 0, 0, 0.1);
`;

const HeaderTitleContainer = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  padding-left: 10px;

  border-right: 1px solid rgb(0, 0, 0, 0.1);
  background: #cae8d5;
`;

function TableHeader() {
  const headerContent = [
    "동",
    "단지명",
    "No",
    "입주연도",
    "총세대수",
    "공급면적",
    "공급",
    "전용면적",
    "전용",
    "세대",
    "매매최저가"
  ];
  return (
    <Container>
      {headerContent.map(title => (
        <HeaderTitleContainer>{title}</HeaderTitleContainer>
      ))}
    </Container>
  );
}

export default TableHeader;
