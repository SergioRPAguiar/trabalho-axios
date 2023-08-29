const axios = require('axios');

exports.getPosts = (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      const posts = response.data;
      res.json(posts);
    })
    .catch(error => {
      res.status(500).json({ error: 'Erro ao obter os posts' });
    });
};

