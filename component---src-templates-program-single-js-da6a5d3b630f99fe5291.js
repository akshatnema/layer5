(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"A2+M":function(e,n,t){var r=t("X8hv");e.exports={MDXRenderer:r}},Bnag:function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,n){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,n,t){var r=t("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,n,t){var r=t("Ijbi"),a=t("EbDI"),l=t("ZhPi"),c=t("Bnag");e.exports=function(e){return r(e)||a(e)||l(e)||c()}},WkPL:function(e,n){e.exports=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}},X8hv:function(e,n,t){var r=t("sXyB"),a=t("RIqP"),l=t("lSNA"),c=t("8OQS");function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var u=t("q1tI"),p=t("7ljp").mdx,m=t("BfwJ").useMDXScope;e.exports=function(e){var n=e.scope,t=e.children,l=c(e,["scope","children"]),i=m(n),s=u.useMemo((function(){if(!t)return null;var e=o({React:u,mdx:p},i),n=Object.keys(e),l=n.map((function(n){return e[n]}));return r(Function,["_fn"].concat(a(n),[""+t])).apply(void 0,[{}].concat(a(l)))}),[t,n]);return u.createElement(s,o({},l))}},YP3a:function(e,n,t){"use strict";var r=t("q1tI"),a=t.n(r),l=t("Wbzz"),c=t("m7xX"),i=t.n(c),o=t("vOnD").d.div.withConfig({displayName:"pageHeaderstyle__PageHeaderWrapper",componentId:"bliqzc-0"})(["\n        position: relative;\n        overflow: hidden;\n        z-index:1;\n        .page-header {\n            text-align: center;\n            position: relative;\n            height: auto;\n            margin: 2rem auto 2rem;\n            padding: 0 1rem 0;\n            z-index: 99;\n        }\n        \n        .feature-image{\n            margin: 2rem auto;\n            max-height: 62.5rem;\n            max-width: 31rem;\n            object-fit: contain;    \n        }\n        .breadcrumbs {\n            display: flex;\n            justify-content: center;\n            margin-top: 1.5rem;  \n            h5 {\n                display: inline-block;\n                margin:0 0.4rem;\n                opacity: .7;\n            }\n            p{\n                margin: 0;\n                display: inline-block;\n            }\n        } \n    }\n"]),u=t("tBDR"),p=function(e,n){return a.a.createElement(a.a.Fragment,null,n?a.a.createElement(l.Link,{to:"/community/members/"+i()(e.name)},a.a.createElement("span",null,e.name)):a.a.createElement("span",null,e.name))};n.a=function(e){var n=e.category,t=e.title,r=e.subtitle,c=e.author,i=e.thumbnail,m=!1;c&&(m=Object(l.useStaticQuery)("1485533831").allMdx.nodes.some((function(e){return e.frontmatter.name==c.name})));return a.a.createElement(o,null,a.a.createElement("div",{className:"page-header"},i&&a.a.createElement("div",{className:"feature-image"},a.a.createElement(u.a,Object.assign({},i,{imgStyle:{objectFit:"contain"},alt:t}))),a.a.createElement("h1",null,t),r&&a.a.createElement("h3",null,r),n&&a.a.createElement("div",{className:"breadcrumbs"},a.a.createElement("span",null,a.a.createElement("h5",null,"Category:"),a.a.createElement("p",{key:n},n)),c&&a.a.createElement(a.a.Fragment,null,a.a.createElement("span",null,a.a.createElement("h5",null,"By:"),a.a.createElement("p",null,p(c,m))))),!n&&c&&a.a.createElement("div",{className:"breadcrumbs post"},a.a.createElement("h5",null,"By:"),a.a.createElement("span",null,p(c,m)))))}},ZhPi:function(e,n,t){var r=t("WkPL");e.exports=function(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}},b48C:function(e,n){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},lSNA:function(e,n){e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},m7xX:function(e,n){e.exports=function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},sXyB:function(e,n,t){var r=t("SksO"),a=t("b48C");function l(n,t,c){return a()?e.exports=l=Reflect.construct:e.exports=l=function(e,n,t){var a=[null];a.push.apply(a,n);var l=new(Function.bind.apply(e,a));return t&&r(l,t.prototype),l},l.apply(null,arguments)}e.exports=l},tBDR:function(e,n,t){"use strict";var r=t("zLVn"),a=t("q1tI"),l=t.n(a),c=t("9eSz"),i=t.n(c);n.a=function(e){var n=e.childImageSharp,t=e.extension,a=e.publicURL,c=e.alt,o=Object(r.a)(e,["childImageSharp","extension","publicURL","alt"]);return n||"svg"!==t?l.a.createElement(i.a,Object.assign({fluid:n.fluid},o,{alt:c})):l.a.createElement("div",{className:"gatsby-image-wrapper"},l.a.createElement("img",{src:a,alt:c}))}},z3BL:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),a=t.n(r),l=t("vOnD"),c=t("Bl7J"),i=t("vrFN"),o=t("mvsK"),u=t("A2+M"),p=t("xFQ1"),m=t("YP3a"),s=l.d.div.withConfig({displayName:"ProgramsSinglestyle__ProgramsPageWrapper",componentId:"sc-12ai8dy-0"})(["\n margin-bottom: 30px;\n.single-post-wrapper{\n    padding: 50px 0 180px 0;\n}\n#programs {\n    padding: 50px 0 0 0;\n}\n.single-post-block{\n    p{\n        line-height: 29px;\n        letter-spacing: 0.2px;\n    }\n    p+p{\n        margin-top: 30px;  \n    }\n}\n\n@media only screen and (max-width: 912px) {\n     .single-post-block{\n         padding-bottom: 10px;\n     }\n}\n"]),f=function(e){var n=e.data.mdx,t=n.frontmatter,r=n.body;return a.a.createElement(s,null,a.a.createElement(m.a,{title:t.title}),a.a.createElement("div",{className:"single-post-wrapper",id:"programs"},a.a.createElement(p.b,null,a.a.createElement("div",{className:"single-post-block"},a.a.createElement(u.MDXRenderer,null,r)))))},d=t("iJo/"),g=t("DZth"),b=t("WL7g");n.default=function(e){var n=e.data;return a.a.createElement(l.a,{theme:b.a},a.a.createElement(c.a,null,a.a.createElement(g.a,null),a.a.createElement(i.a,{title:n.mdx.frontmatter.title}),a.a.createElement(o.a,null),a.a.createElement(f,{data:n}),a.a.createElement(d.a,null)))}}}]);
//# sourceMappingURL=component---src-templates-program-single-js-da6a5d3b630f99fe5291.js.map