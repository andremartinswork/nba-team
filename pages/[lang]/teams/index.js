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

function Teams(props) {
  const {
    initialData,
    initialMeta,
    error,
  } = props;

  const locale = "en"

  return (
    <>
      <Header 
        title="Teams"
      />
      <List
        url="teams"
        initialData={initialData}
        initialMeta={initialMeta}
        error={error}
        locale={locale}
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

export default Teams;