import e from"superagent";import t from"debug";var r="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var o={};var i=e,n=t("embed");var u;var s={objectify:2,oembed:1,preview:1};o=Embed;function Embed(e){if(!((this||r)instanceof Embed))return new Embed(e);if("string"!=typeof e)throw new Error("url required");(this||r).url=e;(this||r)._key=u}Embed.key=function(e){u=e};Embed.prototype.key=function(e){(this||r)._key=e;return this||r};Embed.prototype.request=function(e,t){var o=s[e];n('GET %s "%s"',e,(this||r).url);return i.get("http://api.embed.ly/"+o+"/"+e).query({key:(this||r)._key}).query({url:(this||r).url}).end((function(e,r){if(e)return t(e);if(!r.ok){var e=new Error("got "+r.status+" response");e.res=r;e.text=r.text;return t(e)}t(null,r.body)}))};Embed.prototype.oembed=Embed.prototype.basic=function(e){this.request("oembed",e);return this||r};Embed.prototype.preview=function(e){this.request("preview",e);return this||r};Embed.prototype.objectify=Embed.prototype.object=function(e){this.request("objectify",e);return this||r};var b=o;export default b;

