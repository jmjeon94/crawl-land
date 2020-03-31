import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Button from "./components/Button";
import Text from "./components/Text";
import InputText from "./components/InputText";
import Tables from "./components/Table";
import { Footer, Header } from "./components/Frame";
import CheckShowTitle from "./components/CheckShowTitle";
import Loading from "./components/Loading";
import axios from "axios";

const Root = styled.div`
  height: 100%;
  width: 100%;
`;

const MainContainer = styled.div`
  height: calc(100% - 140px);
  width: 100%;
  display: flex;
`;

const MenuBar = styled.div`
  background: #84a9ac;
  width: 250px;
`;

const ContentsContainer = styled.div`
  background: ${props => (props.isLoading ? "#4A554E" : "#cae8d5")};
  overflow: scroll;
  flex: 1;
  transition: 0.5s;

  /* 로딩 div poisition:absolute를 위함 */
  position: relative;
`;

function App() {
  const initialData = [];

  const [data, setData] = useState(initialData);
  const [titles, setTitles] = useState(initialTitles);
  const [isLoading, setIsLoading] = useState(false);
  const [idDong, setIdDong] = useState("");

  const onClickGetAptList = () => {
    setIsLoading(true);
    axios
      .get("http://210.97.164.72:5000/getAptList", {
        params: {
          NumDong: idDong
        }
      })
      .then(resp => {
        console.log(resp["data"]);
        // 정상적으로 resp시
        if (typeof resp["data"] === "object") {
          setData(resp["data"]);
          // 아파트 외의 정보가 return되는 경우
        } else {
          alert(resp["data"]);
        }
        setIsLoading(false);
      })
      .catch(err => {
        alert(err);
        setIsLoading(false);
      });
  };

  return (
    <Root>
      <Header />
      <MainContainer>
        <MenuBar>
          <Text text="동 단위 아파트 리스트" size="22" />
          <Button
            url="https://m.land.naver.com/map/37.482968:127.0634:14:1168010300/APT:JGC/A1:B1:B2"
            name="네이버 부동산 바로가기"
          />
          <Button name="아파트 번호로 변환" />
          {/* <Text text="동 번호를 입력하세요." size="22" /> */}
          <InputText value={idDong} setValue={setIdDong} />
          <Button name="동단위 아파트 조회" request={onClickGetAptList} />

          <Text text="확인 할 항목" size="22"></Text>
          <CheckShowTitle titles={titles} setTitles={setTitles} />
        </MenuBar>
        <ContentsContainer isLoading={isLoading}>
          <Tables data={data} titles={titles} />
          {isLoading ? <Loading /> : <></>}
        </ContentsContainer>
      </MainContainer>
      <Footer />
    </Root>
  );
}

// 총 22개
const initialTitles = [
  {
    type: "동",
    width: 50,
    isShow: true
  },
  {
    type: "단지명",
    width: 120,
    isShow: true
  },
  {
    type: "No",
    width: 50,
    isShow: false
  },
  {
    type: "입주년도",
    width: 70,
    isShow: true
  },
  {
    type: "총 세대수",
    width: 70,
    isShow: true
  },
  {
    type: "세대수",
    width: 50,
    isShow: false
  },
  {
    type: "공급면적",
    width: 70,
    isShow: false
  },
  {
    type: "공급",
    width: 70,
    isShow: true
  },
  {
    type: "전용면적",
    width: 70,
    isShow: false
  },
  {
    type: "전용",
    width: 70,
    isShow: true
  },
  {
    type: "매매가",
    width: 120,
    isShow: true
  },
  {
    type: "전세가",
    width: 120,
    isShow: true
  },
  {
    type: "전세가율",
    width: 70,
    isShow: true
  },
  {
    type: "갭",
    width: 100,
    isShow: true
  },
  {
    type: "평당가",
    width: 70,
    isShow: true
  },
  {
    type: "방 수",
    width: 50,
    isShow: false
  },
  {
    type: "화장실 수",
    width: 70,
    isShow: false
  },
  {
    type: "현관구조",
    width: 70,
    isShow: true
  },
  {
    type: "매매",
    width: 50,
    isShow: true
  },
  {
    type: "전세",
    width: 50,
    isShow: true
  },
  {
    type: "월세",
    width: 50,
    isShow: false
  },
  {
    type: "id",
    width: 50,
    isShow: false
  }
];

export default App;
