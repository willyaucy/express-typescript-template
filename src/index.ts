import * as express from 'express';

const app = express();

const port = 8080;

app.get('/', function (req, res) {
  res.send('Hello World\n');
})

app.listen(port, () => console.log(`Server running at port=${port}`));
