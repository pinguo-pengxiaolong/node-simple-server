/**
 * The joke is on me!
 */


const path = require('path')
const express = require('express')
const app = express()


app.use('/html', express.static(path.join(__dirname, '../html')))


app.listen(1337, () => console.log('Example app listening on port 1337'))
