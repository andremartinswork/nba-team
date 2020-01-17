import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

import { SERVER } from '../../../../config';

import {
  Block,
  Rows,
  Pagination,
} from './styles';

import {
  ItemTeam,
  ItemPlayer,
  ItemGame,
} from '../../molecules';

function List(props) {
  const {
    url,
    initialData,
    initialMeta,
    error
  } = props;

  if (error) {
    return (
      <div>Erro</div>
    )
  }
  else {
    // 1 === loading || 2 === Tudo okay || 3 === Error
    const [statusData, setStatusData] = useState(0);
    const [data, setData] = useState(initialData);
    const [meta, setMeta] = useState(initialMeta);

    // GET MORE DATA
    function GetData(selected) {
      setStatusData(1);

      axios.post(`${SERVER}/getList`, { data: {
        url: url,
        page: selected,
      }})
      .then(response => {
        const { data } = response;
        if (!data.error) {
          setStatusData(2);
          setData([...data.data])
          setMeta([...data.meta])
        }
        else {
          setStatusData(3);
        }
      })
      .catch(() => {
        setStatusData(3);
      })
    }

    // ON CHANGE PAGINATION NUMBER
    function OnChangePagination(_val) {
      GetData(_val.selected + 1)
    }

    // RENDER LIST
    function RenderRows() {
      if (data.length > 0) {
        return (
          <Rows>
            {
              data.map((item, index) => {
                if (url === "teams") {
                  return (
                    <ItemTeam
                      key={String(index)}
                      {...item}
                    />
                  )
                } 
                else if (url === "players") {
                  return (
                    <ItemPlayer
                      key={String(index)}
                      {...item}
                    />
                  )
                }
                else if (url === "games") {
                  return (
                    <ItemGame
                      key={String(index)}
                      {...item}
                    />
                  )
                }
                else {
                  return null
                }
              })
            }
          </Rows>
        )
      }
      else {
        return (
          <div>No result</div>
        )
      }
    }

    // RENDER PAGINATION
    function RenderPagination() {
      if (meta.total_count !== meta.per_page) {
        return (
          <Pagination>
            <ReactPaginate
              pageCount={meta.total_count}
              pageRangeDisplayed={2}
              marginPagesDisplayed={2}
              onPageChange={OnChangePagination}
            />
          </Pagination>
        )
      }
      return null
    }

    return (
      <Block>
        {/* {RenderHeaderColumns()} */}
        {RenderRows()}
        {RenderPagination()}
      </Block>
    )
  }
}

export default List;

const Column = styled.div`
  /* width: ${({ width }) => width}; */
  width: 14%;

  :first-child {
    width: 6%;
  }
`;

