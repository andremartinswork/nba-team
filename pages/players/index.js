import React from 'react';
import axios from 'axios';

import {
  SERVER
} from '../../config';

import {
  Header,
} from '../../src/components/molecules';

import {
  List,
} from '../../src/components/organisms';

function Players(props) {
  const {
    initialData,
    initialMeta,
    error,
  } = props;

  return (
    <>
      <Header 
        title="Players"
      />
      <List
        orderBy="first_name"
        url="players"
        initialData={initialData}
        initialMeta={initialMeta}
        error={error}
      />
    </>
  )
}

Players.getInitialProps = async () => {
  try {
    const response = await axios.post(`${SERVER}/getList`, {
      data: {
        url: 'players',
        page: 1,
      }
    });
  
    const { data } = response;
  
    if (!data.error) {
      const sortedData = data.data.sort((a, b) => (a.first_name > b.first_name) ? 1 : -1);
  
      return {
        initialData: sortedData,
        initialMeta: data.meta,
        error: false,
      }
    }
    else {
      return {
        initialData: [],
        initialMeta: [],
        error: true,
      }
    }
  }
  catch {
    return {
      initialData: [],
      initialMeta: [],
      error: true,
    }
  }
}

export default Players;