(()=>{var e={};e.id=537,e.ids=[537],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},42449:e=>{"use strict";e.exports=require("pg")},55511:e=>{"use strict";e.exports=require("crypto")},29021:e=>{"use strict";e.exports=require("fs")},33873:e=>{"use strict";e.exports=require("path")},27910:e=>{"use strict";e.exports=require("stream")},74075:e=>{"use strict";e.exports=require("zlib")},4573:e=>{"use strict";e.exports=require("node:buffer")},77598:e=>{"use strict";e.exports=require("node:crypto")},57975:e=>{"use strict";e.exports=require("node:util")},87813:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>c,pages:()=>d,routeModule:()=>h,tree:()=>u});var s=r(70260),n=r(28203),i=r(25155),a=r.n(i),o=r(67292),l={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let u=["",{children:["csv-upload",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2828)),"/Users/jerry/projects/WebDev/forese/hrdb/src/app/csv-upload/page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,98180)),"/Users/jerry/projects/WebDev/forese/hrdb/src/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,76868)),"/Users/jerry/projects/WebDev/forese/hrdb/src/app/not-found.jsx"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,41485,23)),"next/dist/client/components/unauthorized-error"]}],d=["/Users/jerry/projects/WebDev/forese/hrdb/src/app/csv-upload/page.jsx"],c={require:r,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/csv-upload/page",pathname:"/csv-upload",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},4697:(e,t,r)=>{Promise.resolve().then(r.bind(r,86213)),Promise.resolve().then(r.bind(r,75061))},41145:(e,t,r)=>{Promise.resolve().then(r.bind(r,70018)),Promise.resolve().then(r.bind(r,72505))},30722:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(41680).A)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]])},43711:function(e,t,r){var s,n,i;n=[],void 0!==(i="function"==typeof(s=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},s=!t.document&&!!t.postMessage,n=t.IS_PAPA_WORKER||!1,i={},a=0,o={};if(o.parse=function(r,s){var n,l=(s=s||{}).dynamicTyping||!1;if(j(l)&&(s.dynamicTypingFunction=l,l={}),s.dynamicTyping=l,s.transform=!!j(s.transform)&&s.transform,s.worker&&o.WORKERS_SUPPORTED){var u=function(){if(!o.WORKERS_SUPPORTED)return!1;var r,s,n=(r=t.URL||t.webkitURL||null,s=e.toString(),o.BLOB_URL||(o.BLOB_URL=r.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",s,")();"],{type:"text/javascript"})))),l=new t.Worker(n);return l.onmessage=_,l.id=a++,i[l.id]=l,l}();u.userStep=s.step,u.userChunk=s.chunk,u.userComplete=s.complete,u.userError=s.error,s.step=j(s.step),s.chunk=j(s.chunk),s.complete=j(s.complete),s.error=j(s.error),delete s.worker,u.postMessage({input:r,config:s,workerId:u.id});return}var m=null;return r===o.NODE_STREAM_INPUT&&"undefined"==typeof PAPA_BROWSER_CONTEXT?(m=new p(s)).getStream():("string"==typeof r?(r=65279===(n=r).charCodeAt(0)?n.slice(1):n,m=s.download?new d(s):new h(s)):!0===r.readable&&j(r.read)&&j(r.on)?m=new f(s):(t.File&&r instanceof File||r instanceof Object)&&(m=new c(s)),m.stream(r))},o.unparse=function(e,t){var r=!1,s=!0,n=",",i="\r\n",a='"',l=a+a,u=!1,d=null,c=!1;(function(){if("object"==typeof t){if("string"!=typeof t.delimiter||o.BAD_DELIMITERS.filter(function(e){return -1!==t.delimiter.indexOf(e)}).length||(n=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(r=t.quotes),("boolean"==typeof t.skipEmptyLines||"string"==typeof t.skipEmptyLines)&&(u=t.skipEmptyLines),"string"==typeof t.newline&&(i=t.newline),"string"==typeof t.quoteChar&&(a=t.quoteChar),"boolean"==typeof t.header&&(s=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw Error("Option columns is empty");d=t.columns}void 0!==t.escapeChar&&(l=t.escapeChar+a),("boolean"==typeof t.escapeFormulae||t.escapeFormulae instanceof RegExp)&&(c=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var h=RegExp(g(a),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return f(null,e,u);if("object"==typeof e[0])return f(d||Object.keys(e[0]),e,u)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||d),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),f(e.fields||[],e.data||[],u);throw Error("Unable to serialize unrecognized input");function f(e,t,r){var a="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var o=Array.isArray(e)&&e.length>0,l=!Array.isArray(t[0]);if(o&&s){for(var u=0;u<e.length;u++)u>0&&(a+=n),a+=p(e[u],u);t.length>0&&(a+=i)}for(var d=0;d<t.length;d++){var c=o?e.length:t[d].length,h=!1,f=o?0===Object.keys(t[d]).length:0===t[d].length;if(r&&!o&&(h="greedy"===r?""===t[d].join("").trim():1===t[d].length&&0===t[d][0].length),"greedy"===r&&o){for(var m=[],g=0;g<c;g++){var b=l?e[g]:g;m.push(t[d][b])}h=""===m.join("").trim()}if(!h){for(var _=0;_<c;_++){_>0&&!f&&(a+=n);var v=o&&l?e[_]:_;a+=p(t[d][v],_)}d<t.length-1&&(!r||c>0&&!f)&&(a+=i)}}return a}function p(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var s=!1;c&&"string"==typeof e&&c.test(e)&&(e="'"+e,s=!0);var i=e.toString().replace(h,l);return(s=s||!0===r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||function(e,t){for(var r=0;r<t.length;r++)if(e.indexOf(t[r])>-1)return!0;return!1}(i,o.BAD_DELIMITERS)||i.indexOf(n)>-1||" "===i.charAt(0)||" "===i.charAt(i.length-1))?a+i+a:i}},o.RECORD_SEP="\x1e",o.UNIT_SEP="\x1f",o.BYTE_ORDER_MARK="\uFEFF",o.BAD_DELIMITERS=["\r","\n",'"',o.BYTE_ORDER_MARK],o.WORKERS_SUPPORTED=!s&&!!t.Worker,o.NODE_STREAM_INPUT=1,o.LocalChunkSize=0xa00000,o.RemoteChunkSize=5242880,o.DefaultDelimiter=",",o.Parser=b,o.ParserHandle=m,o.NetworkStreamer=d,o.FileStreamer=c,o.StringStreamer=h,o.ReadableStreamStreamer=f,"undefined"==typeof PAPA_BROWSER_CONTEXT&&(o.DuplexStreamStreamer=p),t.jQuery){var l=t.jQuery;l.fn.parse=function(e){var r=e.config||{},s=[];return this.each(function(e){if(!("INPUT"===l(this).prop("tagName").toUpperCase()&&"file"===l(this).attr("type").toLowerCase()&&t.FileReader)||!this.files||0===this.files.length)return!0;for(var n=0;n<this.files.length;n++)s.push({file:this.files[n],inputElem:this,instanceConfig:l.extend({},r)})}),n(),this;function n(){if(0===s.length){j(e.complete)&&e.complete();return}var t=s[0];if(j(e.before)){var r,n,a,u,d=e.before(t.file,t.inputElem);if("object"==typeof d){if("abort"===d.action){r="AbortError",n=t.file,a=t.inputElem,u=d.reason,j(e.error)&&e.error({name:r},n,a,u);return}if("skip"===d.action){i();return}"object"==typeof d.config&&(t.instanceConfig=l.extend(t.instanceConfig,d.config))}else if("skip"===d){i();return}}var c=t.instanceConfig.complete;t.instanceConfig.complete=function(e){j(c)&&c(e,t.file,t.inputElem),i()},o.parse(t.file,t.instanceConfig)}function i(){s.splice(0,1),n()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(e){var t=y(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new m(t),this._handle.streamer=this,this._config=t}).call(this,e),this.parseChunk=function(e,r){if(this.isFirstChunk&&j(this._config.beforeFirstChunk)){var s=this._config.beforeFirstChunk(e);void 0!==s&&(e=s)}this.isFirstChunk=!1,this._halted=!1;var i=this._partialLine+e;this._partialLine="";var a=this._handle.parse(i,this._baseIndex,!this._finished);if(this._handle.paused()||this._handle.aborted()){this._halted=!0;return}var l=a.meta.cursor;this._finished||(this._partialLine=i.substring(l-this._baseIndex),this._baseIndex=l),a&&a.data&&(this._rowCount+=a.data.length);var u=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(n)t.postMessage({results:a,workerId:o.WORKER_ID,finished:u});else if(j(this._config.chunk)&&!r){if(this._config.chunk(a,this._handle),this._handle.paused()||this._handle.aborted()){this._halted=!0;return}a=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(a.data),this._completeResults.errors=this._completeResults.errors.concat(a.errors),this._completeResults.meta=a.meta),!this._completed&&u&&j(this._config.complete)&&(!a||!a.meta.aborted)&&(this._config.complete(this._completeResults,this._input),this._completed=!0),u||a&&a.meta.paused||this._nextChunk(),a},this._sendError=function(e){j(this._config.error)?this._config.error(e):n&&this._config.error&&t.postMessage({workerId:o.WORKER_ID,error:e,finished:!1})}}function d(e){var t;(e=e||{}).chunkSize||(e.chunkSize=o.RemoteChunkSize),u.call(this,e),s?this._nextChunk=function(){this._readChunk(),this._chunkLoaded()}:this._nextChunk=function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished){this._chunkLoaded();return}if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),s||(t.onload=k(this._chunkLoaded,this),t.onerror=k(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!s),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var r in e)t.setRequestHeader(r,e[r])}if(this._config.chunkSize){var n=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+n)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}s&&0===t.status&&this._chunkError()},this._chunkLoaded=function(){if(4===t.readyState){var e;if(t.status<200||t.status>=400){this._chunkError();return}this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(null===(e=t.getResponseHeader("Content-Range"))?-1:parseInt(e.substring(e.lastIndexOf("/")+1))),this.parseChunk(t.responseText)}},this._chunkError=function(e){var r=t.statusText||e;this._sendError(Error(r))}}function c(e){(e=e||{}).chunkSize||(e.chunkSize=o.LocalChunkSize),u.call(this,e);var t,r,s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,s?((t=new FileReader).onload=k(this._chunkLoaded,this),t.onerror=k(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var n=Math.min(this._start+this._config.chunkSize,this._input.size);e=r.call(e,this._start,n)}var i=t.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:i}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function h(e){var t;e=e||{},u.call(this,e),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,r=this._config.chunkSize;return r?(e=t.substring(0,r),t=t.substring(r)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function f(e){e=e||{},u.call(this,e);var t=[],r=!0,s=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){s&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=k(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=k(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=k(function(){this._streamCleanUp(),s=!0,this._streamData("")},this),this._streamCleanUp=k(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function p(e){var t=r(27910).Duplex,s=y(e),n=!0,i=!1,a=[],o=null;this._onCsvData=function(e){var t=e.data;o.push(t)||this._handle.paused()||this._handle.pause()},this._onCsvComplete=function(){o.push(null)},s.step=k(this._onCsvData,this),s.complete=k(this._onCsvComplete,this),u.call(this,s),this._nextChunk=function(){i&&1===a.length&&(this._finished=!0),a.length?a.shift()():n=!0},this._addToParseQueue=function(e,t){a.push(k(function(){if(this.parseChunk("string"==typeof e?e:e.toString(s.encoding)),j(t))return t()},this)),n&&(n=!1,this._nextChunk())},this._onRead=function(){this._handle.paused()&&this._handle.resume()},this._onWrite=function(e,t,r){this._addToParseQueue(e,r)},this._onWriteComplete=function(){i=!0,this._addToParseQueue("")},this.getStream=function(){return o},(o=new t({readableObjectMode:!0,decodeStrings:!1,read:k(this._onRead,this),write:k(this._onWrite,this)})).once("finish",k(this._onWriteComplete,this))}function m(e){var t,r,s,n=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,i=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,a=this,l=0,u=0,d=!1,c=!1,h=[],f={data:[],errors:[],meta:{}};if(j(e.step)){var p=e.step;e.step=function(t){if(f=t,v())_();else{if(_(),0===f.data.length)return;l+=t.data.length,e.preview&&l>e.preview?r.abort():(f.data=f.data[0],p(f,a))}}}function m(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function _(){return f&&s&&(x("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+o.DefaultDelimiter+"'"),s=!1),e.skipEmptyLines&&(f.data=f.data.filter(function(e){return!m(e)})),v()&&function(){if(f){if(Array.isArray(f.data[0])){for(var t=0;v()&&t<f.data.length;t++)f.data[t].forEach(r);f.data.splice(0,1)}else f.data.forEach(r)}function r(t,r){j(e.transformHeader)&&(t=e.transformHeader(t,r)),h.push(t)}}(),function(){if(!f||!e.header&&!e.dynamicTyping&&!e.transform)return f;function t(t,r){var s,a=e.header?{}:[];for(s=0;s<t.length;s++){var o=s,l=t[s];e.header&&(o=s>=h.length?"__parsed_extra":h[s]),e.transform&&(l=e.transform(l,o)),l=function(t,r){if(e.dynamicTypingFunction&&void 0===e.dynamicTyping[t]&&(e.dynamicTyping[t]=e.dynamicTypingFunction(t)),!0===(e.dynamicTyping[t]||e.dynamicTyping))return"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&(function(e){if(n.test(e)){var t=parseFloat(e);if(t>-0x20000000000000&&t<0x20000000000000)return!0}return!1}(r)?parseFloat(r):i.test(r)?new Date(r):""===r?null:r);return r}(o,l),"__parsed_extra"===o?(a[o]=a[o]||[],a[o].push(l)):a[o]=l}return e.header&&(s>h.length?x("FieldMismatch","TooManyFields","Too many fields: expected "+h.length+" fields but parsed "+s,u+r):s<h.length&&x("FieldMismatch","TooFewFields","Too few fields: expected "+h.length+" fields but parsed "+s,u+r)),a}var r=1;return!f.data.length||Array.isArray(f.data[0])?(f.data=f.data.map(t),r=f.data.length):f.data=t(f.data,0),e.header&&f.meta&&(f.meta.fields=h),u+=r,f}()}function v(){return e.header&&0===h.length}function x(e,t,r,s){var n={type:e,code:t,message:r};void 0!==s&&(n.row=s),f.errors.push(n)}this.parse=function(n,i,a){var l=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var r=RegExp(g(t)+"([^]*?)"+g(t),"gm"),s=(e=e.replace(r,"")).split("\r"),n=e.split("\n"),i=n.length>1&&n[0].length<s[0].length;if(1===s.length||i)return"\n";for(var a=0,o=0;o<s.length;o++)"\n"===s[o][0]&&a++;return a>=s.length/2?"\r\n":"\r"}(n,l)),s=!1,e.delimiter)j(e.delimiter)&&(e.delimiter=e.delimiter(n),f.meta.delimiter=e.delimiter);else{var u=function(t,r,s,n,i){var a,l,u,d;i=i||[",","	","|",";",o.RECORD_SEP,o.UNIT_SEP];for(var c=0;c<i.length;c++){var h=i[c],f=0,p=0,g=0;u=void 0;for(var _=new b({comments:n,delimiter:h,newline:r,preview:10}).parse(t),v=0;v<_.data.length;v++){if(s&&m(_.data[v])){g++;continue}var x=_.data[v].length;if(p+=x,void 0===u){u=x;continue}x>0&&(f+=Math.abs(x-u),u=x)}_.data.length>0&&(p/=_.data.length-g),(void 0===l||f<=l)&&(void 0===d||p>d)&&p>1.99&&(l=f,a=h,d=p)}return e.delimiter=a,{successful:!!a,bestDelimiter:a}}(n,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);u.successful?e.delimiter=u.bestDelimiter:(s=!0,e.delimiter=o.DefaultDelimiter),f.meta.delimiter=e.delimiter}var c=y(e);return e.preview&&e.header&&c.preview++,t=n,f=(r=new b(c)).parse(t,i,a),_(),d?{meta:{paused:!0}}:f||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,r.abort(),t=j(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){a.streamer._halted?(d=!1,a.streamer.parseChunk(t,!0)):setTimeout(a.resume,3)},this.aborted=function(){return c},this.abort=function(){c=!0,r.abort(),f.meta.aborted=!0,j(e.complete)&&e.complete(f),t=""}}function g(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function b(e){var t,r=(e=e||{}).delimiter,s=e.newline,n=e.comments,i=e.step,a=e.preview,l=e.fastMode,u=t=void 0===e.quoteChar||null===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(u=e.escapeChar),("string"!=typeof r||o.BAD_DELIMITERS.indexOf(r)>-1)&&(r=","),n===r)throw Error("Comment character same as delimiter");!0===n?n="#":("string"!=typeof n||o.BAD_DELIMITERS.indexOf(n)>-1)&&(n=!1),"\n"!==s&&"\r"!==s&&"\r\n"!==s&&(s="\n");var d=0,c=!1;this.parse=function(o,h,f){if("string"!=typeof o)throw Error("Input must be a string");var p=o.length,m=r.length,b=s.length,_=n.length,v=j(i);d=0;var x=[],y=[],k=[],C=0;if(!o)return K();if(e.header&&!h){var w=o.split(s)[0].split(r),R=[],E={},S=!1;for(var N in w){var O=w[N];j(e.transformHeader)&&(O=e.transformHeader(O,N));var A=O,T=E[O]||0;for(T>0&&(S=!0,A=O+"_"+T),E[O]=T+1;R.includes(A);)A=A+"_"+T;R.push(A)}if(S){var D=o.split(s);D[0]=R.join(r),o=D.join(s)}}if(l||!1!==l&&-1===o.indexOf(t)){for(var L=o.split(s),I=0;I<L.length;I++){if(k=L[I],d+=k.length,I!==L.length-1)d+=s.length;else if(f)break;if(!n||k.substring(0,_)!==n){if(v){if(x=[],W(k.split(r)),V(),c)return K()}else W(k.split(r));if(a&&I>=a)return x=x.slice(0,a),K(!0)}}return K()}for(var P=o.indexOf(r,d),F=o.indexOf(s,d),U=RegExp(g(u)+g(t),"g"),M=o.indexOf(t,d);;){if(o[d]===t){for(M=d,d++;;){if(-1===(M=o.indexOf(t,M+1)))return f||y.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:x.length,index:d}),B();if(M===p-1)return B(o.substring(d,M).replace(U,t));if(t===u&&o[M+1]===u){M++;continue}if(t===u||0===M||o[M-1]!==u){-1!==P&&P<M+1&&(P=o.indexOf(r,M+1)),-1!==F&&F<M+1&&(F=o.indexOf(s,M+1));var q=H(-1===F?P:Math.min(P,F));if(o.substr(M+1+q,m)===r){k.push(o.substring(d,M).replace(U,t)),d=M+1+q+m,o[M+1+q+m]!==t&&(M=o.indexOf(t,d)),P=o.indexOf(r,d),F=o.indexOf(s,d);break}var z=H(F);if(o.substring(M+1+z,M+1+z+b)===s){if(k.push(o.substring(d,M).replace(U,t)),$(M+1+z+b),P=o.indexOf(r,d),M=o.indexOf(t,d),v&&(V(),c))return K();if(a&&x.length>=a)return K(!0);break}y.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:x.length,index:d}),M++}}continue}if(n&&0===k.length&&o.substring(d,d+_)===n){if(-1===F)return K();d=F+b,F=o.indexOf(s,d),P=o.indexOf(r,d);continue}if(-1!==P&&(P<F||-1===F)){k.push(o.substring(d,P)),d=P+m,P=o.indexOf(r,d);continue}if(-1!==F){if(k.push(o.substring(d,F)),$(F+b),v&&(V(),c))return K();if(a&&x.length>=a)return K(!0);continue}break}return B();function W(e){x.push(e),C=d}function H(e){var t=0;if(-1!==e){var r=o.substring(M+1,e);r&&""===r.trim()&&(t=r.length)}return t}function B(e){return f||(void 0===e&&(e=o.substring(d)),k.push(e),d=p,W(k),v&&V()),K()}function $(e){d=e,W(k),k=[],F=o.indexOf(s,d)}function K(e){return{data:x,errors:y,meta:{delimiter:r,linebreak:s,aborted:c,truncated:!!e,cursor:C+(h||0)}}}function V(){i(K()),x=[],y=[]}},this.abort=function(){c=!0},this.getCharIndex=function(){return d}}function _(e){var t=e.data,r=i[t.workerId],s=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){s=!0,v(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:x,resume:x};if(j(r.userStep)){for(var a=0;a<t.results.data.length&&(r.userStep({data:t.results.data[a],errors:t.results.errors,meta:t.results.meta},n),!s);a++);delete t.results}else j(r.userChunk)&&(r.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!s&&v(t.workerId,t.results)}function v(e,t){var r=i[e];j(r.userComplete)&&r.userComplete(t),r.terminate(),delete i[e]}function x(){throw Error("Not implemented.")}function y(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=y(e[r]);return t}function k(e,t){return function(){e.apply(t,arguments)}}function j(e){return"function"==typeof e}return n&&(t.onmessage=function(e){var r=e.data;if(void 0===o.WORKER_ID&&r&&(o.WORKER_ID=r.workerId),"string"==typeof r.input)t.postMessage({workerId:o.WORKER_ID,results:o.parse(r.input,r.config),finished:!0});else if(t.File&&r.input instanceof File||r.input instanceof Object){var s=o.parse(r.input,r.config);s&&t.postMessage({workerId:o.WORKER_ID,results:s,finished:!0})}}),d.prototype=Object.create(u.prototype),d.prototype.constructor=d,c.prototype=Object.create(u.prototype),c.prototype.constructor=c,h.prototype=Object.create(h.prototype),h.prototype.constructor=h,f.prototype=Object.create(u.prototype),f.prototype.constructor=f,"undefined"==typeof PAPA_BROWSER_CONTEXT&&(p.prototype=Object.create(u.prototype),p.prototype.constructor=p),o})?s.apply(t,n):s)&&(e.exports=i)},70018:(e,t,r)=>{"use strict";r.d(t,{default:()=>p});var s=r(45512),n=r(58009),i=r(61038),a=r(69576),o=r(21030),l=r(43711),u=r.n(l),d=r(26248);let c=(0,d.createServerReference)("40cc87c780b504b12be444c7b52b79777878f92789",d.callServer,void 0,d.findSourceMapURL,"addHrBulk");var h=r(91542);let f={container:"flex flex-col items-center justify-center space-y-4 h-full",hiddenInput:"hidden",customButton:"bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded cursor-pointer transition-colors",label:"text-sm text-gray-600 mt-2"},p=function(){let[e,t]=(0,n.useState)(null),[r,l]=(0,n.useState)(!1),[d,p]=(0,n.useState)(null),[m,g]=(0,n.useState)(null),[b,_]=(0,n.useState)({total:0,success:0,failed:0}),[v,x]=(0,n.useState)([]),[y,k]=(0,n.useState)([]),j=t=>{let r=t||e;l(!0),p(null),g(null),k([]),u().parse(r,{header:!0,skipEmptyLines:!0,transformHeader:e=>e.replace("*","").trim(),complete:e=>{if(e.errors.length>0){p(`CSV parsing errors check csv format: ${e.errors.map(e=>e.message).join(", ")}`),l(!1);return}console.log("Raw parsed data:",e.data);let t=[],r={total:e.data.length,success:0,failed:0},s=[];for(let n of e.data)try{if(!Object.values(n).some(e=>e)){console.log("Skipping empty row");continue}let e={};Object.entries(n).forEach(([t,r])=>{e[t.replace(/\s+/g,"").toLowerCase()]=r?.toString().trim()||""});let i=["hr_name","phone_number","company"].filter(t=>!e[t]),a=e.phone_number.replace(/\D/g,"");if(10!==a.length){let t=`Invalid phone number for HR: ${e.hr_name||"Unknown"}. Must be exactly 10 digits.`;s.push(t),r.failed++;continue}if(i.length>0){let t=`Missing mandatory fields: ${i.join(", ")} for HR: ${e.hr_name||"Unknown"}`;s.push(t),r.failed++;continue}let o={hr_name:e.hr_name.trim(),phone_number:e.phone_number.toString().trim(),company:e.company.trim(),email:(e.email||"").trim()};t.push(o),r.success++}catch(t){let e=`Error processing row for HR: ${n.hr_name||"Unknown"} - ${t.message}`;console.error(e),s.push(e),r.failed++}x(t),_(r),k(s),l(!1)},error:e=>{p("Error parsing CSV file: "+e.message),l(!1)}})},C=async()=>{if(console.log(v),l(!0),p(null),g(null),0===v.length){p("No records to upload"),l(!1);return}let e=await c(v);g(e),console.log(e),l(!1)},w=e=>{let t=new Blob([u().unparse({fields:Object.keys(e[0]),data:e})],{type:"text/csv;charset=utf-8;"}),r=document.createElement("a");r.href=URL.createObjectURL(t),r.download="hr_contacts_duplicates.csv",r.click(),h.oR.success("Duplicates downloaded successfully")};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(a.Zp,{className:" shadow-blue-100 rounded-xl max-w-[26.5rem] mx-auto w-full overflow-hidden",children:[(0,s.jsx)(a.aR,{className:"bg-blue-100 rounded-t-lg",children:(0,s.jsx)(a.ZB,{className:"text-blue-800 text-center text-3xl font-bold",children:"Upload HR Records"})}),(0,s.jsx)(a.Wu,{className:"bg-white p-6 rounded-b-xl",children:(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsx)("div",{className:"border-2 border-dashed rounded-lg p-12 h-48",children:(0,s.jsx)("div",{className:f.container,children:(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("input",{type:"file",accept:".csv",onChange:e=>{let r=e.target.files[0];if(r?.type!=="text/csv"){p("Please upload a valid CSV file");return}t(r),p(null),j(r)},className:f.hiddenInput,id:"file-upload"}),(0,s.jsx)("label",{htmlFor:"file-upload",className:f.customButton,children:"Choose CSV File"}),e&&(0,s.jsxs)("div",{className:"flex items-center gap-2 justify-center mt-2",children:[(0,s.jsx)("p",{className:f.label,children:e.name}),(0,s.jsx)("button",{onClick:()=>{let e=document.getElementById("file-upload");e&&(e.value=""),t(null),p(null),g(null),x([]),k([]),_({total:0,success:0,failed:0})},className:"text-gray-500 hover:text-gray-700 flex items-center",title:"Clear file",children:"✕"})]})]})})}),(0,s.jsxs)("div",{className:"flex flex-col space-y-4",children:[(0,s.jsx)(i.$,{onClick:()=>{let e=new Blob([u().unparse({fields:["hr_name*","phone_number*","company*","email"],data:[{"hr_name*":"HR Name","phone_number*":"1234567890","company*":"Company Name",email:""}]})],{type:"text/csv;charset=utf-8;"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="hr_contacts_template.csv",t.click(),h.oR.success("CSV template downloaded successfully")},className:"bg-green-600 hover:bg-green-700",disabled:e,children:"Download CSV Template"}),(0,s.jsx)(i.$,{onClick:C,disabled:!e||r||y.length>0,className:"bg-blue-800 hover:bg-blue-900",children:r?"Uploading...":"Upload CSV"})]}),y.length>0&&(0,s.jsxs)(o.Fc,{variant:"destructive",className:"bg-red-100 border-red-400 text-red-700",children:[(0,s.jsx)(o.XL,{children:"Validation Errors"}),(0,s.jsx)(o.TN,{children:(0,s.jsx)("ul",{className:"list-disc pl-4",children:y.map((e,t)=>(0,s.jsx)("li",{children:e},t))})})]}),d&&(0,s.jsxs)(o.Fc,{variant:"destructive",className:"bg-red-100 border-red-400 text-red-700",children:[(0,s.jsx)(o.XL,{children:"Error"}),(0,s.jsx)(o.TN,{children:d})]}),m?.success&&(0,s.jsxs)(o.Fc,{className:"bg-green-100 border-green-400 text-green-700",children:[(0,s.jsx)(o.XL,{children:"Upload Complete"}),(0,s.jsx)(o.TN,{children:m.message})]}),m?.errors&&m.errors.length>0&&(0,s.jsxs)(o.Fc,{variant:"destructive",className:"bg-red-100 border-red-400 text-red-700",children:[(0,s.jsx)(o.XL,{children:"Upload Errors"}),(0,s.jsx)(o.TN,{children:m.errors.join(", ")})]}),m?.duplicates&&m.duplicates.length>0&&(0,s.jsxs)(i.$,{onClick:()=>w(m.duplicates),className:"bg-yellow-500 hover:bg-yellow-600 mt-2 w-full",children:["Download ",m.duplicates.length," Duplicate Records"]})]})})]})})}},72505:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var s=r(45512),n=r(30722),i=r(11169),a=r(61038),o=r(58009),l=r(91542);let u=function(){let e=(0,i.rd)(),[t,r]=(0,o.useState)(null),[u,d]=(0,o.useState)(!1),[c,h]=(0,o.useState)(""),[f,p]=(0,o.useState)(null),m=()=>{document.cookie="session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",localStorage.clear(),l.oR.error("Logged out :("),e.push("/login")},g=e=>`text-blue-800 cursor-pointer font-bold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 ${c===e?"after:w-full":"after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out hover:text-blue-600"}`;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("nav",{className:"fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-40",children:(0,s.jsxs)("div",{className:"max-w-screen px-4 mx-auto flex justify-between items-center h-16 relative",children:[(0,s.jsxs)("div",{className:"absolute left-4 flex items-center gap-2 cursor-pointer",onClick:()=>e.push("/"),children:[(0,s.jsx)("div",{className:"h-[6rem] w-[6rem]",children:(0,s.jsx)("img",{src:"/forese-logo-small.png",alt:"Forese Logo",className:"h-[6rem] w-auto"})}),(0,s.jsx)("h1",{className:"text-blue-800 text-2xl font-bold",children:f?"Mwuahhh :3":"HR Database"})]}),(0,s.jsx)("button",{onClick:()=>d(!u),className:"md:hidden ml-auto p-2",children:(0,s.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u?(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),("admin"===t||"incharge"===t||"volunteer"===t)&&(0,s.jsxs)("div",{className:"hidden md:flex gap-6 mx-auto items-center mt-1",children:[(0,s.jsx)("span",{onClick:()=>e.push("/"),className:g("/"),children:"Home"}),"admin"===t&&(0,s.jsx)("span",{onClick:()=>e.push("/add-user"),className:g("/add-user"),children:"Add User"}),(0,s.jsx)("span",{onClick:()=>e.push("/stats"),className:g("/stats"),children:"Stats"}),(0,s.jsx)("span",{onClick:()=>e.push("/add-hr"),className:g("/add-hr"),children:"Add HR"}),(0,s.jsx)("span",{onClick:()=>e.push("/hr-pitch"),className:g("/hr-pitch"),children:"HR Pitch"}),(0,s.jsx)("span",{onClick:()=>e.push("/csv-upload"),className:g("/csv-upload"),children:"CSV Upload"})]}),(0,s.jsx)("div",{className:"hidden md:flex gap-2 absolute right-4",children:(0,s.jsxs)(a.$,{onClick:m,className:"bg-white hover:bg-blue-100 text-blue-800 border ",children:[(0,s.jsx)(n.A,{className:"mr-2 h-4 w-4"}),"Logout"]})}),(0,s.jsxs)("div",{className:`${u?"flex":"hidden"} md:hidden absolute top-16 left-0 right-0 flex-col bg-white border-b border-gray-200 shadow-sm`,children:[("admin"===t||"incharge"===t||"volunteer"===t)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{onClick:()=>{e.push("/"),d(!1)},className:`p-4 cursor-pointer font-bold ${"/"===c?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"Home"}),"admin"===t&&(0,s.jsx)("span",{onClick:()=>{e.push("/add-user"),d(!1)},className:`p-4 cursor-pointer font-bold ${"/add-user"===c?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"Add User"}),("admin"===t||"incharge"===t)&&(0,s.jsx)("span",{onClick:()=>{e.push("/stats"),d(!1)},className:`p-4 cursor-pointer font-bold ${"/stats"===c?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"Stats"}),(0,s.jsx)("span",{onClick:()=>{e.push("/add-hr"),d(!1)},className:`p-4 cursor-pointer font-bold ${"/add-hr"===c?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"Add HR"}),(0,s.jsx)("span",{onClick:()=>{e.push("/hr-pitch"),d(!1)},className:`p-4 cursor-pointer font-bold ${"/hr-pitch"===c?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"HR Pitch"}),(0,s.jsx)("span",{onClick:()=>{e.push("/csv-upload"),d(!1)},className:`p-4 cursor-pointer font-bold ${"/csv-upload"===c?"bg-blue-50":"hover:bg-blue-50"} text-blue-800`,children:"CSV Upload"})]}),(0,s.jsxs)(a.$,{onClick:m,className:"m-4 bg-white hover:bg-blue-100 text-blue-800 border",children:[(0,s.jsx)(n.A,{className:"mr-2 h-4 w-4"}),"Logout"]})]})]})})})}},21030:(e,t,r)=>{"use strict";r.d(t,{Fc:()=>l,TN:()=>d,XL:()=>u});var s=r(45512),n=r(58009),i=r(32101),a=r(86645);let o=(0,i.F)("relative w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-neutral-950 [&>svg~*]:pl-7 dark:border-neutral-800 dark:[&>svg]:text-neutral-50",{variants:{variant:{default:"bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50",destructive:"border-red-500/50 text-red-500 dark:border-red-500 [&>svg]:text-red-500 dark:border-red-900/50 dark:text-red-900 dark:dark:border-red-900 dark:[&>svg]:text-red-900"}},defaultVariants:{variant:"default"}}),l=n.forwardRef(({className:e,variant:t,...r},n)=>(0,s.jsx)("div",{ref:n,role:"alert",className:(0,a.cn)(o({variant:t}),e),...r}));l.displayName="Alert";let u=n.forwardRef(({className:e,...t},r)=>(0,s.jsx)("h5",{ref:r,className:(0,a.cn)("mb-1 font-medium leading-none tracking-tight",e),...t}));u.displayName="AlertTitle";let d=n.forwardRef(({className:e,...t},r)=>(0,s.jsx)("div",{ref:r,className:(0,a.cn)("text-sm [&_p]:leading-relaxed",e),...t}));d.displayName="AlertDescription"},2828:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(62740),n=r(75061),i=r(86213);let a=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.default,{}),(0,s.jsx)("div",{className:"flex justify-center items-center min-h-screen py-20",children:(0,s.jsx)(i.default,{})})]})}},86213:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/jerry/projects/WebDev/forese/hrdb/src/components/csv-upload.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/jerry/projects/WebDev/forese/hrdb/src/components/csv-upload.jsx","default")},75061:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/jerry/projects/WebDev/forese/hrdb/src/components/navbar.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/jerry/projects/WebDev/forese/hrdb/src/components/navbar.jsx","default")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[740,264,179,229],()=>r(87813));module.exports=s})();