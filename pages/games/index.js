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

function Games(props) {
  const {
    initialData,
    initialMeta,
    error,
  } = props;

  return (
    <>
      <Header 
        title="Games"
      />
      <List
        orderBy="id"
        url="games"
        initialData={initialData}
        initialMeta={initialMeta}
        error={error}
      />
    </>
  )
}

Games.getInitialProps = async () => {
  try {
    const response = await axios.post(`${SERVER}/getList`, {
      data: {
        url: 'games',
        page: 1,
      }
    });
  
    const { data } = response;
  
    if (!data.error) {
      const sortedData = data.data.sort((a, b) => (a.id > b.id) ? 1 : -1);
  
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

export default Games;