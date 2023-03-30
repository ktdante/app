const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

let textbox1Value = 'Default Textbox 1 Value';
let textbox2Value = 'Default Textbox 2 Value';

res.render('index', {textbox1: textbox1, textbox2: textbox2});

app.get('/', (req, res) => {
  res.send(`
    <form action="/save" method="POST">
      <label for="textbox1">Textbox 1:</label>
      <input type="text" id="textbox1" name="textbox1" value="${textbox1Value}">
      <br>
      <label for="textbox2">Textbox 2:</label>
      <input type="text" id="textbox2" name="textbox2" value="${textbox2Value}">
      <br>
      <button type="submit" name="action" value="edit">Edit</button>
    </form>
  `);
});

app.post('/save', (req, res) => {
  const action = req.body.action;
  if (action === 'edit') {
    textbox1Value = req.body.textbox1;
    textbox2Value = req.body.textbox2;
    res.send(`
      <form action="/save" method="POST">
        <label for="textbox1">Textbox 1:</label>
        <input type="text" id="textbox1" name="textbox1" value="${textbox1Value}">
        <br>
        <label for="textbox2">Textbox 2:</label>
        <input type="text" id="textbox2" name="textbox2" value="${textbox2Value}">
        <br>
        <button type="submit" name="action" value="save">Save</button>
      </form>
    `);
  } else if (action === 'save') {
    textbox1Value = req.body.textbox1;
    textbox2Value = req.body.textbox2;
    res.redirect('/');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});