(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{117:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(32),s=a.n(r),o=(a(84),a(85),a(10)),i=a(29),j=a.n(i),l="https://booksystem66.herokuapp.com",d=a(3),b=Object(c.createContext)();function u(e){var t=Object(c.useState)([]),a=Object(o.a)(t,2),n=a[0],r=a[1];Object(c.useEffect)((function(){j.a.get(l).then((function(e){var t=e.data;return r(t)})).catch((function(e){console.log(e)}))}),[]);var s={books:n,setBooks:r};return Object(d.jsx)(b.Provider,{value:s,children:e.children})}var h=a(134),p=a(131),O=a(130);var x=function(){var e=Object(c.useContext)(b).books;return Object(d.jsx)("div",{className:"books",children:Object(d.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,className:"book-table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"ID"}),Object(d.jsx)("th",{children:"Book Name"}),Object(d.jsx)("th",{children:"Price"})]})}),Object(d.jsx)("tbody",{children:e.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.id}),Object(d.jsxs)("td",{children:[e.name," "]}),Object(d.jsxs)("td",{children:[e.price," "]})]},t)}))})]})})},m=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(),s=Object(o.a)(r,2),i=s[0],b=s[1],u=Object(c.useState)(),O=Object(o.a)(u,2),m=O[0],f=O[1];return Object(d.jsxs)("div",{className:"addBook-wrapper",children:[Object(d.jsxs)(h.a,{onSubmit:function(e){j.a.post("".concat(l,"/addbook"),{name:a,id:m,price:i}).then((function(e){console.log(e)}),(function(e){console.log(e)})),b(""),f(""),n("")},children:[Object(d.jsxs)(h.a.Group,{controlId:"formBasicName",children:[Object(d.jsx)(h.a.Label,{style:{fontSize:24},children:"Book ID"}),Object(d.jsx)(h.a.Control,{size:"lg",onChange:function(e){f(e.target.value)},name:"ID",type:"text",placeholder:"Enter Book ID",value:m,required:!0})]}),Object(d.jsxs)(h.a.Group,{controlId:"formBasicName",children:[Object(d.jsx)(h.a.Label,{style:{fontSize:24},children:"Book Name"}),Object(d.jsx)(h.a.Control,{size:"lg",onChange:function(e){n(e.target.value)},name:"name",type:"text",placeholder:"Enter Book name",value:a,required:!0})]}),Object(d.jsxs)(h.a.Group,{controlId:"formBasicPrice",children:[Object(d.jsx)(h.a.Label,{style:{fontSize:24},children:"Price"}),Object(d.jsx)(h.a.Control,{size:"lg",onChange:function(e){b(e.target.value)},name:"price",type:"number",min:"0",step:"0.01",placeholder:"Enter Book price",value:i,required:!0})]}),Object(d.jsx)(p.a,{variant:"primary",type:"submit",children:"Add Book"})]}),Object(d.jsx)(x,{})]})},f=a(136),v=a(135),g=a(73),w=(a(67),g.a.initializeApp({apiKey:"AIzaSyDEJcszPMHpdHA3doLIe81ty-HuJ2XMtvk",authDomain:"booksystem-5f35c.firebaseapp.com",projectId:"booksystem-5f35c",storageBucket:"booksystem-5f35c.appspot.com",messagingSenderId:"904296891980",appId:"1:904296891980:web:489161fc8dc2fa998616e9"})),k=w.auth(),y=n.a.createContext();function S(){return Object(c.useContext)(y)}var N=function(e){var t=Object(c.useState)(),a=Object(o.a)(t,2),n=a[0],r=a[1];Object(c.useEffect)((function(){return k.onAuthStateChanged((function(e){r(e)}))}),[]);var s={currentUser:n,signup:function(e,t){return k.createUserWithEmailAndPassword(e,t)},login:function(e,t){return k.signInWithEmailAndPassword(e,t)},logout:function(){return k.signOut()},resetPassword:function(e){return k.sendPasswordResetEmail(e)},updateEmail:function(e){return n.updateEmail(e)},updatePassword:function(e){return n.updatePassword(e)}};return Object(d.jsx)(y.Provider,{value:s,children:e.children})},C=a(77),L=a.n(C),B=a(132),P=a(14),I=a(18),D=a(76),E=a.n(D);var R=function(){var e=Object(P.g)(),t=S(),a=(t.currentUser,t.logout),c=Object(B.a)(),n=Object(o.a)(c,3),r=n[0],s=(n[1],n[2]);return Object(d.jsx)("div",{className:"nav",children:Object(d.jsxs)(f.a,{bg:"dark",variant:"dark",className:"navbar",children:[Object(d.jsxs)(f.a.Brand,{href:"/",children:[Object(d.jsx)(E.a,{})," Saul's Book System"]}),Object(d.jsxs)(v.a,{className:"mr-auto",children:[Object(d.jsx)(v.a.Link,{href:"/",children:"Home"}),Object(d.jsx)(v.a.Link,{as:I.b,to:"/add",children:"Add"}),Object(d.jsx)(v.a.Link,{href:"/update",children:"Update"}),Object(d.jsx)(v.a.Link,{href:"/delete",children:"Delete"})]}),Object(d.jsx)(v.a,{children:r.user?Object(d.jsxs)("div",{className:"icons",children:[Object(d.jsxs)(v.a.Link,{href:"/dashboard",style:{color:"whitesmoke"},children:[Object(d.jsx)(L.a,{})," ",r.user.email]}),Object(d.jsx)(v.a.Link,{href:"/",onClick:function(){s("user",{path:"/"}),a(),e.push("/login")},children:"Log Out"})]}):Object(d.jsxs)("div",{className:"icons",children:[Object(d.jsx)(v.a.Link,{href:"/login",children:"Login"}),Object(d.jsx)(v.a.Link,{href:"/signup",children:"SignUp"})]})})]})})},U=a.p+"static/media/Crud.17f86290.png",G=a.p+"static/media/auth.8359df1b.png";var A=function(){return Object(d.jsxs)("div",{className:"home-wrapper",children:[Object(d.jsx)("h1",{children:"Saul's Book System"}),Object(d.jsxs)("p",{children:["This project contains two parts:",Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Classic CRUD Demonstration"}),Object(d.jsx)("li",{children:"Industrial Standard Registration/Authentication Practice"})]})]}),Object(d.jsx)("img",{src:U,alt:"CRUD"}),Object(d.jsx)("span",{children:" + "}),Object(d.jsx)("img",{src:G,alt:"AUTH"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:"For the CRUD part, user can Create, Read, Update and Delete book info."}),Object(d.jsx)("p",{children:"It is built on full MERN tech stack, namely, MongoDB, Express, React and Node.JS. "}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:"The Registration/Authentication part uses Firebase Authentication, including SignUp, Login with email/password, and Google Auth0 API."}),Object(d.jsx)("p",{children:"It also allows the user to update their password in the dashboard and reset the password if password has been forgotten."}),Object(d.jsx)("p",{children:"Also private routes have been setup for dashboard and update profile components. Login is needed for accessing these private routes."}),Object(d.jsx)("p",{children:"Used tech includes, but not limited to, MERN, axios, react-router-dom, material-ui, react-bootstrap, firebase, google auth0, react-cookies, etc."})]})};a(110);var z=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(),s=Object(o.a)(r,2),i=s[0],b=s[1],u=Object(c.useState)(),O=Object(o.a)(u,2),m=O[0],f=O[1];return Object(d.jsxs)("div",{className:"updateBook-wrapper",children:[Object(d.jsxs)(h.a,{onSubmit:function(e){j.a.put("".concat(l,"/update"),{name:a,id:m,price:i}).then((function(e){console.log(e)}),(function(e){console.log(e)}))},children:[Object(d.jsxs)(h.a.Group,{controlId:"formBasicName",children:[Object(d.jsx)(h.a.Label,{style:{fontSize:24},children:"ID"}),Object(d.jsx)(h.a.Control,{size:"lg",onChange:function(e){f(e.target.value)},name:"name",type:"text",placeholder:"Enter the ID of the book you want to update",value:m,required:!0})]}),Object(d.jsxs)(h.a.Group,{controlId:"formBasicName",children:[Object(d.jsx)(h.a.Label,{style:{fontSize:24},children:"Book Name"}),Object(d.jsx)(h.a.Control,{size:"lg",onChange:function(e){n(e.target.value)},name:"name",type:"text",placeholder:"Enter new book name...",value:a,required:!0})]}),Object(d.jsxs)(h.a.Group,{controlId:"formBasicPrice",children:[Object(d.jsx)(h.a.Label,{style:{fontSize:24},children:"Price"}),Object(d.jsx)(h.a.Control,{size:"lg",onChange:function(e){b(e.target.value)},name:"price",type:"number",min:"0",step:"0.01",placeholder:"Enter new book price...",value:i,required:!0})]}),Object(d.jsx)(p.a,{variant:"primary",type:"submit",children:"Update Book"})]}),Object(d.jsx)(x,{})]})};var q=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(d.jsxs)("div",{className:"deleteBook-wrapper",children:[Object(d.jsxs)(h.a,{onSubmit:function(e){j.a.delete("".concat(l,"/delete"),{data:{id:a}}).then((function(e){console.log(e)}),(function(e){console.log(e)})),n("")},children:[Object(d.jsxs)(h.a.Group,{controlId:"formBasicID",children:[Object(d.jsx)(h.a.Label,{style:{fontSize:24},children:"Book ID"}),Object(d.jsx)(h.a.Control,{size:"lg",onChange:function(e){n(e.target.value)},name:"ID",type:"text",placeholder:"Enter Book ID to Delete...",value:a,required:!0})]}),Object(d.jsx)(p.a,{variant:"primary",type:"submit",children:"Delete Book"})]}),Object(d.jsx)(x,{})]})},F=a(22),T=a.n(F),H=a(31),J=a(138),M=a(137),W=a(58);var K=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=S().login,n=Object(c.useState)(""),r=Object(o.a)(n,2),s=r[0],i=r[1],j=Object(c.useState)(!1),l=Object(o.a)(j,2),b=l[0],u=l[1],O=Object(P.g)(),x=Object(B.a)(["user"]),m=Object(o.a)(x,2),f=(m[0],m[1]);function v(){return(v=Object(H.a)(T.a.mark((function c(n){return T.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n.preventDefault(),c.prev=1,i(""),u(!0),c.next=6,a(e.current.value,t.current.value).then((function(e){var t=e.user;f("user",t,{path:"/"})}));case 6:O.push("/dashboard"),c.next=14;break;case 9:c.prev=9,c.t0=c.catch(1),console.log(c.t0.message),u(!1),i(c.t0.message);case 14:case"end":return c.stop()}}),c,null,[[1,9]])})))).apply(this,arguments)}return Object(d.jsxs)("div",{className:"login-wrapper",children:[Object(d.jsx)(J.a,{children:Object(d.jsxs)(J.a.Body,{children:[Object(d.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),s&&Object(d.jsx)(M.a,{variant:"danger",children:s}),Object(d.jsxs)(h.a,{onSubmit:function(e){return v.apply(this,arguments)},children:[Object(d.jsxs)(h.a.Group,{id:"email",children:[Object(d.jsx)(h.a.Label,{children:"Email"}),Object(d.jsx)(h.a.Control,{type:"email",ref:e,required:!0})]}),Object(d.jsxs)(h.a.Group,{id:"password",children:[Object(d.jsx)(h.a.Label,{children:"Password"}),Object(d.jsx)(h.a.Control,{type:"password",ref:t,required:!0})]}),Object(d.jsx)(p.a,{disabled:b,type:"submit",className:"w-100",children:"Log In"})]}),Object(d.jsx)("div",{className:"w-100 text-center mt-2",children:Object(d.jsx)(I.b,{to:"/forgot-password",children:"Forgot Password?"})})]})}),Object(d.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(d.jsx)(I.b,{to:"/signup",children:"Sign Up"})]}),Object(d.jsx)("div",{className:"w-100 text-center mt-2",children:Object(d.jsxs)("span",{children:["Login via ",Object(d.jsx)("a",{onClick:function(){var e=new W.a.auth.GoogleAuthProvider;W.a.auth().signInWithPopup(e).then((function(e){e.credential.accessToken;var t=e.user;f("user",t,{path:"/"})})).then((function(e){O.push("/dashboard")})).catch((function(e){console.log(e)}))},id:"gmail",children:"Gmail?"})]})})]})};var V=function(){var e=Object(c.useRef)(),t=S().resetPassword,a=Object(c.useState)(""),n=Object(o.a)(a,2),r=n[0],s=n[1],i=Object(c.useState)(!1),j=Object(o.a)(i,2),l=j[0],b=j[1],u=Object(c.useState)(""),O=Object(o.a)(u,2),x=O[0],m=O[1];function f(){return(f=Object(H.a)(T.a.mark((function a(c){return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),a.prev=1,m(""),s(""),b(!0),a.next=7,t(e.current.value);case 7:m("Check your inbox for futher instructions"),a.next=15;break;case 10:a.prev=10,a.t0=a.catch(1),console.log(a.t0.message),b(!1),s(a.t0.message);case 15:case"end":return a.stop()}}),a,null,[[1,10]])})))).apply(this,arguments)}return Object(d.jsxs)("div",{className:"forgetpassword-wrapper",children:[Object(d.jsx)(J.a,{children:Object(d.jsxs)(J.a.Body,{children:[Object(d.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),x&&Object(d.jsx)(M.a,{variant:"success",children:x}),r&&Object(d.jsx)(M.a,{variant:"danger",children:r}),Object(d.jsxs)(h.a,{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(d.jsxs)(h.a.Group,{id:"email",children:[Object(d.jsx)(h.a.Label,{children:"Email"}),Object(d.jsx)(h.a.Control,{type:"email",ref:e,required:!0})]}),Object(d.jsx)(p.a,{disabled:l,type:"submit",className:"w-100",children:"Reset Password"})]}),Object(d.jsx)("div",{className:"w-100 text-center mt-2",children:Object(d.jsx)(I.b,{to:"/login",children:"Login"})})]})}),Object(d.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(d.jsx)(I.b,{to:"/signup",children:"Sign Up"})]})]})},X=a(50),Q=a(78);function Y(e){var t=e.component,a=Object(Q.a)(e,["component"]),c=(S().currentUser,Object(B.a)()),n=Object(o.a)(c,2),r=n[0];n[1];return console.log(r.user.email),Object(d.jsx)(P.b,Object(X.a)(Object(X.a)({},a),{},{render:function(e){return r.user?Object(d.jsx)(t,Object(X.a)({},e)):Object(d.jsx)(P.a,{to:"/signup"})}}))}var Z=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1],r=S().logout,s=Object(P.g)(),i=Object(B.a)(),j=Object(o.a)(i,3),l=j[0],b=(j[1],j[2]),u=function(){var e=Object(H.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n("");try{b("user",{path:"/"}),r(),s.push("/login")}catch(t){n(t.message)}case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"dashboard-wrapper",children:[Object(d.jsx)(J.a,{children:Object(d.jsxs)(J.a.Body,{children:[Object(d.jsx)("h2",{className:"text-center mb-4",children:"Profile"}),a&&Object(d.jsx)(M.a,{variant:"danger",children:a}),Object(d.jsx)("strong",{children:"Email: "}),l.user.email,Object(d.jsx)(I.b,{to:"/update-profile",className:"btn btn-primary w-100 mt-3",children:"Update Profle"})]})}),Object(d.jsx)("div",{className:"w-100 text-center mt-2",children:Object(d.jsx)(p.a,{variant:"link",onClick:u,children:"Log Out"})})]})};var $=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),n=S(),r=n.currentUser,s=n.updateEmail,i=n.updatePassword,j=Object(c.useState)(""),l=Object(o.a)(j,2),b=l[0],u=l[1],O=Object(c.useState)(!1),x=Object(o.a)(O,2),m=x[0],f=x[1],v=Object(P.g)();return Object(d.jsxs)("div",{className:"updateprofile-wrapper",children:[Object(d.jsx)(J.a,{children:Object(d.jsxs)(J.a.Body,{children:[Object(d.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),b&&Object(d.jsx)(M.a,{variant:"danger",children:b}),Object(d.jsxs)(h.a,{onSubmit:function(c){if(c.preventDefault(),t.current.value!==a.current.value)return u("Passwords do not match");var n=[];f(!0),u(""),e.current.value!==r.email&&n.push(s(e.current.value)),t.current.value!==r.password&&n.push(i(t.current.value)),Promise.all(n).then((function(){v.push("/")})).catch((function(e){return u(e.message)})).finally((function(){return f(!1)}))},children:[Object(d.jsxs)(h.a.Group,{id:"email",children:[Object(d.jsx)(h.a.Label,{children:"Email"}),Object(d.jsx)(h.a.Control,{type:"email",ref:e,required:!0,defaultValue:r.email})]}),Object(d.jsxs)(h.a.Group,{id:"password",children:[Object(d.jsx)(h.a.Label,{children:"Password"}),Object(d.jsx)(h.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),Object(d.jsxs)(h.a.Group,{id:"password-confirmation",children:[Object(d.jsx)(h.a.Label,{children:"Password Confirmation"}),Object(d.jsx)(h.a.Control,{type:"password",ref:a,placeholder:"Leave blank to keep the same"})]}),Object(d.jsx)(p.a,{disabled:m,type:"submit",className:"w-100",children:"Update"})]})]})}),Object(d.jsx)("div",{className:"w-100 text-center mt-2",children:Object(d.jsx)(I.b,{to:"/dashboard",children:"Cancel"})})]})};var _=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),n=S().signup,r=Object(c.useState)(""),s=Object(o.a)(r,2),i=s[0],j=s[1],l=Object(c.useState)(!1),b=Object(o.a)(l,2),u=b[0],O=b[1],x=Object(P.g)();function m(){return(m=Object(H.a)(T.a.mark((function c(r){return T.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(r.preventDefault(),t.current.value===a.current.value){c.next=3;break}return c.abrupt("return",j("Passwords do not match"));case 3:return c.prev=3,j(""),O(!0),c.next=8,n(e.current.value,t.current.value);case 8:x.push("/dashboard"),c.next=16;break;case 11:c.prev=11,c.t0=c.catch(3),console.log(c.t0.message),O(!1),j(c.t0.message);case 16:case"end":return c.stop()}}),c,null,[[3,11]])})))).apply(this,arguments)}return Object(d.jsxs)("div",{className:"signup-wrapper",children:[Object(d.jsx)(J.a,{children:Object(d.jsxs)(J.a.Body,{children:[Object(d.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),i&&Object(d.jsx)(M.a,{variant:"danger",children:i}),Object(d.jsxs)(h.a,{onSubmit:function(e){return m.apply(this,arguments)},children:[Object(d.jsxs)(h.a.Group,{id:"email",children:[Object(d.jsx)(h.a.Label,{children:"Email"}),Object(d.jsx)(h.a.Control,{type:"email",ref:e,required:!0})]}),Object(d.jsxs)(h.a.Group,{id:"password",children:[Object(d.jsx)(h.a.Label,{children:"Password"}),Object(d.jsx)(h.a.Control,{type:"password",ref:t,required:!0})]}),Object(d.jsxs)(h.a.Group,{id:"password-confirmation",children:[Object(d.jsx)(h.a.Label,{children:"Password Confirmation"}),Object(d.jsx)(h.a.Control,{type:"password",ref:a,required:!0})]}),Object(d.jsx)(p.a,{disabled:u,type:"submit",className:"w-100",children:"Sign Up"})]})]})}),Object(d.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(d.jsx)(I.b,{to:"/login",children:"Log In"})]})]})};var ee=function(){return Object(d.jsx)(I.a,{children:Object(d.jsx)(N,{children:Object(d.jsxs)(u,{children:[Object(d.jsx)(R,{}),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(P.d,{children:[Object(d.jsx)(P.b,{path:"/BookSystem-React/add",component:m}),Object(d.jsx)(P.b,{path:"/update",component:z}),Object(d.jsx)(P.b,{path:"/delete",component:q}),Object(d.jsx)(P.b,{path:"/login",component:K}),Object(d.jsx)(P.b,{path:"/signup",component:_}),Object(d.jsx)(P.b,{path:"/forgot-password",component:V}),Object(d.jsx)(Y,{path:"/dashboard",component:Z}),Object(d.jsx)(Y,{path:"/update-profile",component:$}),Object(d.jsx)(P.b,{path:"/BookSystem-React",exact:!0,component:A})]})})]})})})},te=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,139)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))},ae=a(133);s.a.render(Object(d.jsx)(ae.a,{children:Object(d.jsx)(ee,{})}),document.getElementById("root")),te()},84:function(e,t,a){},85:function(e,t,a){}},[[117,1,2]]]);
//# sourceMappingURL=main.543c8d7a.chunk.js.map