(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[0],{106:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(43),a=n(3),c="SEND-MESSAGE",s={messages:[{id:1,message:"Hi!"},{id:2,message:"How are you?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}],dialogs:[{id:1,name:"Dimych"},{id:2,name:"\u0416\u0435\u043d\u044f"},{id:3,name:"\u041d\u0430\u0441\u0442\u044f"},{id:4,name:"\u0412\u0438\u043a\u0430"},{id:5,name:"\u0410\u0440\u0442\u0443\u0440"}]},i=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},118:function(e,t,n){},119:function(e,t,n){"use strict";t.a=n.p+"static/media/user.a6143582.png"},12:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o}));var r=n(89),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"4671fea4-05ed-4a2e-8c4b-b53db88d9def"}}),c={requestUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return s.getProfile(e)}},s={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile/",e)}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},o={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},135:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__Jz5GM",selectedPage:"Users_selectedPage__SUnjA"}},17:function(e,t,n){e.exports={nav:"Navbar_nav___xomr",item:"Navbar_item__2vQqa",activeLink:"Navbar_activeLink__1_1Ix"}},245:function(e,t,n){},251:function(e,t,n){},252:function(e,t,n){},253:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,299)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},a=n(11),c=n(8),s=n.n(c),i=n(15),o=n(3),u=n(26),l=n(12),d="samurai-network/auth/SET_USER_DATA",j="samurai-network/auth/GET_CAPTCHA_URL_SUCCESS",f={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},p=function(e,t,n,r){return{type:d,payload:{userId:e,email:t,login:n,isAuth:r}}},b=function(e){return{type:j,payload:{captchaUrl:e}}},h=function(){return function(){var e=Object(i.a)(s.a.mark((function e(t){var n,r,a,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.login,i=r.email,t(p(a,i,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(){return function(){var e=Object(i.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(b(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:case j:return Object(o.a)(Object(o.a)({},e),t.payload);default:return e}},m=n(106),v=n(96),x={},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;return e},P=n(43),C="FOLLOW",S="UNFOLLOW",y="SET_USERS",_="SET_CURRENT_PAGE",k="SET_TOTAL_USERS_COUNT",U="TOGGLE_IS_FETCHING",I="TOGGLE_IS_FOLLOWING_PROGRESS",E={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},N=function(e){return{type:C,userId:e}},L=function(e){return{type:S,userId:e}},T=function(e){return{type:U,isFetching:e}},F=function(e,t){return{type:I,isFetching:e,userId:t}},A=function(){var e=Object(i.a)(s.a.mark((function e(t,n,r,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(F(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(F(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(o.a)(Object(o.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(o.a)(Object(o.a)({},e),{},{followed:!0}):e}))});case S:return Object(o.a)(Object(o.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(o.a)(Object(o.a)({},e),{},{followed:!1}):e}))});case y:return Object(o.a)(Object(o.a)({},e),{},{users:t.users});case _:return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.currentPage});case k:return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.count});case U:return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case I:return Object(o.a)(Object(o.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(P.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},M=n(132),G=n(131),R="INITIALIZED_SUCCESS",D={initialized:!1},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(o.a)(Object(o.a)({},e),{},{initialized:!0});default:return e}},H=Object(a.c)({profilePage:v.b,dialogsPage:m.a,sidebarPage:w,usersPage:z,auth:g,form:G.a,app:B}),q=Object(a.e)(H,Object(a.a)(M.a));window.store=q;var Y=q,V=n(0),J=n.n(V),W=n(49),X=n.n(W),Z=(n(118),n(35)),K=n(36),Q=n(38),$=n(37),ee=(n(245),n(17)),te=n.n(ee),ne=n(13),re=n(1),ae=function(){return Object(re.jsxs)("nav",{className:te.a.nav,children:[Object(re.jsx)("div",{className:te.a.item,children:Object(re.jsx)(ne.b,{to:"/profile",activeClassName:te.a.activeLink,children:"Profile"})}),Object(re.jsx)("div",{className:"".concat(te.a.item," ").concat(te.a.active),children:Object(re.jsx)(ne.b,{to:"/dialogs",activeClassName:te.a.activeLink,children:"Messages"})}),Object(re.jsx)("div",{className:te.a.item,children:Object(re.jsx)(ne.b,{to:"/news",activeClassName:te.a.activeLink,children:"News"})}),Object(re.jsx)("div",{className:te.a.item,children:Object(re.jsx)(ne.b,{to:"/users",activeClassName:te.a.activeLink,children:"Users"})}),Object(re.jsx)("div",{className:te.a.item,children:Object(re.jsx)(ne.b,{to:"/music",activeClassName:te.a.activeLink,children:"Music"})}),Object(re.jsx)("div",{className:te.a.item,children:Object(re.jsx)(ne.b,{to:"/settings",activeClassName:te.a.activeLink,children:"Settings"})})]})},ce=n(10),se=(n(251),function(e){return Object(re.jsx)("div",{children:"Music"})}),ie=(n(252),function(e){return Object(re.jsx)("div",{children:"News"})}),oe=(n(253),function(e){return Object(re.jsx)("div",{children:"Settings"})}),ue=n(16),le=n(44),de=n(68),je=n(97),fe=n(71),pe=n.n(fe),be=n(134),he=n.n(be),Oe=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,c=e.portionSize,s=void 0===c?10:c,i=Math.ceil(t/n),o=[],u=1;u<=i;u++)o.push(u);var l=Math.ceil(i/s),d=Object(V.useState)(1),j=Object(je.a)(d,2),f=j[0],p=j[1],b=(f-1)*s+1,h=f*s;return Object(re.jsxs)("div",{className:pe.a.paginator,children:[f>1&&Object(re.jsx)("button",{onClick:function(){p(f-1)},children:" PREV "}),o.filter((function(e){return e>=b&&e<=h})).map((function(e){return Object(re.jsx)("span",{className:he()(Object(de.a)({},pe.a.selectedPage,r===e),pe.a.pageNumber),onClick:function(t){a(e)},children:e},e)})),l>f&&Object(re.jsx)("button",{onClick:function(){p(f+1)},children:" NEXT "})]})},ge=n(135),me=n.n(ge),ve=n(119),xe=(n(89),function(e){var t=e.user,n=e.followingInProgress,r=e.follow,a=e.unfollow;return Object(re.jsxs)("div",{children:[Object(re.jsxs)("span",{children:[Object(re.jsx)("div",{children:Object(re.jsx)(ne.b,{to:"/profile/"+t.id,children:Object(re.jsx)("img",{src:null!=t.photos.small?t.photos.small:ve.a,className:me.a.userPhoto})})}),Object(re.jsx)("div",{children:t.followed?Object(re.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Unfollow"}):Object(re.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Follow"})})]}),Object(re.jsxs)("span",{children:[Object(re.jsxs)("span",{children:[Object(re.jsx)("div",{children:t.name}),Object(re.jsx)("div",{children:t.status})]}),Object(re.jsxs)("span",{children:[Object(re.jsx)("div",{children:"u.location.country"}),Object(re.jsx)("div",{children:"u.location.city"})]})]})]})}),we=["currentPage","totalUsersCount","pageSize","onPageChanged"],Pe=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,c=Object(le.a)(e,we);return Object(re.jsxs)("div",{children:[Object(re.jsx)(Oe,{currentPage:t,onPageChanged:a,totalItemsCount:n,pageSize:r}),Object(re.jsx)("div",{children:c.users.map((function(e){return Object(re.jsx)(xe,{user:e,followingInProgress:c.followingInProgress,follow:c.follow,unfollow:c.unfollow},e.id)}))})]})},Ce=n(67),Se=n(136),ye=Object(Se.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),_e=function(e){return e.usersPage.pageSize},ke=function(e){return e.usersPage.totalUsersCount},Ue=function(e){return e.usersPage.currentPage},Ie=function(e){return e.usersPage.isFetching},Ee=function(e){return e.usersPage.followingInProgress},Ne=function(e){Object(Q.a)(n,e);var t=Object($.a)(n);function n(){var e;Object(Z.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.requestUsers(t,e.props.pageSize),e.props.setCurrentPage(t)},e}return Object(K.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(re.jsxs)(re.Fragment,{children:[this.props.isFetching?Object(re.jsx)(Ce.a,{}):null,Object(re.jsx)(Pe,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(J.a.Component),Le=Object(a.d)(Object(ue.b)((function(e){return{users:ye(e),pageSize:_e(e),totalUsersCount:ke(e),currentPage:Ue(e),isFetching:Ie(e),followingInProgress:Ee(e)}}),{follow:function(e){return function(){var t=Object(i.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:A(n,e,l.d.follow.bind(e),N);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(i.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:A(n,e,l.d.unfollow.bind(e),L);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:function(e){return{type:_,currentPage:e}},toggleFollowingProgress:F,requestUsers:function(e,t){return function(){var n=Object(i.a)(s.a.mark((function n(r){var a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(T(!0)),n.next=3,l.d.requestUsers(e,t);case 3:a=n.sent,r(T(!1)),r((s=a.items,{type:y,users:s})),r((c=a.totalCount,{type:k,count:c}));case 7:case"end":return n.stop()}var c,s}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Ne),Te=n(93),Fe=n.n(Te),Ae=function(e){return Object(re.jsxs)("header",{className:Fe.a.header,children:[Object(re.jsx)("img",{src:"https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg",alt:""}),Object(re.jsx)("div",{className:Fe.a.loginBlock,children:e.isAuth?Object(re.jsxs)("div",{children:[e.login," - ",Object(re.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(re.jsx)(ne.b,{to:"/login",children:"Login"})})]})},ze=function(e){Object(Q.a)(n,e);var t=Object($.a)(n);function n(){return Object(Z.a)(this,n),t.apply(this,arguments)}return Object(K.a)(n,[{key:"render",value:function(){return Object(re.jsx)(Ae,Object(o.a)({},this.props))}}]),n}(J.a.Component),Me=Object(ue.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.logout();case 2:0===e.sent.data.resultCode&&t(p(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ze),Ge=n(90),Re=n(130),De=n(65),Be=n(48),He=n(50),qe=n.n(He),Ye=Object(Re.a)({form:"login"})((function(e){return Object(re.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(re.jsx)("div",{children:Object(re.jsx)(Ge.a,{placeholder:"Email",name:"email",component:Be.a,validate:[De.b]})}),Object(re.jsx)("div",{children:Object(re.jsx)(Ge.a,{placeholder:"Password",name:"password",component:Be.a,validate:[De.b],type:"password"})}),Object(re.jsxs)("div",{children:[Object(re.jsx)(Ge.a,{type:"checkbox",name:"rememberMe",component:Be.a})," remember me"]}),Object(re.jsx)("div",{children:e.captchaUrl&&Object(re.jsx)("img",{src:e.captchaUrl,alt:""})}),Object(re.jsx)("div",{children:e.captchaUrl&&Object(re.jsx)(Ge.a,{placeholder:"Symbols from image",validate:[De.b],name:"captcha",component:Be.a})}),e.error&&Object(re.jsx)("div",{className:qe.a.formSummaryError,children:e.error}),Object(re.jsx)("div",{children:Object(re.jsx)("button",{children:"Login"})})]})})),Ve=Object(ue.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var a=Object(i.a)(s.a.mark((function a(c){var i,o;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.login(e,t,n,r);case 2:0===(i=a.sent).data.resultCode?c(h()):(10===i.data.resultCode&&c(O()),o=i.data.messages.length>0?i.data.messages[0]:"Some error",c(Object(u.a)("login",{_error:o})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(re.jsx)(ce.a,{to:"/profile"}):Object(re.jsxs)("div",{children:[Object(re.jsx)("h1",{children:"Login"}),Object(re.jsx)(Ye,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})]})})),Je=J.a.lazy((function(){return n.e(4).then(n.bind(null,301))})),We=J.a.lazy((function(){return n.e(3).then(n.bind(null,300))})),Xe=function(e){Object(Q.a)(n,e);var t=Object($.a)(n);function n(){return Object(Z.a)(this,n),t.apply(this,arguments)}return Object(K.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(re.jsxs)("div",{className:"app-wrapper",children:[Object(re.jsx)(Me,{}),Object(re.jsx)(ae,{}),Object(re.jsxs)("div",{className:"app-wrapper-content",children:[Object(re.jsx)(ce.b,{path:"/profile/:userId?",render:function(){return Object(re.jsx)(J.a.Suspense,{fallback:Object(re.jsx)("div",{children:"Loading..."}),children:Object(re.jsx)(We,{})})}}),Object(re.jsx)(ce.b,{path:"/dialogs",render:function(){return Object(re.jsx)(J.a.Suspense,{fallback:Object(re.jsx)("div",{children:"Loading..."}),children:Object(re.jsx)(Je,{})})}}),Object(re.jsx)(ce.b,{path:"/users",render:function(){return Object(re.jsx)(Le,{})}}),Object(re.jsx)(ce.b,{path:"/login",render:function(){return Object(re.jsx)(Ve,{})}}),Object(re.jsx)(ce.b,{path:"/music",component:se}),Object(re.jsx)(ce.b,{path:"/news",component:ie}),Object(re.jsx)(ce.b,{path:"/settings",component:oe})]})]}):Object(re.jsx)(Ce.a,{})}}]),n}(V.Component),Ze=Object(ue.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(h()).then((function(){e({type:R})}))}}})(Xe),Ke=function(e){return Object(re.jsx)(ne.a,{children:Object(re.jsx)(ue.a,{store:Y,children:Object(re.jsx)(J.a.StrictMode,{children:Object(re.jsx)(Ze,{})})})})};X.a.render(Object(re.jsx)(Ke,{}),document.getElementById("root")),X.a.render(Object(re.jsx)(J.a.StrictMode,{children:Object(re.jsx)(Ke,{})}),document.getElementById("root")),r()},48:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return b}));var r=n(3),a=n(44),c=n(90),s=n(50),i=n.n(s),o=n(1),u=["input","meta","child"],l=["input","meta","child"],d=["input","meta","child"],j=function(e){e.input;var t=e.meta,n=(e.child,Object(a.a)(e,u)),r=t.touched&&t.error;return Object(o.jsxs)("div",{className:i.a.formControl+" "+(r?i.a.error:""),children:[Object(o.jsx)("div",{children:n.children}),r&&Object(o.jsx)("span",{children:t.error})]})},f=function(e,t,n,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(c.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a},s))," ",i]})},p=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,l));return Object(o.jsxs)(j,Object(r.a)(Object(r.a)({},e),{},{children:[" ",Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))," "]}))},b=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,d));return Object(o.jsxs)(j,Object(r.a)(Object(r.a)({},e),{},{children:[" ",Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))," "]}))}},50:function(e,t,n){e.exports={formControl:"FormsControls_formControl__O8r0Z",error:"FormsControls_error__2ObGf",formSummaryError:"FormsControls_formSummaryError__1OVVL"}},65:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},67:function(e,t,n){"use strict";var r=n.p+"static/media/loading.7f681fed.svg",a=n(1);t.a=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r})})}},71:function(e,t,n){e.exports={paginator:"Paginator_paginator__3xOES",pageNumber:"Paginator_pageNumber__1NVup",selectedPage:"Paginator_selectedPage__9Rs7X"}},93:function(e,t,n){e.exports={header:"Header_header__30c2y",loginBlock:"Header_loginBlock___S5G1"}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return w}));var r=n(8),a=n.n(r),c=n(15),s=n(43),i=n(3),o=n(26),u=n(12),l="ADD-POST",d="SET_USER_PROFILE",j="SET_STATUS",f="DELETE_POST",p="SAVE_PHOTO_SUCCESS",b={posts:[{id:1,message:"Hi, how are you?",likesCount:5},{id:2,message:"It's my first post",likesCount:10},{id:3,message:"Yo",likesCount:5},{id:4,message:"Yo",likesCount:5},{id:5,message:"Yo",likesCount:5}],profile:null,status:""},h=function(e){return{type:l,newPostText:e}},O=function(e){return{type:j,status:e}},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.d.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:d,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(O(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:p,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,u.b.saveProfile(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=8;break}n(g(c)),t.next=10;break;case 8:return n(Object(o.a)("edit-profile",{_error:s.data.messages[0]})),t.abrupt("return",Promise.reject(s.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n]),newPostText:""});case j:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case d:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case f:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case p:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[293,1,2]]]);
//# sourceMappingURL=main.28673312.chunk.js.map