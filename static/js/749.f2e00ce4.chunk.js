"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[749],{749:function(e,t,n){n.r(t);var r=n(5861),a=n(9439),u=n(7757),s=n.n(u),c=n(2791),i=n(9169),o=n(1933),f=n(7574),p=n(184);t.default=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],d=(0,c.useState)("idle"),v=(0,a.Z)(d,2),l=v[0],g=v[1],h=(0,c.useState)(null),m=(0,a.Z)(h,2),w=m[0],x=m[1];return(0,c.useEffect)((function(){var e=new AbortController,t=e.signal;return(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g("pending"),e.prev=1,e.next=4,(0,o.mX)(t);case 4:n=e.sent,u(n),g("resolved"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),"CanceledError"!==e.t0.name&&(x("Oops, something went wrong. Please, reload the page to try again."),g("rejected"));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))(),function(){e.abort()}}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{children:"Trending Today"}),"pending"===l&&(0,p.jsx)(i.aN,{}),"resolved"===l&&(0,p.jsx)(i.eW,{items:n}),"rejected"===l&&(0,p.jsx)(i.v0,{text:w,image:f})]})}},1933:function(e,t,n){n.d(t,{Hx:function(){return p},WK:function(){return i},Y5:function(){return o},mX:function(){return c},uV:function(){return f}});var r=n(5861),a=n(7757),u=n.n(a),s=n(1243);s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.params={api_key:"5cbb87aef27f9b4333ebebc944ad48bd",language:"en-US"};var c=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/day",{signal:t});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(t,n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie?query=".concat(t),{signal:n});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t,n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t),{signal:n});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t,n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/credits"),{signal:n});case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t,n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/reviews"),{signal:n});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},7574:function(e,t,n){e.exports=n.p+"static/media/something-wrong-min.2cbefe336617ecd26ea2.png"}}]);
//# sourceMappingURL=749.f2e00ce4.chunk.js.map