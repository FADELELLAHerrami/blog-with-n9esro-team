import e from"net";import r from"bindings";import n from"buffer";var t="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var i={};var a=n.Buffer;var o=e,c=r("hiredis.node");var f=new a("*","ascii");var l=new a("$","ascii");var d=new a("\r\n","ascii");i.Reader=c.Reader;i.writeCommand=function(){var e=arguments,r=new a(String(e.length),"ascii"),n=[f,r,d],t=3+r.length;for(var i=0;i<e.length;i++){var o=e[i];a.isBuffer(o)||(o=new a(String(o)));r=new a(String(o.length),"ascii");n=n.concat([l,r,d,o,d]);t+=5+r.length+o.length}return a.concat(n,t)};i.createConnection=function(e,r){var n=o.createConnection(e||6379,r);var a=new c.Reader;var f=n.write;n.write=function(){var e=i.writeCommand.apply(this||t,arguments);return f.call(n,e)};n.on("data",(function(e){var r;a.feed(e);try{while(void 0!==(r=a.get()))n.emit("reply",r)}catch(e){a=null;n.emit("error",e);n.destroy()}}));return n};const v=i.Reader,s=i.writeCommand,g=i.createConnection;export default i;export{v as Reader,g as createConnection,s as writeCommand};

