(window.webpackJsonpspa=window.webpackJsonpspa||[]).push([[0],[,,,function(e,t,a){e.exports={gallery:"Gallery_gallery__2pa95",one:"Gallery_one__tiIVJ",two:"Gallery_two__23mFi",three:"Gallery_three__1l1DA",four:"Gallery_four__33qgn",five:"Gallery_five__-9XCr",six:"Gallery_six__26XGE"}},,function(e,t,a){e.exports={nav:"Nav_nav__3htFn",logo:"Nav_logo___9QTa",list:"Nav_list__2M3sV",link:"Nav_link__3nLBa"}},function(e,t,a){e.exports={footer:"Footer_footer__1eSat",list:"Footer_list__11rWl",link:"Footer_link__33zBD"}},function(e,t,a){e.exports={header:"Header_header__-QCoi",head:"Header_head__Bb679",title:"Header_title__2b3p_",text:"Header_text__1s9Qx",contact:"Header_contact__AH7hh"}},,,function(e,t,a){e.exports={main:"Main_main__12-Vj",section:"Main_section__3TD_g",title:"Main_title__1sEaa",text:"Main_text__wf4Px"}},,function(e,t,a){e.exports={text:"Card_text__2uMRt",title:"Card_title__y3qkc",description:"Card_description__Q3uy2"}},,function(e,t,a){e.exports={logo:"Logo_logo__3DKnQ",span:"Logo_span__3XKgL"}},,,,,,,,,function(e,t,a){e.exports={services:"Services_services__1cDpc",text:"Services_text__2UTsX",title:"Services_title__3sXLs"}},function(e,t,a){e.exports={container:"App_container__36XMm"}},,function(e,t,a){e.exports=a(36)},,,,,function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(18),l=(a(31),a(14)),s=a.n(l),c=function(){return i.a.createElement("div",{className:s.a.logo},"Code",i.a.createElement("span",{className:s.a.span},"Design"))},o=a(5),m=a.n(o),u=function(){return i.a.createElement("nav",{className:m.a.nav},i.a.createElement(c,{className:m.a.logo}),i.a.createElement("ul",{className:m.a.list},i.a.createElement("li",null,i.a.createElement("a",{className:m.a.link,href:"#"},"Pricing")),i.a.createElement("li",null,i.a.createElement("a",{className:m.a.link,href:"#"},"Mission")),i.a.createElement("li",null,i.a.createElement("a",{className:m.a.link,href:"#"},"Contact"))))},d=a(7),_=a.n(d),p=function(){return i.a.createElement("header",{className:_.a.header},i.a.createElement(u,null),i.a.createElement("div",{className:_.a.head},i.a.createElement("h1",{className:_.a.title},"We Create,",i.a.createElement("br",null)," We Design"),i.a.createElement("div",null,i.a.createElement("p",{className:_.a.text},"Designed for designers who want more control, CodeDesign is centered around our pioneering code generation technology. With every stroke you make, we populate real-time code for you behind the scenes. So your design works automatically on every device and browser. Gain back the creativity compromised in pre-existing templates, and the time lost in the back and forth with developers in design handoffs. Save them for designing your next best website."),i.a.createElement("div",null,i.a.createElement("a",{className:_.a.contact,href:"#"},"Contact Us")))))},f=a(8),h=a(25),v=a(9),g=a(21),E=a.n(g),b=a(22),y=a(12),N=a.n(y);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach(function(t){Object(b.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var k="card",O={backgroundColor:"white",cursor:"move"},C=function(e){var t=e.id,a=e.iconClass,r=e.title,l=e.description,s=e.index,c=e.moveCard,o=Object(n.useRef)(null),m=Object(f.d)({accept:k,hover:function(e,t){if(o.current){var a=e.index,n=s;if(a!==n){var i=o.current.getBoundingClientRect(),r=(i.bottom-i.top)/2,l=t.getClientOffset().y-i.top;a<n&&l<r||a>n&&l>r||(c(a,n),e.index=n)}}}}),u=Object(v.a)(m,2)[1],d=Object(f.c)({item:{type:k,id:t,index:s},collect:function(e){return{isDragging:e.isDragging()}}}),_=Object(v.a)(d,2),p=_[0].isDragging?0:1;return(0,_[1])(u(o)),i.a.createElement("div",{ref:o,style:w({},O,{opacity:p})},i.a.createElement("p",{className:N.a.text},i.a.createElement("i",{className:a})),i.a.createElement("p",{className:N.a.title},r),i.a.createElement("p",{className:N.a.description},l))},D=a(23),j=a.n(D),S=function(){var e=Object(n.useState)([{id:1,iconClass:"far fa-calendar-alt",title:"Planning",description:"Mauris vitae turpis ut sem blandit consequat et at ligula. Suspendisse quam lectus, tristique dapibus sapien et, tempus suscipit nisl."},{id:2,iconClass:"fas fa-crop",title:"Design",description:"Nulla eu metus faucibus, vehicula tortor quis, venenatis odio. Nullam purus mauris, feugiat in odio vitae, posuere volutpat libero. Sed et convallis libero."},{id:3,iconClass:"fas fa-code",title:"Development",description:"Ut ornare vitae enim a rhoncus. Nullam aliquet tristique scelerisque. Sed volutpat dictum risus ac laoreet. Suspendisse id lorem in enim sollicitudin varius."}]),t=Object(v.a)(e,2),a=t[0],r=t[1],l=Object(n.useCallback)(function(e,t){var n=a[e];r(E()(a,{$splice:[[e,1],[t,0,n]]}))},[a]);return i.a.createElement("ul",{className:j.a.services},a.map(function(e,t){return i.a.createElement("li",{key:e.id}," ",function(e,t){return i.a.createElement(C,{index:t,id:e.id,iconClass:e.iconClass,title:e.title,description:e.description,moveCard:l})}(e,t))}))},G=a(3),P=a.n(G),q=function(){return i.a.createElement("div",{className:P.a.gallery},i.a.createElement("div",{className:P.a.one}),i.a.createElement("div",{className:P.a.two}),i.a.createElement("div",{className:P.a.three}),i.a.createElement("div",{className:P.a.four}),i.a.createElement("div",{className:P.a.five}),i.a.createElement("div",{className:P.a.six}))},L=a(10),M=a.n(L),H=function(){return i.a.createElement("main",{className:M.a.main},i.a.createElement("section",{className:M.a.section},i.a.createElement("h2",{className:M.a.title},"About Us"),i.a.createElement("div",null,i.a.createElement("p",{className:M.a.text},"Designed for designers who want more control, CodeDesign is centered around our pioneering code generation technology. With every stroke you make, we populate real-time code for you behind the scenes. So your design works automatically on every device and browser. Gain back the creativity compromised in pre-existing templates, and the time lost in the back and forth with developers in design handoffs. Save them for designing your next best website."))),i.a.createElement(f.b,{backend:h.a},i.a.createElement(S,null)),i.a.createElement(q,null))},X=a(6),B=a.n(X),F=function(){return i.a.createElement("footer",{className:B.a.footer},i.a.createElement("h3",{className:B.a.title},"CodeDesign by Liliya Gavrishchishena"),i.a.createElement("p",null,"Support ",i.a.createElement("br",null)," Liliya.Gavrishchishena@gmail.com"),i.a.createElement("ul",{className:B.a.list},i.a.createElement("li",null,i.a.createElement("a",{className:B.a.link,href:"https://github.com/LiliyaGavrishchishena"},i.a.createElement("i",{className:"fab fa-github"}))),i.a.createElement("li",null,i.a.createElement("a",{className:B.a.link,href:"https://www.linkedin.com/in/liliya-gavrishchishena-7a1075154/"},i.a.createElement("i",{className:"fab fa-linkedin-in"}))),i.a.createElement("li",null,i.a.createElement("a",{className:B.a.link,href:"Liliya.Gavrishchishena@gmail.com"},i.a.createElement("i",{className:"fab fa-google"})))))},Q=a(24),W=a.n(Q),A=function(){return i.a.createElement("div",{className:W.a.container},i.a.createElement(p,null),i.a.createElement(H,null),i.a.createElement(F,null))};Object(r.render)(i.a.createElement(A,null),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.d33aa793.chunk.js.map