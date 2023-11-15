var express = require('express');
var router = express.Router();

const urlPrefix = 'https://api.themoviedb.org/3/discover/movie?api_key=';

router.get('/movies', async (req, res) => {
    const url = `${urlPrefix}${process.env.API_KEY}`;
    const resp = await fetch(url);
    const data = await resp.json();
    //res.json(data);
    res.json({movies: data.results});
});

module.exports = router;
