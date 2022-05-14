const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())
app.use('/c3addon', express.static('c3addon'))

app.get('/', (req, res) => res.sendStatus(200))

app.listen(port, () => {
  console.log(`c3addon server is running on port ${port}`)
})
