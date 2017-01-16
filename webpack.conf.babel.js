import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

//Development Mode
//Be sure to invoke Webpack as env NODE_ENV=development webpack -p when building your development assets.
const ENV = process.env.NODE_ENV || 'development';

let config = {
  debug: ENV == 'development' ? true : false,
  devtool: ENV ? 'cheap-module-eval-source-map' : 'hidden-source-map',
  entry: [
    './src/index.js',
    './src/assets/css/AdminLTE.css',
    './src/assets/css/_all-skins.css'
  ],
  output: {
    path: path.join(__dirname, '/'),
    filename: 'bundle.js',
    publicPath: ENV !== 'development' ? '/public/' : '/'
  },
  plugins:([
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('style.css', {allChunks: true}),
    new HtmlWebpackPlugin({
      template: path.resolve('./src/', 'index.html'),
      minify: {
        collapseWhitespace: true
      }
    })
  ]).concat(ENV == 'production'
    ? [
      new webpack.optimize.OccurenceOrderPlugin()
    ]
    : []),
  module: {
    loaders: [
      {
        test: /\.(ico|jpg|jpeg|png|eot|ttf|woff|svg|less)/,
        loader: 'file'
      },{
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract("style", "css?sourceMap&modules&importLoaders=1&localIdentName=[local]!sass?sourceMap")
      },
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel']
      },
      {
        test: /modernizr\.min\.js$/,
        loader: "imports?this=>window,html5=>window.html5!exports?window.Modernizr"
      }
    ]
  },
  resolve: {
    extensions: ['', '.scss', '.js'],
    alias: {
      'base': path.resolve(__dirname, './src/'),
      'components': path.resolve(__dirname, './src/components/'),
      'data': path.resolve(__dirname, './src/data/'),
      'assets': path.resolve(__dirname, './src/assets/'),
      'constants': path.resolve(__dirname, './src/constants'),
      'actions': path.resolve(__dirname, './src/actions'),
      'utils': path.resolve(__dirname, './src/utils'),
      'reducers': path.resolve(__dirname, './src/reducers')
    }
  },
  devtool: ENV == 'development'
    ? 'source-map'
    : 'source-map',
  devServer: {
    port: 3000,
    host: '0.0.0.0',
    colors: true,
    publicPath: '/',
    contentBase: './',
    historyApiFallback: true
  }
};

export default config;