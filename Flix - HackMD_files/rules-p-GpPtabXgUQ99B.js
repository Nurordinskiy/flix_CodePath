/*
 Quantcast measurement tag
 Copyright (c) 2008-2018, Quantcast Corp.
*/
(function(c,a,b){var k=function(f){return f.replace(/^[\s\ufeff\xA0]+|[\s\ufeff\xA0]+$/g,"")},l=function(f,e){if(!e)return e;var a,d;a=-1!==f.toLowerCase().indexOf("tag")||-1!==f.toLowerCase().indexOf("keyword")||0===f.toLowerCase().indexOf("qc:");d=-1===f.toLowerCase().indexOf("tag")&&-1===f.toLowerCase().indexOf("keyword")&&0===f.toLowerCase().indexOf("qc:")?!1:!0;d&&(e=e.replace(/\.+/g," "));if(a){d=e.split(",");for(a=0;a<d.length;a++)d[a]=k(d[a]);return d}return k(e.replace(/,+/g," "))};a=function(a,
e,b){e=document.getElementsByTagName("meta");for(var d,c,g=[],h=0;h<e.length;h++)d=e[h],c=d.getAttribute("name")||d.getAttribute("property"),c==b&&(g=g.concat(l(b,d.getAttribute("content"))));0<g.length?a(g):a(!1)};b=function(a,b){var c=[],d;if("array"==={}.toString.call(b).match(/\s([a-zA-Z]+)/)[1].toLowerCase()){for(d=0;d<b.length;d++)c.push(a+"."+b[d]);return{labels:c.join(",")}}return{labels:a+"."+b}};__qc.apply(null,["rules",[c,null,[[b,"keywords"]],[[a,"exactmatch","sailthru.tags"]]],[c,null,
[[b,"keywords"]],[[a,"exactmatch","news_keywords"]]],[c,null,[[b,"keywords"]],[[a,"exactmatch","keywords"]]],[c,null,[[b,"category"]],[[a,"exactmatch","article:tag"]]],[c,null,[[b,"category"]],[[a,"exactmatch","article:section"]]],[c,null,[[b,"title"]],[[a,"exactmatch","twitter:title"]]],[c,null,[[b,"title"]],[[a,"exactmatch","og:title"]]],[c,null,[[b,"title"]],[[a,"exactmatch","title"]]],[c,null,[[b,"author"]],[[a,"exactmatch","article:author"]]],[c,null,[[b,"author"]],[[a,"exactmatch","sailthru.author"]]],
[c,null,[[b,"author"]],[[a,"exactmatch","authors"]]],[c,null,[[b,"author"]],[[a,"exactmatch","author"]]]])})("p-GpPtabXgUQ99B",window,document);