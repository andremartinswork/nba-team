const { api } = require('../../lib/api');

module.exports = (server) => {
  server.post('/getPlayerStats', async(req, res) => {
    const {
      id,
      page,
    } = req.body.data;

    try {
      const response = await api.get(`/players/${id}/stats`, { data : { page }})
      const { data } = response;

      return res.send({
        data: data ? data.data : [],
        meta: data ? data.meta : [],
        error: false,
        errorMessage: null,
      })
    }
    catch(error) {
      return res.send({
        data: [],
        meta: [],
        error: true,
        errorMessage: error.message,
      })
    }
  })
}