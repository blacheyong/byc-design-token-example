const path = require('path');
const webpack = require('webpack');
const { isProduction } = require('webpack-mode');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

// Get ENV & set variables
require('dotenv').config();
const srcPath = process.env.SRC_PATH;
const srcImg = process.env.SRC_IMG;
const srcFonts = process.env.SRC_FONTS;
const outputPath = process.env.OUTPUT_PATH;
const watchFiles = process.env.WATCH_HTML;

console.log(srcPath)

let outputName = 'app.js';
let cssOutput = 'expanded';

if (isProduction) {
  outputName = 'app.min.js';
  cssOutput = 'compressed';
}

// Minify JS for Production
let loadMinimizer = [];
if (isProduction) {
  enableSourceMapContents = false;
  loadMinimizer.push(new UglifyJsPlugin({
    uglifyOptions: {
      mangle: true,
      output: {
        comments: false
      }
    },
    sourceMap: true,
    exclude: [/\.min\.js$/gi]
  }));
}


//------------------------------------------
// Define Plugins
//------------------------------------------
// Extract Styles in a CSS file
const extractStyles = new MiniCssExtractPlugin({
  filename: '../css/[name].css'
});

// Copy Images & Fonts
const copyImgFonts = new CopyWebpackPlugin({
  patterns: [
    {from: srcImg, to: '../images/'},
    {from: srcFonts, to: '../fonts/'}
  ]
});

// Optimize Images - Production Build Only
const optimizeImage = new ImageminPlugin({
  disable: !isProduction,
  optipng: {
    optimizationLevel: 7
  },
  svgo: {},
  plugins: [
    imageminMozjpeg({
      quality: 90,
      progressive: true
    })
  ]
});

// BrowserSync
const browserSync = new BrowserSyncPlugin({
  host: 'localhost',
  port: 3000,
  server: { baseDir: ['dist'] },
  files: [
    watchFiles
  ]
});

//------------------------------------------
// Config
//------------------------------------------
module.exports = {
  entry: srcPath + 'main.js',
  output: {
    path: path.resolve(__dirname, outputPath),
    filename: outputName
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          {
            // translates CSS into CommonJS
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            // compiles Sass to CSS
            loader: "sass-loader",
            options: {
              sassOptions: {
                outputStyle: cssOutput,
                sourceMap: true
              }
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name:'[path][name].[ext]',
          context: path.resolve(__dirname, srcImg),
          outputPath:'../images/',
          publicPath: '../images',
          useRelativePaths: true
        }
      },
      {
        test: /\.(ttf|eot|otf|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
            context: path.resolve(__dirname, srcFonts),
            outputPath:'../fonts/',
            publicPath: '../fonts/',
            useRelativePaths: true
          },
        },
      }
    ]
  },
  plugins: [
    copyImgFonts,
    optimizeImage,
    browserSync,
    extractStyles
  ],
  /* externals: {
    '$': 'jquery',
    'jquery': 'jQuery',
    'window.jQuery': 'jquery'
  }, */
  optimization: {
    minimizer: loadMinimizer
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
