"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{687:function(n,t,e){e.d(t,{Df:function(){return i},Pt:function(){return o},TP:function(){return f},_v:function(){return l},zv:function(){return p}});var r=e(861),a=e(757),u=e.n(a),c=e(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=new URLSearchParams({api_key:"3fbc168df42f34d24dcb5c096192698e",language:"en-US"}),i=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/all/week?".concat(s));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?".concat(s,"&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?").concat(s));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits?").concat(s));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews?").concat(s));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},387:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,a,u,c=e(439),s=e(687),i=e(791),o=e(689),f=e(168),p=e(867),l=p.ZP.ul(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  list-style: none;\n"]))),d=p.ZP.p(a||(a=(0,f.Z)(["\n  margin-bottom: 8px;\n  font-size: 22px;\n"]))),v=p.ZP.p(u||(u=(0,f.Z)(["\n  font-size: 16px;\n  line-height: 1.68;\n"]))),h=e(184),x=function(){var n=(0,i.useState)(null),t=(0,c.Z)(n,2),e=t[0],r=t[1],a=(0,o.UO)().movieId;if((0,i.useEffect)((function(){(0,s._v)(a).then(r)}),[a]),e)return(0,h.jsx)("div",{children:(0,h.jsxs)(l,{children:[0===e.length&&(0,h.jsx)("div",{children:"Not found"}),e.map((function(n){var t=n.id,e=n.content,r=n.author;return(0,h.jsxs)("li",{children:[(0,h.jsxs)(d,{children:["Author: ",r]}),(0,h.jsx)(v,{children:e})]},t)}))]})})}}}]);
//# sourceMappingURL=387.9eee34e4.chunk.js.map