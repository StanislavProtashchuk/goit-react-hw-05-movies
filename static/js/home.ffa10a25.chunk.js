"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[177],{433:function(t,n,c){c.r(n),c.d(n,{default:function(){return d}});var e=c(8152),r=c(2791),a=c(3504),i=c(6871),o=c(4635),u="Home_cardLinkList__wCNPO",s="Home_cardLink__HVjLq",f=c(184);function d(){var t=(0,i.TH)(),n=(0,r.useState)([]),c=(0,e.Z)(n,2),d=c[0],m=c[1];return(0,r.useEffect)((function(){(0,o.a2)().then((function(t){m((function(n){return t.data.results}))})).catch((function(t){return t.message}))}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{children:"Trending today"}),(0,f.jsx)("ul",{className:u,children:d.map((function(n){return(0,f.jsx)("li",{className:s,children:(0,f.jsxs)(a.rU,{to:"movies/".concat(n.id),state:{from:t},className:s,children:[(0,f.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w300").concat(n.poster_path),alt:""}),n.original_title]})},n.id)}))})]})}},4635:function(t,n,c){c.d(n,{XK:function(){return u},a2:function(){return o},cI:function(){return f},kh:function(){return d},ts:function(){return s}});var e=c(4569),r=c.n(e),a="https://api.themoviedb.org/3/",i="084ca305e7a4e4bb3dbbc7b67e975385";function o(){return r().get("".concat(a,"trending/movie/day?api_key=").concat(i))}function u(t){return r()("".concat(a,"search/movie?api_key=").concat(i,"&query=").concat(t))}function s(t){return r().get("".concat(a,"movie/").concat(t,"?api_key=").concat(i))}function f(t){return r().get("".concat(a,"/movie/").concat(t,"/credits?api_key=").concat(i))}function d(t){return r().get("".concat(a,"/movie/").concat(t,"/reviews?api_key=").concat(i))}}}]);
//# sourceMappingURL=home.ffa10a25.chunk.js.map