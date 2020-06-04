const express = require('express');
const cookieSession = require('cookie-session');

const app = express();
app.use(express.json());
app.use(
  cookieSession({
    signed: false,
  })
);

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js"></script>
      </head>
      <body>
        <button>Send req</button>
        <script>
          const button = document.querySelector('button');
          button.addEventListener('click', () => {
            axios.get('http://localhost:3000/api', {
              withCredentials: true
            }).then(res => {
              console.log(res.body)
            })
          });
        </script>
      </body>
    </html>
  `);
});

app.listen(3001, () => {
  console.log('listening on 3001');
});
