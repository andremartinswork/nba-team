import React, { useState } from 'react';
import axios from 'axios';

import { SERVER } from '../../../../../config';

import {
  Block,
} from '../../../atoms';

import {
  ItemPlayerStats,
  Pagination,
} from '../../../molecules';

function PlayerStats(props) {
  const {
    id,
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

      axios.post(`${SERVER}/getPlayerStats`, { data: {
        id,
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
          <div>
            {
              data.map((item, index) => (
                <ItemPlayerStats 
                  key={String(index)}
                  {...item}
                />
              ))
            }
          </div>
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
          <Pagination
            pageCount={meta.total_count}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            onPageChange={OnChangePagination}
          />
        )
      }
      return null
    }

    return (
      <Block>
        {RenderRows()}
        {RenderPagination()}
      </Block>
    )
  }
}

export default PlayerStats;