import React from 'react';
import axios from 'axios';

import { SERVER } from '../../../../config';

import {
  Header
} from '../../../../src/components/molecules';

import {
  Game,
} from '../../../../src/components/organisms';

function GameDetail(props) {
  const {
    data
  } = props;

  return(
    <>
      <Header
        title={`Game - ${data.id}`}
      />
      <Game
        {...data}
      />
    </>
  )
}

GameDetail.getInitialProps = async ({ query }) => {
  const { id } = query;

  try {
    const response = await axios.post(`${SERVER}/getDetail`, {
      data: {
        url: 'games',
        id: id,
      }
    });
  
    const { data } = response;
  
    if (!data.error) {
      return {
        data: data.data,
        error: false,
      }
    }
    else {
      return {
        data: [],
        error: true,
      }
    }
  }
  catch {
    return {
      data: [],
      error: true,
    }
  }
}

export default GameDetail;