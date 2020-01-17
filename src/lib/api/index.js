const axios = require('axios');
const { API } = require('../../../config');

const api = axios.create({
  baseURL: API,
  // timeout: 10000,
  // headers: { 'Content-Type': 'application/graphql', 'Frontend' : 'avvAL2Ind2019FE' },
  // crossdomain: true,
  // validateStatus: () => {
  //   return true;
  // },
});

module.exports = {
  api
}