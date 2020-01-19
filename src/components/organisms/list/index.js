import React, { useState } from 'react';
import axios from 'axios';

import { SERVER } from '../../../../config';

import {
  Block,
} from '../../atoms';

import {
  ItemTeam,
  ItemPlayer,
  ItemGame,
  ItemPlayerStats,
  Pagination,
} from '../../molecules';

function List(props) {
  const {
    id,
    request = "getList",
    url,
    initialData,
    initialMeta,
    error,
    locale
  } = props;

  if (error) {
    return (
      <div>Error</div>
    )
  }
  else {
    // 1 === loading || 2 === Tudo okay || 3 === Error
    const [statusData, setStatusData] = useState(0);
    const [data, setData] = useState(initialData);
    const [meta, setMeta] = useState(initialMeta);

    function GetData(selected) {
      setStatusData(1);

      let dataToSend = {}

      if (url === 'playerStats') {
        dataToSend = {
          id: id,
          url: url,
          page: selected,
        }
      }
      else {
        dataToSend = {
          url: url,
          page: selected,
        }
      }

      axios.post(`${SERVER}/${request}`, { data: dataToSend})
      .then(response => {
        const { data } = response;
        if (!data.error) {

          console.log('DAta', data);
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

    function OnChangePagination(_val) {
      GetData(_val.selected + 1)
    }

    function RenderRows() {
      if (data.length > 0) {
        return (
          <div>
            {
              data.map((item, index) => {
                if (url === "teams") {
                  return (
                    <ItemTeam
                      key={String(index)}
                      locale={locale}
                      {...item}
                    />
                  )
                } 
                else if (url === "players") {
                  return (
                    <ItemPlayer
                      key={String(index)}
                      locale={locale}
                      {...item}
                    />
                  )
                }
                else if (url === "games") {
                  return (
                    <ItemGame
                      key={String(index)}
                      locale={locale}
                      {...item}
                    />
                  )
                }
                else if (url === "playerStats") {
                  return (
                    <ItemPlayerStats
                      key={String(index)}
                      locale={locale}
                      {...item}
                    />
                  )
                }
                else {
                  return null
                }
              })
            }
          </div>
        )
      } 
      else {
        return (
          <div>No results</div>
        )
      }
    }

    function RenderLoading() {
      if (statusData === 1) {
        return (
          <div>Loading...</div>
        )
      }
      return null;
    }

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
        {RenderLoading()}
        {RenderPagination()}
      </Block>
    )
  }
}

export default List;

