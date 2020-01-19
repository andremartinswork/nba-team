const { api } = require('../../lib/api');

module.exports = (server) => {
  server.post('/getDetail', async(req, res) => {
    const {
      url,
      id,
    } = req.body.data;

    try {
      const response = await api.get(`/${url}/${id}`)
      const { data } = response;

      return res.send({
        data: data ? data : [],
        error: false,
      })
    }
    catch(error) {
      return res.send({
        data: [],
        error: true,
      })
    }
  })
}