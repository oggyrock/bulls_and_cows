parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var t,e=function(){for(var t=4,e="",n=[0,1,2,3,4,5,6,7,8,9];t--;){var c=Math.floor(Math.random()*n.length);e+=n[c],n.splice(c,1)}return e},n=e();document.getElementById("guess").oninput=function(){t=document.getElementById("guess").value};var c=function(){for(var e=0,c=0,o=[0,0,0,0,0,0,0,0,0,0],r=0;r<n.length;r++)n[r]===t[r]?e++:(o[+n[r]]<0&&c++,o[+t[r]]>0&&c++,o[+n[r]]++,o[+t[r]]--);return"відгадано ".concat(e," биків та ").concat(c," корів")},o=0;document.getElementById("button").onclick=function(){t?(o++,document.getElementById("result").insertAdjacentHTML("beforeend","<p>Спроба №".concat(o,": введено ").concat(t,", ").concat(c(n,t),"</p>"))):alert("Потрібно ввести число"),t===n&&document.getElementById("result").insertAdjacentHTML("beforeend","<p>Вітаю! Число ".concat(t," вірне! Ви витратили ").concat(o,' спроб</p>\n      <button><a href="">Спробувати ще</a></button>'))};
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.34066a58.js.map