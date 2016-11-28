(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// import $ from "jquery";

var tmpl = function tmpl(addrs) {
    return '\n  <table>\n  ' + addrs.map(function (addr) {
        return '\n    <tr><td>' + addr.first + '</td></tr>\n    <tr><td>' + addr.last + '</td></tr>\n  ';
    }).join('') + '\n  </table>\n';
};
var data = [{
    first: '<Jane>',
    last: 'Bond'
}, {
    first: 'Lars',
    last: '<Croft>'
}];
console.log(tmpl(data));

},{}]},{},[1]);
