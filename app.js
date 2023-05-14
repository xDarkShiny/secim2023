import express from 'express';
import axios from 'axios';

const app = express();

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://cdt-tr.hanzy.dev/api/results'); // API'nin gerçek URL'sini buraya ekleyin
        const data = response.data;
        res.render('index', { data, title: 'I was AJANS' });
    } catch (error) {
        console.log(error);
    }
});


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
