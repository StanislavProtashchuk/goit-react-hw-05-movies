"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[277],{8076:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var s=a(8152),i=a(6871),c=a(2791),n=a(4635),r={list:"Cast_list__GlWio",item:"Cast_item__a0CDL",image:"Cast_image__mOsuM"},l=a(184);function u(){var t=(0,c.useState)(),e=(0,s.Z)(t,2),a=e[0],u=e[1],m=(0,i.UO)().filmId;return(0,c.useEffect)((function(){(0,n.cI)(m).then((function(t){u((function(e){return t.data.cast}))})).catch((function(t){return t.message}))}),[m]),(0,l.jsx)("ul",{className:r.list,children:a&&a.map((function(t){var e=t.id,a=t.profile_path,s=t.name,i=t.character,c=null===a?"no image":"".concat("https://image.tmdb.org/t/p/w300","/").concat(a);return(0,l.jsxs)("li",{className:r.item,children:[(0,l.jsx)("img",{src:c,alt:s,className:r.image}),(0,l.jsx)("h4",{className:r.title,children:s}),(0,l.jsx)("p",{className:r.text,children:i})]},e)}))})}}}]);
//# sourceMappingURL=cast.5a7ed7ec.chunk.js.map