"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[765],{765:function(t,n,r){r.r(n);var e=r(439),a=r(791),c=r(687),u=r(126),s=r(184);n.default=function(){var t=(0,a.useState)([]),n=(0,e.Z)(t,2),r=n[0],i=n[1];return(0,a.useEffect)((function(){(0,c.Df)().then(i)}),[]),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:"Tending this week"}),(0,s.jsx)(u.Z,{movies:r})]})}},687:function(t,n,r){r.d(n,{Df:function(){return i},Pt:function(){return o},TP:function(){return f},_v:function(){return v},zv:function(){return p}});var e=r(861),a=r(757),c=r.n(a),u=r(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=new URLSearchParams({api_key:"3fbc168df42f34d24dcb5c096192698e",language:"en-US"}),i=function(){var t=(0,e.Z)(c().mark((function t(){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/all/week?".concat(s));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?".concat(s,"&query=").concat(n));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"?").concat(s));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/credits?").concat(s));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.cast);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/reviews?").concat(s));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},126:function(t,n,r){r(791);var e=r(689),a=r(87),c=r(184);n.Z=function(t){var n=t.movies,r=(0,e.TH)();return(0,c.jsx)("div",{children:(0,c.jsx)("ul",{children:n.map((function(t){var n=t.id,e=t.title,u=t.original_name,s=t.poster_path;return(0,c.jsx)("li",{children:(0,c.jsxs)(a.rU,{to:"/movies/".concat(n),state:{from:r},children:[s?(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(s),alt:""}):(0,c.jsx)("img",{src:"",alt:""}),(0,c.jsx)("p",{children:null!==e&&void 0!==e?e:u})]})},n)}))})})}}}]);
//# sourceMappingURL=765.bb75bf29.chunk.js.map