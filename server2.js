const express = require('express');
const path = require('path');
const app = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser());

// app.use(express.static(path.join(__dirname, 'dist', 'packages', 'testapp')));
// app.use(
//   express.static(
//     path.join(__dirname, 'dist', 'packages', 'prelogin', 'exported')
//   )
// );
// app.use(express.static(path.join(__dirname, 'dist', 'packages', 'testapp')));

console.log('hhhh');

// app.use(express.static(path.join(__dirname, 'build')));
// app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  // console.log("hhhh");
  // console.log("hhhh", req);
  // console.log('hhhh', req.cookies);
  // //   if()
  console.log('llllllll');
  if (req.cookies.auth == 'test') {
    app.use(
      express.static(path.join(__dirname, 'dist', 'packages', 'testapp'))
    );
    res.sendFile(
      path.join(__dirname, 'dist', 'packages', 'testapp', 'index.html')
    );
  } else {
    app.use(
      express.static(
        path.join(__dirname, 'dist', 'packages', 'prelogin', 'exported')
      )
    );
    res.sendFile(
      path.join(__dirname, 'dist', 'packages', 'prelogin', 'exported')
    );
  }
});

// app.get('/ss', function (req, res) {
//   console.log('hhhh', req.headers);
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(8002);
