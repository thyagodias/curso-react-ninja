'use strict'
var ReactDOM = require('react-dom')
var React = require('react')

var Title = require('./app')

ReactDOM.render(
  React.createElement(Title),
  document.querySelector('[data-js="app"]')
)