const PORT = 8000
const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');

const app = express();

const url = ''; // enter url for site

axios(url)
    .then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);
        const arr = [];
        $('.className', html).each(function() { // traverse dom of website and enter className
            const text = $(this).text();
            arr.push({
                text
            });
        })
    console.log(arr);
    })
    .catch((err) => {
        console.log(err);
    })

app.listen(PORT, ()=> console.log(`server listening on port ${PORT}`));