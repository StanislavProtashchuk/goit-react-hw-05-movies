"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[535],{5121:function(e,t,i){i.r(t),i.d(t,{default:function(){return N}});var n=i(8152),a="MovieDetailsView_button__cgngR",s="MovieDetailsView_filmCard__o2fjX",c="MovieDetailsView_filmInfo__2lLz3",r="MovieDetailsView_title__veeee",o="MovieDetailsView_subtitle__kSr8B",l="MovieDetailsView_text__vG-wn",u="MovieDetailsView_addInfo__3bJSZ MovieDetailsView_filmCard__o2fjX",d="MovieDetailsView_list__KdqCU",_="MovieDetailsView_item__xtr9T",v="MovieDetailsView_link__AJu18",h=i(2791),m=i(3504),f=i(6871),j=i(4635),x=i(2510),p=i(184),w=(0,h.lazy)((function(){return i.e(277).then(i.bind(i,8076))})),g=(0,h.lazy)((function(){return i.e(912).then(i.bind(i,2168))}));function N(){var e,t,i,N=(0,h.useState)(),b=(0,n.Z)(N,2),k=b[0],D=b[1],M=(0,f.UO)().filmId,V=(0,f.TH)();(0,h.useEffect)((function(){(0,j.ts)(M).then((function(e){D((function(t){return e.data}))})).catch((function(e){return e.message}))}),[M]);var y={data:V.state.data,from:{path:V.pathname}};return(0,p.jsx)(p.Fragment,{children:k&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(m.rU,{to:null!==(e=null===V||void 0===V||null===(t=V.state)||void 0===t||null===(i=t.from)||void 0===i?void 0:i.path)&&void 0!==e?e:"/",className:a,state:y,children:"Go Back"}),(0,p.jsxs)("div",{className:s,children:[(0,p.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w300").concat(k.poster_path),alt:k.original_title}),(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)("h2",{className:r,children:k.original_title}),(0,p.jsxs)("p",{className:l,children:["User Score: ",10*k.vote_average,"%"]}),(0,p.jsx)("h3",{className:o,children:"Overview"}),(0,p.jsx)("p",{className:l,children:k.overview}),(0,p.jsx)("h3",{className:o,children:"Genres"}),(0,p.jsx)("p",{className:l,children:k.genres.map((function(e){var t=e.id,i=e.name;return(0,p.jsxs)("span",{children:[i," "]},t)}))})]})]}),(0,p.jsxs)("div",{className:u,children:[(0,p.jsx)("h3",{className:o,children:"Additional Information"}),(0,p.jsxs)("ul",{className:d,children:[(0,p.jsx)("li",{className:_,children:(0,p.jsx)(m.rU,{to:"/movies/".concat(M,"/cast"),className:v,state:V.state,children:"Cast"})}),(0,p.jsx)("li",{className:_,children:(0,p.jsx)(m.rU,{to:"/movies/".concat(M,"/reviews"),className:v,state:V.state,children:"Reviews"})})]})]}),(0,p.jsx)(h.Suspense,{fallback:(0,p.jsx)(x.a,{}),children:(0,p.jsxs)(f.Z5,{children:[(0,p.jsx)(f.AW,{path:"cast",element:(0,p.jsx)(w,{})}),(0,p.jsx)(f.AW,{path:"reviews",element:(0,p.jsx)(g,{})})]})})]})})}},4635:function(e,t,i){i.d(t,{XK:function(){return o},a2:function(){return r},cI:function(){return u},kh:function(){return d},ts:function(){return l}});var n=i(4569),a=i.n(n),s="https://api.themoviedb.org/3/",c="084ca305e7a4e4bb3dbbc7b67e975385";function r(){return a().get("".concat(s,"trending/movie/day?api_key=").concat(c))}function o(e){return a()("".concat(s,"search/movie?api_key=").concat(c,"&query=").concat(e))}function l(e){return a().get("".concat(s,"movie/").concat(e,"?api_key=").concat(c))}function u(e){return a().get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(c))}function d(e){return a().get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(c))}}}]);
//# sourceMappingURL=movie-details-wiew.ffb0e4a3.chunk.js.map