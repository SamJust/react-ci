const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const controllers = require('./controllers');

app.get('/api/', controllers.get);

app.use((req, res) => {
	const pathToFile = path.resolve(__dirname, './build/', `./${req.url}`);
	const stream = fs.createReadStream(pathToFile);
	stream.pipe(res);
});

app.listen(3001, () => {
	console.log('listening ot port 3000');
});