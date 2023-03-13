const express = require('express');
const app = express();
const PORT = 3333;


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))


app.get('/', (req, res) => {
    res.render('pages/index', {
        title: 'Home'
    });
})

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT} Better go catch it`)
})
