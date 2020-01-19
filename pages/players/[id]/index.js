import React from 'react';
import axios from 'axios';

import { SERVER } from '../../../config';

import {
  Header
} from '../../../src/components/molecules';

import {
  Player,
  List,
} from '../../../src/components/organisms';

function PlayerDetail(props) {
  const {
    id,
    player,
    playerError,
    initialStatsData,
    initialStatsMeta,
    statsError,
  } = props;

  return(
    <>
      <Header
        title="Player Detail"
      />
      <Player
        {...player}
      />
      <List
        orderBy="id"
        request="getPlayerStats"
        url="playerStats"
        id={id}
        initialData={initialStatsData}
        initialMeta={initialStatsMeta}
        error={statsError}
      />
    </>
  )
}

PlayerDetail.getInitialProps = async ({ query }) => {
  const { id } = query;

  try {
    const player = await axios.post(`${SERVER}/getDetail`, { data: { url: 'players', id: id } });
    const stats = await axios.post(`${SERVER}/getPlayerStats`, { data: { id: id, page: 1 } });
  
    if (!player.error && !stats.error) {
      const sortedData = stats.data.data.sort((a, b) => (a.id > b.id) ? 1 : -1);
  
      return {
        id,
        player: player.data.data,
        playerError: false,
        initialStatsData: sortedData,
        initialStatsMeta: stats.data.meta,
        statsError: false
      }
    }
    else {
      return {
        id,
        player: [],
        playerError: player.error,
        initialStatsData: [],
        initialStatsMeta: [],
        statsError: stats.error,
      }
    }
  }
  catch {
    return {
      id,
      player: [],
      playerError: true,
      initialStatsData: [],
      initialStatsMeta: [],
      statsError: true
    }
  }
}

export default PlayerDetail;