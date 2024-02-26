const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express()
app.use(express.json())
const port = 3000

const dbConnect = process.env.DB_CONNECT;
mongoose.connect(dbConnect);

const filmeSchema = new mongoose.model('Film', {
    titulo: String,
    sinopse: String,
    img_url: String,
    trailer_url: String,
    genero: String,
    ano: Number,
    roteiro: String,
});

app.get('/', async (req, res) => {
    const films = await filmeSchema.find();
    if (films.length > 0) {
        res.send(films);
    } else {
        res.send("Não há Filmes cadastrados");
    }
});

app.post('/', async (req, res) => {
    const film = new filmeSchema({
        titulo: req.body.titulo,
        sinopse: req.body.sinopse,
        img_url: req.body.img_url,
        trailer_url: req.body.trailer_url,
        genero: req.body.genero,
        ano: req.body.ano,
        roteiro: req.body.roteiro,
    });
    await film.save();
    res.send("Filme cadastrado com sucesso");
})

app.delete('/:id', async (req, res) => {
    const film = await filmeSchema.findByIdAndDelete(req.params.id);
    res.send(film.title + "\nFilme deletado com sucesso");
})

app.put('/:id', async (req, res) => {
    await filmeSchema.findByIdAndUpdate(req.params.id, {
        titulo: req.body.titulo,
        sinopse: req.body.sinopse,
        img_url: req.body.img_url,
        trailer_url: req.body.trailer_url,
        genero: req.body.genero,
        ano: req.body.ano,
        roteiro: req.body.roteiro,
    });
    res.send("Filme atualizado com sucesso");
})

app.listen(port, () => {
    console.log(`Porta funcionando: ${port}`)
})