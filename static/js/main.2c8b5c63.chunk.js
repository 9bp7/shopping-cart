(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{32:function(t,c,e){"use strict";e.r(c);var r=e(0),s=e(1),n=e.n(s),i=e(19),a=e.n(i),j=e(21),l=e(17),o=e(9),h=e(4);var d=function(t){return Object(r.jsx)("nav",{children:Object(r.jsxs)("div",{className:"wrap",children:[Object(r.jsx)(h.b,{to:"/",children:Object(r.jsx)("h1",{className:"logo",children:"Replicars"})}),Object(r.jsxs)("ul",{children:[Object(r.jsx)(h.b,{to:"/shop",children:Object(r.jsx)("li",{children:"2020 Collection"})}),Object(r.jsx)(h.b,{to:"/cart",children:Object(r.jsxs)("li",{children:["Cart (",t.cart.length,")"]})})]})]})})};var b=function(){return Object(r.jsxs)("div",{className:"wrap home",children:[Object(r.jsxs)("h1",{children:["The ",Object(r.jsx)("span",{className:"font-2",children:"highest-quality"})," Formula 1 Motor Car Replicas for the ",Object(r.jsx)("span",{className:"font-2",children:"most devoted"})," of racing fans."]}),Object(r.jsx)(h.b,{to:"/shop",children:Object(r.jsx)("button",{children:"Shop the 2020 Collection \xbb"})}),Object(r.jsx)("img",{src:"/shopping-cart/img/ferrari-trsp.png",alt:"Ferrari F1 Car"})]})};var p=function(t){return Object(r.jsx)("div",{className:"product-card",children:Object(r.jsxs)("div",{className:"product-card-inner",children:[Object(r.jsx)("img",{src:"/shopping-cart"+t.details.src,alt:""}),Object(r.jsx)("p",{children:t.details.title}),Object(r.jsxs)("p",{children:[t.details.price," GBP"]})]})})},O=[{title:"Alfa Romeo C39",src:"/img/alfaromeo.png",price:"12,000,000"},{title:"AlphaTauri AT01",src:"/img/alphatauri.png",price:"15,500,000"},{title:"Ferrari SF1000",src:"/img/ferrari.png",price:"25,100,001"},{title:"Haas VF-20",src:"/img/haas.png",price:"11,000,000"},{title:"McLaren MCL35",src:"/img/mclaren.png",price:"20,000,000"},{title:"Mercedes F1 W11",src:"/img/mercedes.png",price:"27,777,777"},{title:"Racing Point RP20",src:"/img/racingpoint.png",price:"18,500,000"},{title:"Red Bull RB16",src:"/img/redbull.png",price:"21,000,000"},{title:"Renault R.S.20",src:"/img/renault.png",price:"17,000,000"},{title:"Williams FW43",src:"/img/williams.png",price:"9,500,000"}];function x(){return O}var u=function(){var t=x();return Object(r.jsxs)("div",{className:"wrap shop",children:[Object(r.jsx)("h1",{children:"The 2020 Replicars Collection"}),Object(r.jsx)("div",{className:"products-list",children:t.map((function(t,c){return Object(r.jsx)(h.b,{to:"/shop/".concat(c),children:Object(r.jsx)(p,{details:t})})}))})]})};var m=function(t){var c=x(),e=Object(s.useState)(0),n=Object(o.a)(e,2),i=n[0],a=n[1],j=function(t){return t.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,",")},l=function(){a(0),c.forEach((function(t){t.quantity=0}))},d=function(){var e=t.cart,r=0;e.forEach((function(t){c.filter((function(c,e){c.title===t.title&&(c.quantity+=1,r+=+c.price.split(",").join(""))}))})),a(r)};return Object(s.useEffect)((function(){l(),d()}),[t.cart]),Object(s.useEffect)((function(){return l(),d(),c=x()}),[]),i>0?Object(r.jsx)("div",{className:"wrap",children:Object(r.jsxs)("div",{className:"shop cart",children:[Object(r.jsx)(h.b,{to:"/shop",children:Object(r.jsx)("p",{class:"back",children:"\u2039 Back to shop"})}),Object(r.jsxs)("table",{children:[c.map((function(c){return c.quantity>0?Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:Object(r.jsx)("img",{src:"/shopping-cart"+c.src,alt:""})}),Object(r.jsx)("th",{children:c.title}),Object(r.jsxs)("th",{children:[Object(r.jsx)("span",{className:"btn-basket",onClick:function(){return function(c){t.removeFromCart(c)}(c)},children:"\u2212"})," ",c.quantity," ",Object(r.jsx)("span",{className:"btn-basket",onClick:function(){return function(c){t.addToCart(c)}(c)},children:"\uff0b"})]}),Object(r.jsxs)("th",{children:[j(+c.price.split(",").join("")*c.quantity)," GBP"]})]}):null})),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{}),Object(r.jsx)("th",{}),Object(r.jsx)("th",{children:"Grand Total"}),Object(r.jsxs)("th",{children:[j(i)," GBP"]})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{}),Object(r.jsx)("th",{}),Object(r.jsx)("th",{}),Object(r.jsxs)("th",{children:[Object(r.jsx)("button",{children:"Race to payment \xbb"}),"  "]})]})]})]})}):Object(r.jsxs)("div",{className:"wrap shop product-detail",children:[Object(r.jsx)(h.b,{to:"/shop",children:Object(r.jsx)("p",{class:"back",children:"\u2039 Back to shop"})}),Object(r.jsx)("h1",{children:"Cart is empty"})]})},f=e(2);var g=function(t){var c=Object(s.useState)(!1),e=Object(o.a)(c,2),n=e[0],i=e[1],a=x();return Object(r.jsxs)("div",{className:"wrap shop product-detail",children:[Object(r.jsx)(h.b,{to:"/shop",children:Object(r.jsx)("p",{class:"back",children:"\u2039 Back to shop"})}),Object(r.jsx)("h1",{children:a[t.match.params.index].title}),Object(r.jsx)("img",{src:"/shopping-cart"+a[t.match.params.index].src,alt:a[t.match.params.index].title}),Object(r.jsxs)("p",{children:["Price: ",a[t.match.params.index].price," GBP"]}),Object(r.jsx)("button",{onClick:function(){t.addToCart(a[t.match.params.index]),i(!0)},children:"Add to basket"}),n?Object(r.jsx)(h.b,{to:"/cart",children:Object(r.jsx)("button",{children:"Go to checkout \xbb"})}):null]})};var v=function(){var t=Object(s.useState)([]),c=Object(o.a)(t,2),e=c[0],n=c[1],i=function(t){n([].concat(Object(l.a)(e),[t]))};return Object(r.jsx)(h.a,{basename:"/shopping-cart",children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(d,{cart:e}),Object(r.jsxs)(f.c,{children:[Object(r.jsx)(f.a,{exact:!0,path:"/",component:b}),Object(r.jsx)(f.a,{exact:!0,path:"/shop",component:u}),Object(r.jsx)(f.a,{path:"/shop/:index",render:function(t){return Object(r.jsx)(g,Object(j.a)({addToCart:i},t))}}),Object(r.jsx)(f.a,{exact:!0,path:"/cart",children:Object(r.jsx)(m,{cart:e,addToCart:i,removeFromCart:function(t){var c=e,r=!1;c.forEach((function(e,s){e!==t||r||(c.splice(s,1),r=!0)})),n(Object(l.a)(c))}})})]})]})})};a.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.2c8b5c63.chunk.js.map