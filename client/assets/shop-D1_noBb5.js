import{w as j}from"./with-props-OWzC9nJr.js";import{r as b,w as f,l as e}from"./chunk-K6AXKMTT-OGq6qUHK.js";import{p as w,s}from"./shoppingCardTypes-BmLKb1c-.js";import{C as c,b as d,c as o,a as t,d as m}from"./card-BjEA0d4g.js";import{B as n}from"./button-DbPpZOYA.js";import{b as g}from"./shoppingCardApi-WrCVM7t9.js";import"./app-Dj1F3Ojs.js";import"./utils-CytzSlOG.js";const B=j(function(){const[a,p]=b.useState([]),u=f(),r=l=>a.some(h=>h.id===l.id),i=l=>{r(l)?p(a.filter(h=>h.id!==l.id)):p([...a,l])},x=()=>{g(a),p([]),u(!0)};return e.jsxs("div",{className:"grid grid-cols-9",children:[e.jsx("div",{className:"col-span-4",children:e.jsx("img",{src:w,className:"object-cover  w-auto h-screen",alt:"SleepSync Poster"})}),e.jsxs("div",{className:"flex flex-col p-10  col-span-5",children:[e.jsx("div",{className:"my-10",children:e.jsxs(c,{className:`h-full col-span-3 cursor-pointer ${r(s.bundle)?"border-2 border-blue-500":""}`,onClick:()=>{i(s.bundle)},children:[e.jsx(d,{children:e.jsx(o,{children:"SleepSync Bundle"})}),e.jsx(t,{children:e.jsx("p",{className:"mt-4",children:"Hol dir alles in einem! Lampe, Armband und App für deinen optimalen Schlaf."})}),e.jsxs(m,{className:"justify-between",children:[e.jsxs("div",{children:[s.bundle.price,"€"]}),e.jsx(n,{size:"sm",children:r(s.bundle)?"Ausgewählt":"Auswählen"})]})]})}),e.jsxs("div",{className:"grid grid-cols-3 gap-5",children:[e.jsxs(c,{className:`h-full border-2 border-white shadow-none  cursor-pointer ${r(s.lampe)?" border-blue-500":""}`,onClick:()=>i(s.lampe),children:[e.jsx(d,{children:e.jsx(o,{children:s.lampe.name})}),e.jsx(t,{className:"flex justify-center p-0  h-64",children:e.jsx("img",{src:s.lampe.image,alt:s.lampe.name,className:"object-cover rounded-xl  w-auto p-2"})}),e.jsxs(m,{className:"justify-between mt-2",children:[e.jsxs("div",{children:["€",s.lampe.price]}),e.jsx(n,{size:"sm",children:r(s.lampe)?"Ausgewählt":"Auswählen"})]})]}),e.jsxs(c,{className:`h-full border-2 border-white shadow-none  cursor-pointer ${r(s.armband)?" border-blue-500":""}`,onClick:()=>i(s.armband),children:[e.jsx(d,{children:e.jsx(o,{children:s.armband.name})}),e.jsx(t,{className:"flex justify-center p-0  h-64",children:e.jsx("img",{src:s.armband.image,alt:s.armband.name,className:"object-cover rounded-xl  w-auto p-2"})}),e.jsxs(m,{className:"justify-between mt-2",children:[e.jsxs("div",{children:["€",s.armband.price]}),e.jsx(n,{size:"sm",children:r(s.armband)?"Ausgewählt":"Auswählen"})]})]}),e.jsxs(c,{className:`h-full border-2 border-white shadow-none  cursor-pointer ${r(s.app)?" border-blue-500":""}`,onClick:()=>i(s.app),children:[e.jsx(d,{children:e.jsx(o,{children:s.app.name})}),e.jsx(t,{className:"flex justify-center p-0  h-64",children:e.jsx("img",{src:s.app.image,alt:s.app.name,className:"object-cover rounded-xl  w-auto p-2"})}),e.jsxs(m,{className:"justify-between mt-2",children:[e.jsxs("div",{children:["€",s.app.price]}),e.jsx(n,{size:"sm",children:r(s.app)?"Ausgewählt":"Auswählen"})]})]})]}),a.length>0?e.jsx(n,{className:"mt-5 hover:bg-green-900",onClick:x,children:"Zum Warenkorb hinzufügen"}):""]})]})});export{B as default};
