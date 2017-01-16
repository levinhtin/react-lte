import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.conf.babel.js';

let app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + './public'));
app.use(webpackMiddleware(compiler, {
  hot: true,
  contentBase: './public/',
  serverSideRender: true,
  stats: {
    colors: true
  },
  filename: webpackConfig.output.filename,
  publicPath: webpackConfig.output.publicPath,
  noInfo: false
}));

app.get('/*', (req, res) => {
  // res.send('Hello World');
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(5000, () => console.log('Running on localhost:5000'));
