!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=352)}({10:function(t,e,n){var r=n(8);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},11:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},12:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},15:function(t,e){var n=t.exports={version:"2.6.1"};"number"==typeof __e&&(__e=n)},16:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},17:function(t,e,n){var r=n(8),o=n(4).document,a=r(o)&&r(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},18:function(t,e){t.exports={}},19:function(t,e,n){var r=n(44),o=n(30);t.exports=function(t){return r(o(t))}},20:function(t,e,n){var r=n(4),o=n(5),a=n(11),i=n(16)("src"),s=Function.toString,c=(""+s).split("toString");n(15).inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,n,s){var l="function"==typeof n;l&&(a(n,"name")||o(n,"name",e)),t[e]!==n&&(l&&(a(n,i)||o(n,i,t[e]?""+t[e]:c.join(String(e)))),t===r?t[e]=n:s?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[i]||s.call(this)})},21:function(t,e,n){var r=n(25)("keys"),o=n(16);t.exports=function(t){return r[t]||(r[t]=o(t))}},22:function(t,e,n){var r=n(52),o=n(32);t.exports=Object.keys||function(t){return r(t,o)}},25:function(t,e,n){var r=n(15),o=n(4),a=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(26)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},26:function(t,e){t.exports=!1},27:function(t,e,n){t.exports=!n(6)&&!n(12)(function(){return 7!=Object.defineProperty(n(17)("div"),"a",{get:function(){return 7}}).a})},28:function(t,e,n){var r=n(8);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},29:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},30:function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},31:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},32:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},33:function(t,e,n){var r=n(9).f,o=n(11),a=n(7)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,a)&&r(t,a,{configurable:!0,value:e})}},34:function(t,e,n){"use strict";var r=n(42),o=n(43),a=n(18),i=n(19);t.exports=n(46)(Array,"Array",function(t,e){this._t=i(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),a.Arguments=a.Array,r("keys"),r("values"),r("entries")},352:function(t,e,n){t.exports=n(353)},353:function(t,e,n){"use strict";n.r(e);n(37),n(34);!function(t){t.fn.tkVectorWorldMapGDP=function(){if(this.length){var t=window.jVectorMapGdpData;void 0!==t&&this.vectorMap({map:"world_mill_en",zoomOnScroll:!1,backgroundColor:"#fff",series:{regions:[{values:t,scale:[settings.colors.primary[500],settings.colors.success[500]],normalizeFunction:"polynomial"}]},onLabelShow:function(e,n,r){n.html(n.html()+" (GDP - "+t[r]+")")}})}},t.fn.tkVectorWorldMapMarkers=function(){this.length&&this.vectorMap({map:"world_mill_en",regionStyle:{initial:{fill:settings.colors.gray[300]}},zoomOnScroll:!1,normalizeFunction:"polynomial",hoverOpacity:.7,hoverColor:!1,markerStyle:{initial:{fill:settings.colors.primary[500],stroke:"#fff"}},backgroundColor:"#fff",markers:[{latLng:[41.9,12.45],name:"Vatican City"},{latLng:[43.73,7.41],name:"Monaco"},{latLng:[-.52,166.93],name:"Nauru"},{latLng:[-8.51,179.21],name:"Tuvalu"},{latLng:[43.93,12.46],name:"San Marino"},{latLng:[47.14,9.52],name:"Liechtenstein"},{latLng:[7.11,171.06],name:"Marshall Islands"},{latLng:[17.3,-62.73],name:"Saint Kitts and Nevis"},{latLng:[3.2,73.22],name:"Maldives"},{latLng:[35.88,14.5],name:"Malta"},{latLng:[12.05,-61.75],name:"Grenada"},{latLng:[13.16,-61.23],name:"Saint Vincent and the Grenadines"},{latLng:[13.16,-59.55],name:"Barbados"},{latLng:[17.11,-61.85],name:"Antigua and Barbuda"},{latLng:[-4.61,55.45],name:"Seychelles"},{latLng:[7.35,134.46],name:"Palau"},{latLng:[42.5,1.51],name:"Andorra"},{latLng:[14.01,-60.98],name:"Saint Lucia"},{latLng:[6.91,158.18],name:"Federated States of Micronesia"},{latLng:[1.3,103.8],name:"Singapore"},{latLng:[1.46,173.03],name:"Kiribati"},{latLng:[-21.13,-175.2],name:"Tonga"},{latLng:[15.3,-61.38],name:"Dominica"},{latLng:[-20.2,57.5],name:"Mauritius"},{latLng:[26.02,50.55],name:"Bahrain"},{latLng:[.33,6.73],name:"So Tom and Prncipe"}]})},t.fn.tkVectorUSAUnemployment=function(){if(this.length){var e=this;t.getJSON("assets/data/vector-maps/data/us-unemployment.json",function(t){var n=jvm.values.apply({},jvm.values(t.states)),r=Array.prototype.concat.apply([],jvm.values(t.metro.population)),o=Array.prototype.concat.apply([],jvm.values(t.metro.unemployment));e.vectorMap({map:"us_aea_en",markers:t.metro.coords,backgroundColor:"#fff",zoomOnScroll:!1,series:{markers:[{attribute:"fill",scale:[settings.colors.primary[300]],values:t.metro.unemployment[2009],min:jvm.min(o),max:jvm.max(o)},{attribute:"r",scale:[5,20],values:t.metro.population[2009],min:jvm.min(r),max:jvm.max(r)}],regions:[{scale:[settings.colors.primary[500],settings.colors.success[500]],attribute:"fill",values:t.states[2009],min:jvm.min(n),max:jvm.max(n)}]},onMarkerLabelShow:function(e,n,r){n.html("<b>"+t.metro.names[r]+"</b><br/><b>Population: </b>"+t.metro.population[2009][r]+"</br><b>Unemployment rate: </b>"+t.metro.unemployment[2009][r]+"%")},onRegionLabelShow:function(e,n,r){n.html("<b>"+n.html()+"</b></br><b>Unemployment rate: </b>"+t.states[2009][r]+"%")}})})}},t.fn.tkVectorRegionSelection=function(){if(this.length){var t=new jvm.Map({container:this,map:"de_merc_en",regionsSelectable:!0,markersSelectable:!0,backgroundColor:"#fff",zoomOnScroll:!1,markers:[{latLng:[52.5,13.39],name:"Berlin"},{latLng:[53.56,10],name:"Hamburg"},{latLng:[48.13,11.56],name:"Munich"},{latLng:[50.95,6.96],name:"Cologne"},{latLng:[50.11,8.68],name:"Frankfurt am Main"},{latLng:[48.77,9.17],name:"Stuttgart"},{latLng:[51.23,6.78],name:"Dusseldorf"},{latLng:[51.51,7.46],name:"Dortmund"},{latLng:[51.45,7.01],name:"Essen"},{latLng:[53.07,8.8],name:"Bremen"}],markerStyle:{initial:{fill:settings.colors.primary[300]},selected:{fill:settings.colors.success[500]}},regionStyle:{initial:{fill:settings.colors.primary[500]},selected:{fill:settings.colors.gray[700]}},series:{markers:[{attribute:"r",scale:[5,15],values:[887.7,755.16,310.69,405.17,248.31,207.35,217.22,280.71,210.32,325.42]}]},onRegionSelected:function(){window.localStorage&&window.localStorage.setItem("jvectormap-selected-regions",JSON.stringify(t.getSelectedRegions()))},onMarkerSelected:function(){window.localStorage&&window.localStorage.setItem("jvectormap-selected-markers",JSON.stringify(t.getSelectedMarkers()))}});t.setSelectedRegions(JSON.parse(window.localStorage.getItem("jvectormap-selected-regions")||"[]")),t.setSelectedMarkers(JSON.parse(window.localStorage.getItem("jvectormap-selected-markers")||"[]"))}},t.fn.tkVectorFranceElections=function(){this.length&&t.getJSON("assets/data/vector-maps/data/france-elections.json",function(e){new jvm.Map({map:"fr_merc_en",backgroundColor:"#fff",container:t("#france-2007"),zoomOnScroll:!1,series:{regions:[{scale:{1:settings.colors.primary[500],2:settings.colors.primary[300]},attribute:"fill",values:e.year2007.results}]}}),new jvm.Map({map:"fr_merc_en",container:t("#france-2012"),backgroundColor:"#fff",zoomOnScroll:!1,series:{regions:[{scale:{1:settings.colors.primary[500],2:settings.colors.primary[300]},attribute:"fill",values:e.year2012.results}]}})})};var e,n=[settings.colors.primary[300],settings.colors.primary[500],settings.colors.success[500],settings.colors.gray[300],settings.colors.success[500],settings.colors.success[600]],r=function(){var t,r={};for(t in e.regions)r[t]=n[Math.floor(Math.random()*n.length)];return r};t.fn.tkVectorRandomColors=function(){this.length&&((e=new jvm.Map({map:"es_merc_en",backgroundColor:"#fff",container:this,zoomOnScroll:!1,series:{regions:[{attribute:"fill"}]}})).series.regions[0].setValues(r()),t("#update-colors-button").click(function(t){t.preventDefault(),e.series.regions[0].setValues(r())}))},t.fn.tkVectorMallMap=function(){this.length&&this.vectorMap({map:"mall",backgroundColor:"#fff",zoomOnScroll:!1,markers:[{coords:[60,110],name:"Escalator 1",style:{fill:settings.colors.primary[300],stroke:"#fff"}},{coords:[260,95],name:"Escalator 2",style:{fill:settings.colors.primary[300],stroke:"#fff"}},{coords:[434,95],name:"Escalator 3",style:{fill:settings.colors.primary[300],stroke:"#fff"}},{coords:[634,110],name:"Escalator 4",style:{fill:settings.colors.primary[300],stroke:"#fff"}}],series:{regions:[{values:{F102:"SPORTS & OUTDOOR",F103:"HOME DECOR",F105:"FASHION",F106:"OTHER",F108:"BEAUTY & SPA",F109:"FASHION",F110:"BEAUTY & SPA",F111:"URBAN FAVORITES",F114:"SERVICES",F166:"DINING",F167:"FASHION",F169:"DINING",F170:"ENTERTAINMENT",F172:"DINING",F174:"DINING",F115:"KIDS STUFF",F117:"LIFESTYLE",F118:"URBAN FAVORITES",F119:"FASHION",F120:"FASHION",F122:"KIDS STUFF",F124:"KIDS STUFF",F125:"KIDS STUFF",F126:"KIDS STUFF",F128:"KIDS STUFF",F129:"LIFESTYLE",F130:"HOME DECOR",F132:"DINING",F133:"SPORTS & OUTDOOR",F134:"KIDS STUFF",F135:"LIFESTYLE",F136:"LIFESTYLE",F139:"KIDS STUFF",F153:"DINING",F155:"FASHION",F156:"URBAN FAVORITES",F157:"URBAN FAVORITES",F158:"LINGERIE & UNDERWEAR",F159:"FASHION",F160:"FASHION",F162:"FASHION",F164:"FASHION",F165:"FASHION",FR01:"REST ROOMS",FR02:"REST ROOMS",FR03:"REST ROOMS",FR04:"REST ROOMS",FFC:"DINING"},scale:{FASHION:"#2761ad","LINGERIE & UNDERWEAR":"#d58aa3","BEAUTY & SPA":settings.colors.success[500],"URBAN FAVORITES":settings.colors.primary[900],"SPORTS & OUTDOOR":settings.colors.success[500],"KIDS STUFF":settings.colors.success[300],ENTERTAINMENT:settings.colors.success[500],"HOME DECOR":settings.colors.gray[400],LIFESTYLE:settings.colors.gray[300],DINING:settings.colors.success[500],"REST ROOMS":settings.colors.gray[700],SERVICES:settings.colors.gray[300],OTHER:settings.colors.gray[500]}}]},onRegionLabelShow:function(t,e,n){""===e.html()&&t.preventDefault()}})},t.fn.tkVectorProjectionMap=function(){if(this.length){var e,n=0,r={};(e=new jvm.Map({map:"us_lcc_en",zoomOnScroll:!1,regionStyle:{initial:{fill:settings.colors.primary[500]}},backgroundColor:"#fff",markerStyle:{initial:{fill:"red"}},container:this,onMarkerLabelShow:function(t,n,o){e.label.text(r[o].lat.toFixed(2)+", "+r[o].lng.toFixed(2))},onMarkerClick:function(t,n){e.removeMarkers([n]),e.label.hide()}})).container.click(function(o){var a=e.pointToLatLng(o.offsetX,o.offsetY),i=t(o.target).attr("class");a&&(!i||i&&-1===t(o.target).attr("class").indexOf("jvectormap-marker"))&&(r[n]=a,e.addMarker(n,{latLng:[a.lat,a.lng]}),n+=1)})}},t('[data-toggle="vector-world-map-gdp"]').tkVectorWorldMapGDP(),t('[data-toggle="vector-world-map-markers"]').tkVectorWorldMapMarkers(),t('[data-toggle="vector-usa-unemployment"]').tkVectorUSAUnemployment(),t('[data-toggle="vector-region-selection"]').tkVectorRegionSelection(),t('[data-toggle="vector-france-elections"]').tkVectorFranceElections(),t('[data-toggle="vector-random-colors"]').tkVectorRandomColors(),t('[data-toggle="vector-mall-map"]').tkVectorMallMap(),t('[data-toggle="vector-projection-map"]').tkVectorProjectionMap()}(jQuery)},37:function(t,e,n){for(var r=n(34),o=n(22),a=n(20),i=n(4),s=n(5),c=n(18),l=n(7),u=l("iterator"),f=l("toStringTag"),p=c.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=o(m),S=0;S<g.length;S++){var v,y=g[S],d=m[y],F=i[y],h=F&&F.prototype;if(h&&(h[u]||s(h,u,p),h[f]||s(h,f,y),c[y]=p,d))for(v in r)h[v]||a(h,v,r[v],!0)}},38:function(t,e,n){var r=n(4),o=n(15),a=n(5),i=n(20),s=n(47),c=function(t,e,n){var l,u,f,p,m=t&c.F,g=t&c.G,S=t&c.S,v=t&c.P,y=t&c.B,d=g?r:S?r[e]||(r[e]={}):(r[e]||{}).prototype,F=g?o:o[e]||(o[e]={}),h=F.prototype||(F.prototype={});for(l in g&&(n=e),n)f=((u=!m&&d&&void 0!==d[l])?d:n)[l],p=y&&u?s(f,r):v&&"function"==typeof f?s(Function.call,f):f,d&&i(d,l,f,t&c.U),F[l]!=f&&a(F,l,p),v&&h[l]!=f&&(h[l]=f)};r.core=o,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},39:function(t,e,n){var r=n(30);t.exports=function(t){return Object(r(t))}},4:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},42:function(t,e,n){var r=n(7)("unscopables"),o=Array.prototype;null==o[r]&&n(5)(o,r,{}),t.exports=function(t){o[r][t]=!0}},43:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},44:function(t,e,n){var r=n(45);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},45:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},46:function(t,e,n){"use strict";var r=n(26),o=n(38),a=n(20),i=n(5),s=n(18),c=n(49),l=n(33),u=n(57),f=n(7)("iterator"),p=!([].keys&&"next"in[].keys()),m=function(){return this};t.exports=function(t,e,n,g,S,v,y){c(n,e,g);var d,F,h,O=function(t){if(!p&&t in M)return M[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},b=e+" Iterator",L="values"==S,k=!1,M=t.prototype,E=M[f]||M["@@iterator"]||S&&M[S],T=E||O(S),I=S?L?O("entries"):T:void 0,x="Array"==e&&M.entries||E;if(x&&(h=u(x.call(new t)))!==Object.prototype&&h.next&&(l(h,b,!0),r||"function"==typeof h[f]||i(h,f,m)),L&&E&&"values"!==E.name&&(k=!0,T=function(){return E.call(this)}),r&&!y||!p&&!k&&M[f]||i(M,f,T),s[e]=T,s[b]=m,S)if(d={values:L?T:O("values"),keys:v?T:O("keys"),entries:I},y)for(F in d)F in M||a(M,F,d[F]);else o(o.P+o.F*(p||k),e,d);return d}},47:function(t,e,n){var r=n(48);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},48:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},49:function(t,e,n){"use strict";var r=n(50),o=n(29),a=n(33),i={};n(5)(i,n(7)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(i,{next:o(1,n)}),a(t,e+" Iterator")}},5:function(t,e,n){var r=n(9),o=n(29);t.exports=n(6)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},50:function(t,e,n){var r=n(10),o=n(51),a=n(32),i=n(21)("IE_PROTO"),s=function(){},c=function(){var t,e=n(17)("iframe"),r=a.length;for(e.style.display="none",n(56).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[a[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[i]=t):n=c(),void 0===e?n:o(n,e)}},51:function(t,e,n){var r=n(9),o=n(10),a=n(22);t.exports=n(6)?Object.defineProperties:function(t,e){o(t);for(var n,i=a(e),s=i.length,c=0;s>c;)r.f(t,n=i[c++],e[n]);return t}},52:function(t,e,n){var r=n(11),o=n(19),a=n(53)(!1),i=n(21)("IE_PROTO");t.exports=function(t,e){var n,s=o(t),c=0,l=[];for(n in s)n!=i&&r(s,n)&&l.push(n);for(;e.length>c;)r(s,n=e[c++])&&(~a(l,n)||l.push(n));return l}},53:function(t,e,n){var r=n(19),o=n(54),a=n(55);t.exports=function(t){return function(e,n,i){var s,c=r(e),l=o(c.length),u=a(i,l);if(t&&n!=n){for(;l>u;)if((s=c[u++])!=s)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}}},54:function(t,e,n){var r=n(31),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},55:function(t,e,n){var r=n(31),o=Math.max,a=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):a(t,e)}},56:function(t,e,n){var r=n(4).document;t.exports=r&&r.documentElement},57:function(t,e,n){var r=n(11),o=n(39),a=n(21)("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},6:function(t,e,n){t.exports=!n(12)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},7:function(t,e,n){var r=n(25)("wks"),o=n(16),a=n(4).Symbol,i="function"==typeof a;(t.exports=function(t){return r[t]||(r[t]=i&&a[t]||(i?a:o)("Symbol."+t))}).store=r},8:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},9:function(t,e,n){var r=n(10),o=n(27),a=n(28),i=Object.defineProperty;e.f=n(6)?Object.defineProperty:function(t,e,n){if(r(t),e=a(e,!0),r(n),o)try{return i(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}}});