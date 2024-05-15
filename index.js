const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');
const pathToFile = path.join(__dirname, 'count.json');
const countData = JSON.parse(fs.readFileSync(pathToFile, 'utf-8'));

app.get('/', (req, res) => {
  countData[req.url] ++;
  fs.writeFileSync(pathToFile, JSON.stringify(countData, null, 2));
  res.send(`<h1>Корневая страница</h1><br><p>Просмотров ${countData[req.url]}</p><br><a href="/about">Ссылка на страницу /about</a>`)
})

app.get('/about', (req, res) => {
  countData[req.url] ++;
  fs.writeFileSync(pathToFile, JSON.stringify(countData, null, 2));
  res.send(`<h1>Страница about</h1><br><p>Просмотров ${countData[req.url]}</p><br><a href="/">Ссылка на страницу /</a>`)
})

app.listen(3000);

