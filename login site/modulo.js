import dados from './index.js'
import express from 'express'

const app =  express()

app.get('/', async function (req, res, next) {
    const valores = await dados.busca()
    await res.status(200).send({
        title: `${valores}`,
        version: "0.0.1"
    });
})

app.listen(3000)