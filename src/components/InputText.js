import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: auto;
  width: 100%;
`;

const Input = styled.input`
  background: #dee3e2;
  width: calc(100% - 40px);
  height: 20px;

  margin-left: 10px;
  padding: 10px;
  border: none;
  border-radius: 2px;
  font-size: 18px;
`;
function InputText({ value, setValue, request }) {
  const onChange = e => {
    setValue(e.target.value);
  };
  const Enter = e => {
    if (e.keyCode === 13) {
      setValue("");
      request();
    }
  };
  return (
    <Container>
      <Input
        value={value}
        onChange={onChange}
        onKeyDown={Enter}
        placeholder="조회할 동 번호를 입력하세요."
      />
    </Container>
  );
}

export default React.memo(InputText);
