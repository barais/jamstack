import{d as m,z as u,o as n,b as p,e as a,h as l,c as f,q as d,s as _,B as o}from"../modules/vue-D8PwQFku.js";import{u as h,f as v}from"./context-Ji7921OT.js";import"../index-DJ8Cofev.js";import"../modules/shiki-Czx2DoIt.js";const $={class:"h-full w-full"},k=["src"],B=m({__name:"iframe",props:{url:{},scale:{}},setup(t){const r=t,s=u(()=>`${1/(r.scale||1)*100}%`);return(e,c)=>(n(),p("div",$,[a("div",{relative:"",style:l({width:s.value,height:s.value})},[a("iframe",{id:"frame",class:"w-full h-full",src:e.url,style:l(e.scale?{transform:`scale(${e.scale})`,transformOrigin:"top left"}:{})},null,12,k)],4)]))}}),b={__name:"slides.md__slidev_17",setup(t){const{$slidev:r,$nav:s,$clicksContext:e,$clicks:c,$page:g,$renderContext:C,$frontmatter:i}=h();return e.setup(),(P,w)=>(n(),f(B,d(_(o(v)(o(i),16))),null,16))}};export{b as default};