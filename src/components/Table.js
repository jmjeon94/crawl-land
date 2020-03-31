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
  cursor: pointer;
`;

function Tables({ data, titles }) {
  return (
    <Container>
      <Table>
        {/* header(columns) */}
        {titles.map((title, t_index) =>
          title["isShow"] ? (
            <Th
              key={t_index}
              width={title["width"]}
              onClick={() => console.log("Refactoring here in 'Table.js'")}
            >
              {title["type"]}
            </Th>
          ) : (
            <></>
          )
        )}
        {/* tables(contents) */}
        {data.map((row, r_index) => (
          <Tr key={r_index}>
            {titles.map((title, t_index) =>
              title["isShow"] ? (
                <Td key={t_index} width={title["width"]}>
                  {title.type === "단지명" ? (
                    <a
                      target="_blank"
                      href={"https://new.land.naver.com/complexes/" + row.id}
                    >
                      {row[title.type]}
                    </a>
                  ) : (
                    row[title.type]
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

export default React.memo(Tables);
