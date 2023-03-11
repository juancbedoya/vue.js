const express = require('express');
const cors = require('cors');
const app = express()


app.use(cors())
app.use(express.json())

app.get('/items', (req, res) => {
    const data = { name: "juan", age: 30 }
    res.json(data)
})

const port = process.env.port || 3000

app.listen(port, () => {
    console.log(`todo correcto http://localhost:${port}`);
})