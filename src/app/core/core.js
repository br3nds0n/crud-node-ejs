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

exports.add_user = (req, res) => {
  res.render('add_user')
}
