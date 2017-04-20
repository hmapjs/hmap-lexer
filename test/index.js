'use strict';

var fs = require('fs');
var lex = require('../');
// var checkLexerFunctions = require('./check-lexer-functions');
//
// checkLexerFunctions();

var dir = __dirname + '/cases/';

fs.readdirSync(dir).forEach(function (testCase) {
  if (/\.hmap$/.test(testCase)) {
    // var expected = fs.readFileSync(dir + testCase.replace(/\.hmap$/, '.expected.json'), 'utf8')
    //   .split(/\n/)
    //   .filter(function(currentValue,index,arr) {
    //     return !!currentValue;
    //   })
    //   .map(function(item, index, arr) {
    //     if(item) {
    //       return JSON.parse(item);
    //     }
    //   });
    var result = lex(fs.readFileSync(dir + testCase, 'utf8'), {filename: dir + testCase});

    console.log(`${testCase}:`);
    console.log(result);
    console.log("==============================");
  }
});
