const app = require('./app');
var conneion = require('./models/connection');
const port = 4040


 

app.listen(port)
console.log(`listening on http://localhost:${port}`)

