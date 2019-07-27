const app = require('./app')
const {PORT} = require("./config")
// const PORT = process.env.PORT || 8000 - gets from config.js

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})