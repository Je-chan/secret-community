const express = require('express');
const cors = require('cors');
const { article, board, comment, department, reply, user } = require('./route');
const app = express();
const PORT = 9090;

app.use(cors());
app.use(express.json()); // req.body 를 위한 것
app.use(express.urlencoded({ extended: true }));

// 기능별 라우터 추가
app.use(article);
app.use(board);
app.use(comment);
app.use(department);
app.use(reply);
app.use(user);

// 서버 상태 확인
app.get('/', (req, res) => {
  res.send('Server Is Running!');
});

app.listen(PORT, 'localhost', () => {
  console.log(`APP listening at http://localhost:${PORT}`);
});
