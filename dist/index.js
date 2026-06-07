"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var a=s(function(f,t){
var o=require("path").resolve,i=require('@stdlib/fs-read-json/dist').sync,n=o(__dirname,"..","data","words.json"),u={encoding:"utf8"};function v(){var r=i(n,u);if(r instanceof Error)throw r;return r}t.exports=v
});var d=a();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
