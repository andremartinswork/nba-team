const { api } = require('../../lib/api');

module.exports = (server) => {
  server.get('/getPlayers', async(req, res) => {
    try {
      const response = await api.get('/players')
      const { data } = response;

      console.log()
      console.log('DATA', data.data);
      return res.send({
        data: data.data
      })
    }
    catch(error) {
      return res.send({
        data: 'DATA'
      })
    }
  })
}