"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[455],{1455:function(e,n,t){t.r(n),t.d(n,{MovieDetails:function(){return g},default:function(){return m}});var r,a=t(5861),s=t(9439),u=t(7757),i=t.n(u),c=t(1087),o=t(7689),p=t(2791),d=t(1933),l=t(9169),f=t(168),v=t(6444).ZP.main(r||(r=(0,f.Z)(["\n  padding-bottom: 10px;\n  border-bottom: 1px solid #b9b9b9;\n\n  ul {\n    padding-top: 10px;\n    padding-left: 20px;\n  }\n  li {\n    padding-top: 5px;\n  }\n"]))),h=t(7574),x=t(184),g=function(){var e,n,t=(0,o.UO)().movieId,r=(0,p.useState)(null),u=(0,s.Z)(r,2),f=u[0],g=u[1],m=(0,p.useState)("idle"),b=(0,s.Z)(m,2),w=b[0],Z=b[1],j=(0,p.useState)(null),k=(0,s.Z)(j,2),y=k[0],_=k[1],S=(0,o.TH)(),C=(0,p.useState)(null!==(e=null===(n=S.state)||void 0===n?void 0:n.from)&&void 0!==e?e:{pathname:"/"}),U=(0,s.Z)(C,1)[0];return(0,p.useEffect)((function(){var e=new AbortController,n=e.signal;return(0,a.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z("pending"),e.prev=1,e.next=4,(0,d.Y5)(Number(t),n);case 4:r=e.sent,g(r),Z("resolved"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),"CanceledError"!==e.t0.name&&(_("Oops, something went wrong. Please, reload the page to try again."),Z("rejected"));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))(),function(){e.abort()}}),[t]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(v,{children:[(0,x.jsx)(l.hb,{to:U,children:"Go Back"}),"pending"===w&&(0,x.jsx)(l.aN,{}),"resolved"===w&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(l.LA,{movie:f}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsx)(c.rU,{to:"cast",children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(c.rU,{to:"reviews",children:"Reviews"})})]})]}),"rejected"===w&&(0,x.jsx)(l.v0,{text:y,image:h})]}),(0,x.jsx)(p.Suspense,{children:(0,x.jsx)(o.j3,{})})]})},m=g},1933:function(e,n,t){t.d(n,{Hx:function(){return d},WK:function(){return c},Y5:function(){return o},mX:function(){return i},uV:function(){return p}});var r=t(5861),a=t(7757),s=t.n(a),u=t(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.params={api_key:"5cbb87aef27f9b4333ebebc944ad48bd",language:"en-US"};var i=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/trending/movie/day",{signal:n});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(s().mark((function e(n,t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/search/movie?query=".concat(n),{signal:t});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(n,t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(n),{signal:t});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(n,t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(n,"/credits"),{signal:t});case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(n,t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(n,"/reviews"),{signal:t});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},7574:function(e,n,t){e.exports=t.p+"static/media/something-wrong-min.2cbefe336617ecd26ea2.png"}}]);
//# sourceMappingURL=455.a7b3ae62.chunk.js.map