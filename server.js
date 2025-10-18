const express = require('express')
const app = express()
const PORT = 8000

const cryptoYearly = {
    'bitcoin' :{
        '2025' : 93576.00,
        '2024' : 42283.58,
        '2023' : 16541.77,
        '2022' : 46216.93,
        '2021' : 282923.63,
        '2020' : 7195.24,
        '2019' : 3701.23,
        '2018' : 13715.65
    },
    'solana' : {
        '2025' : 189.31,
        '2024' : 101.72,
        '2023' : 9.97,
        '2022' : 170.01,
        '2021' : 1.51,
        '2020' : 2.85,
        '2019' : null,
        '2018' : null
    },
    'ripple' : {
        '2025' : 2.0836,
        '2024' : 0.6155,
        '2023' : 0.3389,
        '2022' : 0.8298,
        '2021' : 0.2195,
        '2020' : 0.1929,
        '2019' : 0.3486,
        '2018' : 0.5000
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:year', (req, res)=>{
    const cryptoYear = req.params.year.toLowerCase()

    if (cryptoYearly[cryptoYear]) {
        res.json(cryptoYearly[cryptoYear])
    }
})

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The server is now running on port ${PORT}.`)
})