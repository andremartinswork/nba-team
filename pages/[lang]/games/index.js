import React from 'react';
import axios from 'axios';

import {
  SERVER
} from '../../../config';

import {
  Header,
} from '../../../src/components/molecules';

import {
  List,
} from '../../../src/components/organisms';

function Games(props) {
  const {
    initialData,
    initialMeta,
    error,
  } = props;

  const locale = "en"

  console.log('props',props)

  return (
    <>
      <Header 
        title="Games"
      />
      <List
        url="games"
        initialData={initialData}
        initialMeta={initialMeta}
        error={error}
        locale={locale}
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

    console.log(response);
  
    const { data } = response;
  
    if (!data.error) {
      return {
        initialData: data.data,
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