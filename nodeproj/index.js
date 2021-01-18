var axios = require('axios');
const express = require('express');
const router = require('express').Router();
const app = express();

//const bodyParser = require('body-parser');

//app.use(bodyParser.urlencoded({ extended: true }));
//const fs = require('fs');
//const soapenv = fs.readFileSync('data/soapsapm.xml', 'utf-8');
//console.log(soapenv);

app.post('/soapenv', (req, res) => {
    console.log('Got request body:', req);

    var config = {
        method: 'post',
        url: 'https://www.crcind.com:443/csp/samples/SOAP.Demo.cls',
        headers: {
            'SOAPAction': 'http://tempuri.org/SOAP.Demo.AddInteger',
            'Content-Type': 'text/xml;charset=UTF-8',
            //'Cookie': 'CSPSESSIONID-SP-443-UP-csp-samples-=000000010000YsXdmp7kLd0000BNnSgwg7gX8rKH8wZdvdRg--; CSPWSERVERID=401454b12ef6a8e7278a8ca47fc64830a20f3b2e'
        },
        data: req
    };    

    axios(config)
    .then(function (response) {    
        console.log(JSON.stringify(response.data));
        res.send(response.data);
        res.sendStatus(200);
    })
    .catch(function (error) {
        console.log(error);
        res.sendStatus(500);
    });
   
});


app.listen(3000, () => console.log('Express listening on port 3000!'));
