(this["webpackJsonpmonsol-app"]=this["webpackJsonpmonsol-app"]||[]).push([[0],{28:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t(9),r=t.n(c),s=(t(28),t(29),t(1)),l=function(){return Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"/#",children:"UserApp"}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(s.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/#",children:"Home"})})})})]})})},i=t(23),o=t(10),m=t(13),j=t(20),d=t.n(j),b=t(21),u=t(11),h=t(40),O=t(38),x=t(39),p=function(e){var a=e.user,t=e.removeUser,n=e.editUser;return Object(s.jsx)("div",{className:"col-12 col-md-6 col-lg-3",children:Object(s.jsx)("div",{className:"card card-width",children:Object(s.jsxs)("div",{className:"card-body d-flex flex-column",children:[Object(s.jsxs)("h5",{className:"card-title",children:[a.name," ",a.lastname]}),Object(s.jsx)("p",{className:"card-text",children:a.email}),Object(s.jsxs)("div",{className:"d-flex",children:[Object(s.jsx)("button",{className:"btn btn-primary me-auto",onClick:function(){return n(a.id)},children:"Editar"}),Object(s.jsx)("button",{className:"btn btn-danger ms-auto",onClick:function(){return t(a.id,a.name)},children:"Eliminar"})]})]})})})},v=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(!1),l=Object(u.a)(r,2),j=l[0],v=l[1],f=Object(n.useState)(!1),g=Object(u.a)(f,2),N=g[0],C=g[1],y=Object(n.useState)({id:0,name:"",lastname:"",email:""}),w=Object(u.a)(y,2),E=w[0],k=w[1],S=Object(n.useState)({id:0,name:"",lastname:"",email:""}),B=Object(u.a)(S,2),G=B[0],L=B[1],I=function(){var e=Object(b.a)(d.a.mark((function e(){var a,t,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://randomuser.me/api/?inc=email,name&results=20");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,n=t.results,r=n.map((function(e){return{id:999999*Math.random(),name:e.name.first,lastname:e.name.last,email:e.email}})),c(r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){return I()}),[]);var A=function(){return v(!1)},H=function(){return C(!1)},U=function(e){var a,t=999999*Math.random();L(Object(m.a)(Object(m.a)({},G),{},(a={},Object(o.a)(a,e.target.name,e.target.value),Object(o.a)(a,"id",t),a)))},M=function(e,a){window.confirm("\xbfEst\xe1 seguro de que desea eliminar a "+a+"?")&&c((function(a){return a.filter((function(a){return a.id!==e}))}))},F=function(e){var a=t.filter((function(a){return a.id===e}));k(a[0]),C(!0)},T=function(e){k(Object(m.a)(Object(m.a)({},E),{},Object(o.a)({},e.target.name,e.target.value)))};return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"d-flex",children:Object(s.jsx)(h.a,{variant:"success",className:"ms-auto",onClick:function(){return v(!0)},children:"Crear usuario"})}),Object(s.jsx)("div",{className:"py-3 row g-3",children:t.map((function(e){return Object(s.jsx)(p,{user:e,removeUser:M,editUser:F},e.id)}))}),Object(s.jsxs)(O.a,{show:j,onHide:A,children:[Object(s.jsx)(O.a.Header,{children:Object(s.jsx)(O.a.Title,{children:"Nuevo usuario"})}),Object(s.jsxs)(O.a.Body,{children:[Object(s.jsxs)(x.a.Group,{className:"mb-3",controlId:"formBasicEName",children:[Object(s.jsx)(x.a.Label,{children:"Nombre"}),Object(s.jsx)(x.a.Control,{type:"text",name:"name",placeholder:"Nombre",value:G.name,onChange:U})]}),Object(s.jsxs)(x.a.Group,{className:"mb-3",controlId:"formBasicLastname",children:[Object(s.jsx)(x.a.Label,{children:"Apellidos"}),Object(s.jsx)(x.a.Control,{type:"text",name:"lastname",placeholder:"Apellidos",value:G.lastname,onChange:U})]}),Object(s.jsxs)(x.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(s.jsx)(x.a.Label,{children:"Email"}),Object(s.jsx)(x.a.Control,{type:"email",name:"email",placeholder:"E-Mail",value:G.email,onChange:U})]})]}),Object(s.jsxs)(O.a.Footer,{children:[Object(s.jsx)(h.a,{variant:"primary",onClick:function(){G.name.trim().length>0&&G.lastname.trim().length>0&&G.email.trim().length>0?(c([G].concat(Object(i.a)(t))),A()):window.confirm("No puedes dejar campos vacios!"),L({id:0,name:"",lastname:"",email:""})},children:"Guardar"}),Object(s.jsx)(h.a,{variant:"danger",onClick:A,children:"Cancelar"})]})]}),Object(s.jsxs)(O.a,{show:N,onHide:H,children:[Object(s.jsx)(O.a.Header,{children:Object(s.jsx)(O.a.Title,{children:"Nuevo usuario"})}),Object(s.jsxs)(O.a.Body,{children:[Object(s.jsxs)(x.a.Group,{className:"mb-3",controlId:"formBasicEName",children:[Object(s.jsx)(x.a.Label,{children:"Nombre"}),Object(s.jsx)(x.a.Control,{type:"text",name:"name",placeholder:"Nombre",value:E.name,onChange:T})]}),Object(s.jsxs)(x.a.Group,{className:"mb-3",controlId:"formBasicLastname",children:[Object(s.jsx)(x.a.Label,{children:"Apellidos"}),Object(s.jsx)(x.a.Control,{type:"text",name:"lastname",placeholder:"Apellidos",value:E.lastname,onChange:T})]}),Object(s.jsxs)(x.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(s.jsx)(x.a.Label,{children:"Email"}),Object(s.jsx)(x.a.Control,{type:"email",name:"email",placeholder:"E-Mail",value:E.email,onChange:T})]})]}),Object(s.jsxs)(O.a.Footer,{children:[Object(s.jsx)(h.a,{variant:"primary",onClick:function(){return e=E.id,void(E.name.trim().length>0&&E.lastname.trim().length>0&&E.email.trim().length>0?(t.map((function(a){return a.id===e&&(a.name=E.name,a.lastname=E.lastname,a.email=E.email),a})),H()):window.confirm("No puedes dejar campos vacios!"));var e},children:"Guardar"}),Object(s.jsx)(h.a,{variant:"danger",onClick:H,children:"Cancelar"})]})]})]})},f=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(l,{}),Object(s.jsx)("div",{className:"container py-3",children:Object(s.jsx)(v,{})})]})},g=document.querySelector("#root");r.a.render(Object(s.jsx)(f,{}),g)}},[[35,1,2]]]);
//# sourceMappingURL=main.eccfd733.chunk.js.map