const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://data.gov.il/api/3/action/datastore_search?resource_id=91d298ed-a260-4f93-9d50-d5e3c5b82ce1&limit=10');
        const data = response.data.result.records;
        console.log(data); 
        res.render('index', { data });
    } catch (error) {
        console.error(error);
        res.send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});