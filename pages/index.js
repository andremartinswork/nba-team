import React from 'react';
import axios from 'axios';

import {
  SERVER
} from '../config';

function Index(props) {
  return (
    <h1>INDEX</h1>
  )
}

Index.getInitialProps = async ({ query }) => {
  const players = await axios.get(`${SERVER}/getPlayers`);
  console.log('PLayers', players.data);

  return {
    data: players.data
  }
}

export default Index;