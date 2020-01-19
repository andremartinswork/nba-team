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

function Teams(props) {
  const {
    initialData,
    initialMeta,
    error,
  } = props;

  return (
    <>
      <Header 
        title="Teams"
      />
      <List
        orderBy="full_name"
        url="teams"
        initialData={initialData}
        initialMeta={initialMeta}
        error={error}
      />
    </>
  )
}

Teams.getInitialProps = async () => {
  try {
    const response = await axios.post(`${SERVER}/getList`, {
      data: {
        url: 'teams',
        page: 1,
      }
    });
  
    const { data } = response;
  
    if (!data.error) {
      const sortedData = data.data.sort((a, b) => (a.full_name > b.full_name) ? 1 : -1);
  
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

export default Teams;