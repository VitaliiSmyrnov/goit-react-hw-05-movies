"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{4387:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r,a=t(5861),u=t(9439),s=t(7757),c=t.n(s),i=t(7689),o=t(2791),p=t(9169),f=t(1933),d=t(168),l=t(6444).ZP.ul(r||(r=(0,d.Z)(["\n  margin-top: 10px;\n  padding-left: 20px;\n\n  p {\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n"]))),v=t(7574),h=t(184),g=function(){var e=(0,i.UO)().movieId,n=(0,o.useState)(null),t=(0,u.Z)(n,2),r=t[0],s=t[1],d=(0,o.useState)("idle"),g=(0,u.Z)(d,2),x=g[0],m=g[1],b=(0,o.useState)(null),w=(0,u.Z)(b,2),Z=w[0],k=w[1];return(0,o.useEffect)((function(){var n=new AbortController,t=n.signal;return(0,a.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m("pending"),n.prev=1,n.next=4,(0,f.Hx)(Number(e),t);case 4:r=n.sent,s(r),m("resolved"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),"CanceledError"!==n.t0.name&&(k("Oops, something went wrong. Please, reload the subpage to try again."),m("rejected"));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))(),function(){n.abort()}}),[e]),(0,h.jsxs)(l,{children:["pending"===x&&(0,h.jsx)("p",{children:"Loading subpage..."}),null===r||void 0===r?void 0:r.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,h.jsxs)("li",{children:[(0,h.jsx)("p",{children:(0,h.jsxs)("b",{children:["Author: ",t]})}),(0,h.jsx)("p",{children:r})]},n)})),"resolved"===x&&0===r.length&&(0,h.jsx)("p",{children:"We don't have any reviews for this movie"}),"rejected"===x&&(0,h.jsx)(p.v0,{text:Z,image:v})]})}},1933:function(e,n,t){t.d(n,{Hx:function(){return f},WK:function(){return i},Y5:function(){return o},mX:function(){return c},uV:function(){return p}});var r=t(5861),a=t(7757),u=t.n(a),s=t(1243);s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.params={api_key:"5cbb87aef27f9b4333ebebc944ad48bd",language:"en-US"};var c=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/day",{signal:n});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(n,t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie?query=".concat(n),{signal:t});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n,t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n),{signal:t});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n,t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"/credits"),{signal:t});case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n,t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"/reviews"),{signal:t});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},7574:function(e,n,t){e.exports=t.p+"static/media/something-wrong-min.2cbefe336617ecd26ea2.png"}}]);
//# sourceMappingURL=387.483340ee.chunk.js.map