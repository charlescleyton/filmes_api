const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express()
app.use(express.json())
const port = 3000

const dbConnect = process.env.DB_CONNECT;
mongoose.connect(dbConnect);

const filmeSchema = new mongoose.model('Film', {
    title: String,
    description: String,
    image_url: String,
    trailer_url: String,
    genero: String,
  });

app.get('/', async (req, res) => {
    const fims = await filmeSchema.find();
    res.send(fims);
});

app.post('/', async (req, res) => {
    const film = new filmeSchema({ 
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url,
        genero: req.body.genero, 
    });
    await film.save();
    res.send(film);
})

app.delete('/:id', async (req, res) => {
    const film = await filmeSchema.findByIdAndDelete(req.params.id);
    res.send(film);
})

app.put('/:id', async (req, res) => {
    const film = await filmeSchema.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url,
        genero: req.body.genero,
    });
    res.send(film);
})

app.listen(port, () => {
    console.log(`Porta funcionando: ${port}`)
  })