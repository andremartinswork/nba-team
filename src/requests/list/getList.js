const { api } = require('../../lib/api');

module.exports = (server) => {
  server.post('/getList', async(req, res) => {
    const {
      url,
      page,
    } = req.body.data;

    try {
      const response = await api.get(`/${url}`, { data : { page }})
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
        error: true,
        errorMessage: error.message,
      })
    }
  })
}