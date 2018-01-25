(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _calculadora = require('./modules/calculadora.js');

var getName = function getName(name) {
  return name;
};

console.log('APP OK');
console.log(getName('Javier'));
console.log((0, _calculadora.sumar)(5, 5));

},{"./modules/calculadora.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sumar = function sumar(x, y) {
  return x + y;
};
var restar = function restar(x, y) {
  return x - y;
};
var multiplicar = function multiplicar(x, y) {
  return x * y;
};
var dividir = function dividir(x, y) {
  return x / y;
};
var residuo = function residuo(x, y) {
  return x % y;
};

exports.sumar = sumar;
exports.restar = restar;
exports.multiplicar = multiplicar;
exports.dividir = dividir;
exports.residuo = residuo;

},{}]},{},[1]);
