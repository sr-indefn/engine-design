const express = require('express');
const path = require('path');

const clientDir = path.join(__dirname, '../client');

express()
    .use(express.static(clientDir))
    .listen(process.env.PORT || 80);
