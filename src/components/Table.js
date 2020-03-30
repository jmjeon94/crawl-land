import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 24px;
  border: 1px solid lightgray;
`;

const Table = styled.table`
  height: 100%;
  width: 100%;
  border-color: lightgray;
  border-collapse: collapse;

  /* fixed, auto */
  table-layout: fixed;
  text-align: center;
`;

const Td = styled.td`
  border-bottom: 1px solid darkgray;
  width: ${props => props.width};
  padding: 5px;

  a {
    color: green;
    text-decoration: none;
  }
  a:visited {
    color: green;
  }
`;

const Tr = styled.tr``;

const Th = styled.th`
  width: ${props => props.width};
  border-color: lightgray;
  background: lightgray;
`;

function Tables({ data, titles }) {
  return (
    <Container>
      <Table>
        {titles.map((title, t_index) =>
          title["isShow"] ? (
            <Th key={t_index} width={title["width"]}>
              {title["type"]}
            </Th>
          ) : (
            <></>
          )
        )}
        {data.map((row, r_index) => (
          <Tr key={r_index}>
            {row.map((item, i_index) =>
              titles[i_index]["isShow"] ? (
                <Td key={i_index} width={titles[i_index]["width"]}>
                  {/* 단지명에 네이버 부동산 링크 */}
                  {i_index === 1 ? (
                    <a
                      href={"https://new.land.naver.com/complexes/" + row[19]}
                      target="_blank"
                    >
                      {item}
                    </a>
                  ) : (
                    item
                  )}
                </Td>
              ) : (
                <></>
              )
            )}
          </Tr>
        ))}
      </Table>
    </Container>
  );
}

export default Tables;
