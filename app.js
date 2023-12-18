const express = require('express')
const app = express()
const port = 3000

app.use(express.static('stuff'))

app.get('/colou?r', (req, res) => {
    res.send('\ngot you\n')
})

app.get(/i*flys?$/, (req, res) => {
    res.send('\nIt is very true\n')
})

app.get(/apple$/, (req, res) => {
    res.send('\n We have the apple\n')
})

app.route('/banana')
    .get((req, res) => {
        res.send('get request\n')
    })
    .put((req, res) => {
        res.send('get put\n')
    })
    .delete((req, res) => {
        res.send('get delete\n')
    })



app.listen(port, () => {
    console.log(`on port: ${port}`)
})