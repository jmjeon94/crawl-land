import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  width: 100%;

  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
  box-sizing: border-box;
`;

const ListContainer = styled.div`
  width: 100%;
  height: calc(100vh - 480px);

  overflow: scroll;

  display: flex;
  flex-wrap: wrap;
  align-content: baseline;
`;

const StartButton = styled.div`
  cursor: pointer;
  color: white;
  background: green;
  width: 100%;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  margin-bottom: 10px;

  transition: 0.5s;
  &:hover {
    background: darkgreen;
  }
`;
const Button = styled.div`
  background: gray;
  height: 20px;
  width: 80px;
  font-size: 12px;

  margin: 5px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  transition: 0.5s;
  &:hover {
    background: lightgray;
  }
`;

function SelectCity({ setData, setIsLoading }) {
  const [reqParams, setReqParams] = useState({
    stage: 0,
    addr: "동 선택",
  });
  const [cityList, setCityList] = useState([]);

  const getIdAddr = (selectedAddr) => {
    if (selectedAddr === "init") {
      reqParams.stage = 0;
    }

    switch (reqParams.stage) {
      // 시리스트 가져오기
      case 0:
        axios
          .get("http://110.9.16.75:5001/getIdCities", {
            params: { stage: 0, addr: "" },
          })
          .then((resp) => {
            setCityList(resp.data);
            setReqParams({
              addr: "전국",
              stage: (reqParams.stage += 1),
            });
          })
          .catch((err) => alert("Error:", err));
        break;
      // 구리스트 가져오기
      case 1:
        axios
          .get("http://110.9.16.75:5001/getIdAddr", {
            params: {
              addr: selectedAddr,
              stage: reqParams.stage,
            },
          })
          .then((resp) => {
            setCityList(resp.data);
            setReqParams({
              addr: selectedAddr,
              stage: reqParams.stage + 1,
            });
          });
        break;
      case 2:
        axios
          .get("http://110.9.16.75:5001/getIdAddr", {
            params: {
              addr: reqParams.addr + "-" + selectedAddr,
              stage: reqParams.stage,
            },
          })
          .then((resp) => {
            setCityList(resp.data);
            setReqParams({
              addr: reqParams.addr + "-" + selectedAddr,
              stage: reqParams.stage + 1,
            });
          });
        break;
      case 3:
        setIsLoading(true);
        axios
          .get("http://110.9.16.75:5001/getIdAddr", {
            params: {
              addr: reqParams.addr + "-" + selectedAddr,
              stage: reqParams.stage,
            },
          })
          .then((resp) => {
            if (typeof resp["data"] === "object") {
              setData(resp["data"]);
              // 아파트 외의 정보가 return되는 경우
            } else {
              alert(resp["data"]);
            }
            setIsLoading(false);
            setCityList([]);
            setReqParams({
              addr: "도시선택",
              stage: 0,
            });
          })
          .catch((err) => {
            setIsLoading(false);
            alert(err);
          });
        break;
      default:
        console.log("Error in SelecCity!");
        break;
    }
  };

  return (
    <Container>
      <StartButton onClick={() => getIdAddr("init")}>
        {reqParams.addr}
      </StartButton>
      <ListContainer>
        {cityList.map((city, c_index) => (
          <Button key={c_index} onClick={() => getIdAddr(city)}>
            {city}
          </Button>
        ))}
      </ListContainer>
    </Container>
  );
}

export default SelectCity;
