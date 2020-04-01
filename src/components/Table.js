import React, { useState } from "react";
import styled from "styled-components";
import { sort } from "../utils/sorting";

const Container = styled.div`
  width: 100%;
  height: 100%;
  height: 24px;
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

const Thead = styled.thead``;

const Tr = styled.tr``;

const Th = styled.th`
  width: ${props => props.width};
  border-color: lightgray;
  background: lightgray;
  cursor: pointer;

  /* fixed headerr */
  position: sticky;
  top: 0;
`;

function Tables({ data, titles }) {
  const [upSorted, setUpSorted] = useState(false);
  const Sort = type => {
    if (upSorted) {
      sort(data, type, upSorted);
    } else {
      sort(data, type, upSorted);
    }
    setUpSorted(!upSorted);
  };
  return (
    <Container>
      <Table>
        {/* header(columns) */}
        <Thead>
          <Tr>
            {titles.map((title, t_index) =>
              title["isShow"] ? (
                <Th
                  key={t_index}
                  width={title["width"]}
                  onClick={() => Sort(title["type"])}
                >
                  {title["type"]}
                </Th>
              ) : (
                <></>
              )
            )}
          </Tr>
        </Thead>
        {/* tables(contents) */}
        <tbody>
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
        </tbody>
      </Table>
    </Container>
  );
}

export default React.memo(Tables);
