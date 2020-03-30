import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px 10px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px;
`;
const CheckBtn = styled.button`
  background: ${props => (props.isShow ? "#3b6978" : "darkgray")};
  margin: 3px;
  border: none;
  border-radius: 2px;

  color: white;
  font-size: 12px;
  cursor: pointer;
`;

function CheckShowTitle({ titles, setTitles }) {
  const onClick = type => {
    setTitles(
      titles.map(title =>
        title["type"] === type ? { ...title, isShow: !title.isShow } : title
      )
    );
  };
  return (
    <Container>
      {/* id 버튼은 보여주지않음 */}
      {titles.slice(1, 19).map((title, t_index) => (
        <CheckBtn
          key={t_index}
          isShow={title.isShow}
          onClick={() => onClick(title.type)}
        >
          {title.type}
        </CheckBtn>
      ))}
    </Container>
  );
}

export default CheckShowTitle;
