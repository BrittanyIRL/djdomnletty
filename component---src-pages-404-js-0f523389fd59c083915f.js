(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(145),o=t(147),c=t(152),l=t(150),m=i.c.div.withConfig({displayName:"sc-404__Container",componentId:"jpiv5h-0"})(["background-color:",";width:100vw;height:100vh;background-size:contain;display:flex;flex-direction:column;align-items:center;justify-content:center;"],function(e){return e.theme.colors.ORANGE}),s=Object(i.c)(o.a).withConfig({displayName:"sc-404__StyledLink",componentId:"jpiv5h-1"})(["max-width:60rem;margin-top:2rem;font-size:2rem;background-color:",";color:",";font-weight:600;padding:1rem;&:hover{font-style:italic;}animation-name:colorPulse;animation-duration:4s;animation-iteration-count:infinite;@keyframes colorPulse{0%{font-weight:600;background-color:",";}50%{font-weight:700;background-color:",";}100%{font-weight:600;background-color:",";}}"],function(e){return e.theme.colors.YELLOW},function(e){return e.theme.colors.GREEN},function(e){return e.theme.colors.YELLOW},function(e){return e.theme.colors.WHITE},function(e){return e.theme.colors.YELLOW});n.default=function(){return a.a.createElement(c.a,null,a.a.createElement(l.a,{title:"404: We're sad that you're here."}),a.a.createElement(m,null,a.a.createElement("iframe",{id:"404",title:"404 buddy",width:"560",height:"315",src:"https://www.youtube.com/embed/RgKAFK5djSk",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),a.a.createElement(s,{to:"/"},"We're sad that you're here.")))}},146:function(e,n,t){var r;e.exports=(r=t(148))&&r.default||r},147:function(e,n,t){"use strict";t.d(n,"b",function(){return s});var r=t(0),a=t.n(r),i=t(4),o=t.n(i),c=t(33),l=t.n(c);t.d(n,"a",function(){return l.a});t(146);var m=a.a.createContext({}),s=function(e){return a.a.createElement(m.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,n,t){"use strict";t.r(n);t(34);var r=t(0),a=t.n(r),i=t(4),o=t.n(i),c=t(56),l=t(2),m=function(e){var n=e.location,t=l.default.getResourcesForPathnameSync(n.pathname);return t?a.a.createElement(c.a,Object.assign({location:n,pageResources:t},t.json)):null};m.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=m},149:function(e){e.exports={data:{site:{siteMetadata:{title:"DJ DOM & LETTY"}}}}},150:function(e,n,t){"use strict";var r=t(151),a=t(0),i=t.n(a),o=t(4),c=t.n(o),l=t(155),m=t.n(l);function s(e){var n=e.description,t=e.lang,a=e.meta,o=e.keywords,c=e.title,l=r.data.site,s=n||l.siteMetadata.description;return i.a.createElement(m.a,{htmlAttributes:{lang:t},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(a)})}s.defaultProps={lang:"en",meta:[],keywords:[],description:""},s.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},n.a=s},151:function(e){e.exports={data:{site:{siteMetadata:{title:"DJ DOM & LETTY",description:"DJ Dom & Letty are a vinyl only dj duo based in Phoenix,\n    AZ."}}}}},152:function(e,n,t){"use strict";var r=t(145),a=t(149),i=t(0),o=t.n(i),c=t(147),l=t(153),m=t.n(l);t(154);function s(){var e=m()(["\n  :root {\n    font-size: 62.5%;\n  }\n\n  * {\n    box-sizing: inherit;\n    outline: inherit;\n  }\n\n  html {\n    box-sizing: border-box;\n    outline: none;\n    @import url('https://fonts.googleapis.com/css?family=Kanit:400,900i&display=swap');\n    font-weight: 900;\n    font-style: italic;\n    font-family: ",";\n  }\n\n  body {\n    color: ",";\n    background: ",";\n    font-size: ",";\n    margin: 0;\n    padding: 0;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    height: 100vh;\n  }\n\n  a {\n    text-decoration: none;\n    cursor: pointer\n  }\n\n  button {\n    background: inherit;\n    border: 0;\n    font-size: 100%;\n    font-family: inherit;\n    padding: 0;\n  }\n\n  img {\n    max-width: 100%;\n  }\n\n  li, ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  p, h1, h2, h3, h4, h5, h6, a {\n    margin: 0;\n  }\n\n  h1 {\n    font-size: 3.5rem;\n  }\n\n  h2 {\n    font-size: 3rem;\n  }\n\n  h3 {\n    font-size: 2.6rem;\n    padding-bottom: 1rem;\n  }\n\n  h4 { \n    font-size: 2.2rem;\n  }\n\n  p, a, li {\n    line-height: 1.6;\n    font-size: 1.4rem;\n  }\n"]);return s=function(){return e},e}var u=Object(r.b)(s(),function(e){return"Kanit, "+e.theme.font.family.backup+", sans-serif"},function(e){return e.theme.colors.GREEN},function(e){return e.theme.colors.WHITE},function(e){return e.theme.font.size.m}),d={colors:{YELLOW:"#F8E701",WHITE:"#F5F6F0",GREEN:"#119942",ORANGE:"#E94C23",BLUE:"#045CAC"},font:{family:{primary:"Kanit"},size:{xxs:"1rem",xs:"1.2rem",s:"1.4rem",m:"1.6rem",l:"1.8rem",xl:"2.0rem",xxl:"2.8rem",xxxl:"3.8rem",xxxxl:"4.6rem"},spacing:{wide:"0.1rem"},weight:{light:"300",regular:"400",medium:"500",heavy:"700"}}},h=r.c.header.withConfig({displayName:"header__HeaderContainer",componentId:"sc-1xllm9h-0"})(["min-width:100vw !important;width:100% !important;height:10rem;display:flex;align-items:center;align-content:center;background-color:",";@media (max-width:767px){height:8rem;}@media (max-width:600px){height:5rem;}"],function(e){return e.theme.colors.BLUE}),f=r.c.h1.withConfig({displayName:"header__Heading",componentId:"sc-1xllm9h-1"})(["width:100vw;font-family:",";font-size:9rem;letter-spacing:0.45rem;color:",";text-align:right;translate(-100%,0);animation:marquee 10s linear 1s infinite alternate;@keyframes marquee{0%{transform:translate(0,0);color:",";}50%{color:",";}100%{transform:translate(-100%,0);color:",";}}@media (max-width:767px){font-size:5rem;}@media (max-width:600px){font-size:3.5rem;}"],function(e){return e.theme.font.family.primary},function(e){return e.theme.colors.ORANGE},function(e){return e.theme.colors.ORANGE},function(e){return e.theme.colors.GREEN},function(e){return e.theme.colors.YELLOW}),p=function(){return o.a.createElement(h,null,o.a.createElement(f,null,"DJ DOM & LETTY"))},g=r.c.div.withConfig({displayName:"layout__Body",componentId:"sc-855xpj-0"})(["display:flex;flex-direction:column;min-width:100vw;max-width:100vw;overflow:hidden;width:100%;min-height:100%;"]),y=r.c.main.withConfig({displayName:"layout__Main",componentId:"sc-855xpj-1"})([""]),w=r.c.footer.withConfig({displayName:"layout__Footer",componentId:"sc-855xpj-2"})(["font-family:'Kanit',padding:1rem 3rem;border-top:",";"],function(e){return".5rem solid "+e.theme.colors.BLUE}),E=new Date;n.a=function(e){var n=e.children;return o.a.createElement(c.b,{query:"2994927498",render:function(){return o.a.createElement(r.a,{theme:d},o.a.createElement(o.a.Fragment,null,o.a.createElement(u,null),o.a.createElement(g,null,o.a.createElement(p,null),o.a.createElement(y,null,n,o.a.createElement(w,null,o.a.createElement("p",null,"DJ Dom & Letty are a vinyl only dj duo based in Phoenix, AZ. You can reach them at djdomnletty@gmail.com."),o.a.createElement("p",null,"Site belongs to DJ Dom & Letty, ",E.getFullYear(),". We aren't affiliated with Fast and Furious, we're just huge fans. Site maintained from the surface of Mars."))))))},data:a})}}}]);
//# sourceMappingURL=component---src-pages-404-js-0f523389fd59c083915f.js.map