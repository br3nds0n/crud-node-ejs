const axios = require('axios')

exports.home = (req, res) => {
  axios.get('http://localhost:3000/api/users')
    .then(function (response) {
      res.render('index', { users: response.data })
    })
    .catch(err => {
      res.send(err)
    })
}

exports.adicionar = (req, res) => {
  res.render('adicionar')
}

exports.atualizar = (req, res) => {
  axios.get('http://localhost:3000/api/users', { params: { id: req.query.id } })
    .then(function (userdata) {
      res.render('atualizar', { user: userdata.data })
    })
    .catch(err => {
      res.send(err)
    })
}
