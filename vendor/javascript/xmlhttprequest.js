import e from"url";import t from"child_process";import r from"fs";import s from"http";import n from"https";import o from"process";import a from"buffer";var i;var h="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var u={};var p=a.Buffer;var d=o;
/**
 * Wrapper for built-in http.js to emulate the browser XMLHttpRequest object.
 *
 * This can be used with JS designed for browsers to improve reuse of code and
 * allow the use of existing libraries.
 *
 * Usage: include("XMLHttpRequest.js") and use XMLHttpRequest per W3C specs.
 *
 * @todo SSL Support
 * @author Dan DeFelippi <dan@driverdan.com>
 * @contributor David Ellis <d.f.ellis@ieee.org>
 * @license MIT
 */var f=e,c=t.spawn,E=r;u.XMLHttpRequest=function(){var e=this||h;var t=s;var r=n;var o;var a;var u;var l={};var T={"User-Agent":"node.js",Accept:"*/*"};var v=T;(this||h).UNSENT=0;(this||h).OPENED=1;(this||h).HEADERS_RECEIVED=2;(this||h).LOADING=3;(this||h).DONE=4;(this||h).readyState=(this||h).UNSENT;(this||h).onreadystatechange=null;(this||h).responseText="";(this||h).responseXML="";(this||h).status=null;(this||h).statusText=null;(this||h).open=function(e,t,r,s,n){l={method:e,url:t,async:r||null,user:s||null,password:n||null};this.abort();setState((this||h).OPENED)};(this||h).setRequestHeader=function(e,t){v[e]=t};(this||h).getResponseHeader=function(e){return(this||h).readyState>(this||h).OPENED&&u.headers[e]?e+": "+u.headers[e]:null};(this||h).getAllResponseHeaders=function(){if((this||h).readyState<(this||h).HEADERS_RECEIVED)throw"INVALID_STATE_ERR: Headers have not been received.";var e="";for(var t in u.headers)e+=t+": "+u.headers[t]+"\r\n";return e.substr(0,e.length-2)};(this||h).send=function(s){if((this||h).readyState!=(this||h).OPENED)throw"INVALID_STATE_ERR: connection must be opened before send() is called";var n=false;var o=f.parse(l.url);switch(o.protocol){case"https:":n=true;case"http:":var a=o.hostname;break;case void 0:case"":var a="localhost";break;default:throw"Protocol not supported."}var u=o.port||(n?443:80);var T=o.pathname+(o.search?o.search:"");this.setRequestHeader("Host",a);if(l.user){"undefined"==typeof l.password&&(l.password="");var R=new p(l.user+":"+l.password);v["Authorization"]="Basic "+R.toString("base64")}if("GET"==l.method||"HEAD"==l.method)s=null;else if(s){this.setRequestHeader("Content-Length",p.byteLength(s));v["Content-Type"]||this.setRequestHeader("Content-Type","text/plain;charset=UTF-8")}var S={host:a,port:u,path:T,method:l.method,headers:v};if(!l.hasOwnProperty("async")||l.async){var y=n?r.request:t.request;var N=y(S,(function(t){t.setEncoding("utf8");setState(e.HEADERS_RECEIVED);e.status=t.statusCode;t.on("data",(function(t){t&&(e.responseText+=t);setState(e.LOADING)}));t.on("end",(function(){setState(e.DONE)}));t.on("error",(function(t){e.handleError(t)}))})).on("error",(function(t){e.handleError(t)}));s&&N.write(s);N.end()}else{var D=".node-xmlhttprequest-sync-"+d.pid;E.writeFileSync(D,"","utf8");var O="var http = require('http'), https = require('https'), fs = require('fs');"+"var doRequest = http"+(n?"s":"")+".request;"+"var options = "+JSON.stringify(S)+";"+"var responseText = '';"+"var req = doRequest(options, function(response) {"+"response.setEncoding('utf8');"+"response.on('data', function(chunk) {"+"responseText += chunk;"+"});"+"response.on('end', function() {"+"fs.writeFileSync('"+D+"', 'NODE-XMLHTTPREQUEST-STATUS:' + response.statusCode + ',' + responseText, 'utf8');"+"});"+"response.on('error', function(error) {"+"fs.writeFileSync('"+D+"', 'NODE-XMLHTTPREQUEST-ERROR:' + JSON.stringify(error), 'utf8');"+"});"+"}).on('error', function(error) {"+"fs.writeFileSync('"+D+"', 'NODE-XMLHTTPREQUEST-ERROR:' + JSON.stringify(error), 'utf8');"+"});"+(s?"req.write('"+s.replace(/'/g,"\\'")+"');":"")+"req.end();";h.syncProc=i=c(d.argv[0],["-e",O]);while(""==(e.responseText=E.readFileSync(D,"utf8")));i.stdin.end();E.unlinkSync(D);if(e.responseText.match(/^NODE-XMLHTTPREQUEST-ERROR:/)){var m=e.responseText.replace(/^NODE-XMLHTTPREQUEST-ERROR:/,"");e.handleError(m)}else{e.status=e.responseText.replace(/^NODE-XMLHTTPREQUEST-STATUS:([0-9]*),.*/,"$1");e.responseText=e.responseText.replace(/^NODE-XMLHTTPREQUEST-STATUS:[0-9]*,(.*)/,"$1");setState(e.DONE)}}};(this||h).handleError=function(e){(this||h).status=503;(this||h).statusText=e;(this||h).responseText=e.stack;setState((this||h).DONE)};(this||h).abort=function(){v=T;(this||h).readyState=(this||h).UNSENT;(this||h).responseText="";(this||h).responseXML=""};var setState=function(t){e.readyState=t;"function"===typeof e.onreadystatechange&&e.onreadystatechange()}};const l=u.XMLHttpRequest;export default u;export{l as XMLHttpRequest};

