const express = require("express")
const app = express()
const port = 3000

const path = require('path')

app.use(express.static(__dirname + "/public"))
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/MAPD.htm")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })