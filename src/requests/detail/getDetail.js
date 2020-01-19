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

      console.log(data)

      return res.send({
        data: data ? data : [],
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