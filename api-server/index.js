const express = require('express');
const cookieSession = require('cookie-session');
const cors = require('cors');

const app = express();
app.use(
  cors({
    origin: 'http://flask.com:3001',
    credentials: true,
  })
);
app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    httpOnly: false,
  })
);

app.get('/setcookie', (req, res) => {
  req.session = { hi: 'there' };
  res.send('Cookie set!');
});

app.get('/api', (req, res) => {
  res.send(req.session);
});

app.listen(3000, () => {
  console.log('listening on 3000');
});
