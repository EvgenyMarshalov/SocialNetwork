(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[0],{104:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(42),a=n(5),c="SEND-MESSAGE",s={messages:[{id:1,message:"Hi!"},{id:2,message:"How are you?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}],dialogs:[{id:1,name:"Dimych"},{id:2,name:"\u0416\u0435\u043d\u044f"},{id:3,name:"\u041d\u0430\u0441\u0442\u044f"},{id:4,name:"\u0412\u0438\u043a\u0430"},{id:5,name:"\u0410\u0440\u0442\u0443\u0440"}]},i=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},116:function(e,t,n){},134:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__Jz5GM",selectedPage:"Users_selectedPage__SUnjA"}},15:function(e,t,n){e.exports={nav:"Navbar_nav___xomr",item:"Navbar_item__2vQqa",activeLink:"Navbar_activeLink__1_1Ix"}},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var r=n(89),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"4671fea4-05ed-4a2e-8c4b-b53db88d9def"}}),c={requestUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return s.getProfile(e)}},s={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},244:function(e,t,n){},250:function(e,t,n){},251:function(e,t,n){},252:function(e,t,n){},292:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,298)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},a=n(11),c=n(9),s=n.n(c),i=n(19),o=n(5),u=n(44),l=n(16),d="samurai-network/auth/SET_USER_DATA",j={userId:null,email:null,login:null,isAuth:!1},f=function(e,t,n,r){return{type:d,payload:{userId:e,email:t,login:n,isAuth:r}}},b=function(){return function(){var e=Object(i.a)(s.a.mark((function e(t){var n,r,a,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.login,i=r.email,t(f(a,i,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(o.a)(Object(o.a)({},e),t.payload);default:return e}},h=n(104),O=n(95),g={},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return e},v=n(42),x="FOLLOW",w="UNFOLLOW",P="SET_USERS",C="SET_CURRENT_PAGE",_="SET_TOTAL_USERS_COUNT",S="TOGGLE_IS_FETCHING",y="TOGGLE_IS_FOLLOWING_PROGRESS",k={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},I=function(e){return{type:x,userId:e}},N=function(e){return{type:w,userId:e}},E=function(e){return{type:S,isFetching:e}},L=function(e,t){return{type:y,isFetching:e,userId:t}},U=function(){var e=Object(i.a)(s.a.mark((function e(t,n,r,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(L(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(L(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(o.a)(Object(o.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(o.a)(Object(o.a)({},e),{},{followed:!0}):e}))});case w:return Object(o.a)(Object(o.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(o.a)(Object(o.a)({},e),{},{followed:!1}):e}))});case P:return Object(o.a)(Object(o.a)({},e),{},{users:t.users});case C:return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.currentPage});case _:return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.count});case S:return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case y:return Object(o.a)(Object(o.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(v.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},F=n(131),z=n(130),A="INITIALIZED_SUCCESS",M={initialized:!1},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(o.a)(Object(o.a)({},e),{},{initialized:!0});default:return e}},R=Object(a.c)({profilePage:O.b,dialogsPage:h.a,sidebarPage:m,usersPage:T,auth:p,form:z.a,app:G}),D=Object(a.e)(R,Object(a.a)(F.a));window.store=D;var B=D,q=n(0),Y=n.n(q),H=n(48),V=n.n(H),J=n(12),W=(n(116),n(34)),X=n(35),Z=n(37),K=n(36),Q=(n(244),n(15)),$=n.n(Q),ee=n(1),te=function(){return Object(ee.jsxs)("nav",{className:$.a.nav,children:[Object(ee.jsx)("div",{className:$.a.item,children:Object(ee.jsx)(J.b,{to:"/profile",activeClassName:$.a.activeLink,children:"Profile"})}),Object(ee.jsx)("div",{className:"".concat($.a.item," ").concat($.a.active),children:Object(ee.jsx)(J.b,{to:"/dialogs",activeClassName:$.a.activeLink,children:"Messages"})}),Object(ee.jsx)("div",{className:$.a.item,children:Object(ee.jsx)(J.b,{to:"/news",activeClassName:$.a.activeLink,children:"News"})}),Object(ee.jsx)("div",{className:$.a.item,children:Object(ee.jsx)(J.b,{to:"/users",activeClassName:$.a.activeLink,children:"Users"})}),Object(ee.jsx)("div",{className:$.a.item,children:Object(ee.jsx)(J.b,{to:"/music",activeClassName:$.a.activeLink,children:"Music"})}),Object(ee.jsx)("div",{className:$.a.item,children:Object(ee.jsx)(J.b,{to:"/settings",activeClassName:$.a.activeLink,children:"Settings"})})]})},ne=n(10),re=(n(250),function(e){return Object(ee.jsx)("div",{children:"Music"})}),ae=(n(251),function(e){return Object(ee.jsx)("div",{children:"News"})}),ce=(n(252),function(e){return Object(ee.jsx)("div",{children:"Settings"})}),se=n(13),ie=n(43),oe=n(67),ue=n(129),le=n(70),de=n.n(le),je=n(133),fe=n.n(je),be=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,c=e.portionSize,s=void 0===c?10:c,i=Math.ceil(t/n),o=[],u=1;u<=i;u++)o.push(u);var l=Math.ceil(i/s),d=Object(q.useState)(1),j=Object(ue.a)(d,2),f=j[0],b=j[1],p=(f-1)*s+1,h=f*s;return Object(ee.jsxs)("div",{className:de.a.paginator,children:[f>1&&Object(ee.jsx)("button",{onClick:function(){b(f-1)},children:" PREV "}),o.filter((function(e){return e>=p&&e<=h})).map((function(e){return Object(ee.jsx)("span",{className:fe()(Object(oe.a)({},de.a.selectedPage,r===e),de.a.pageNumber),onClick:function(t){a(e)},children:e},e)})),l>f&&Object(ee.jsx)("button",{onClick:function(){b(f+1)},children:" NEXT "})]})},pe=n(134),he=n.n(pe),Oe=n.p+"static/media/user.a6143582.png",ge=(n(89),function(e){var t=e.user,n=e.followingInProgress,r=e.follow,a=e.unfollow;return Object(ee.jsxs)("div",{children:[Object(ee.jsxs)("span",{children:[Object(ee.jsx)("div",{children:Object(ee.jsx)(J.b,{to:"/profile/"+t.id,children:Object(ee.jsx)("img",{src:null!=t.photos.small?t.photos.small:Oe,className:he.a.userPhoto})})}),Object(ee.jsx)("div",{children:t.followed?Object(ee.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Unfollow"}):Object(ee.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Follow"})})]}),Object(ee.jsxs)("span",{children:[Object(ee.jsxs)("span",{children:[Object(ee.jsx)("div",{children:t.name}),Object(ee.jsx)("div",{children:t.status})]}),Object(ee.jsxs)("span",{children:[Object(ee.jsx)("div",{children:"u.location.country"}),Object(ee.jsx)("div",{children:"u.location.city"})]})]})]})}),me=["currentPage","totalUsersCount","pageSize","onPageChanged"],ve=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,c=Object(ie.a)(e,me);return Object(ee.jsxs)("div",{children:[Object(ee.jsx)(be,{currentPage:t,onPageChanged:a,totalItemsCount:n,pageSize:r}),Object(ee.jsx)("div",{children:c.users.map((function(e){return Object(ee.jsx)(ge,{user:e,followingInProgress:c.followingInProgress,follow:c.follow,unfollow:c.unfollow},e.id)}))})]})},xe=n(66),we=n(135),Pe=Object(we.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Ce=function(e){return e.usersPage.pageSize},_e=function(e){return e.usersPage.totalUsersCount},Se=function(e){return e.usersPage.currentPage},ye=function(e){return e.usersPage.isFetching},ke=function(e){return e.usersPage.followingInProgress},Ie=function(e){Object(Z.a)(n,e);var t=Object(K.a)(n);function n(){var e;Object(W.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.requestUsers(t,e.props.pageSize),e.props.setCurrentPage(t)},e}return Object(X.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(ee.jsxs)(ee.Fragment,{children:[this.props.isFetching?Object(ee.jsx)(xe.a,{}):null,Object(ee.jsx)(ve,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(Y.a.Component),Ne=Object(a.d)(Object(se.b)((function(e){return{users:Pe(e),pageSize:Ce(e),totalUsersCount:_e(e),currentPage:Se(e),isFetching:ye(e),followingInProgress:ke(e)}}),{follow:function(e){return function(){var t=Object(i.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:U(n,e,l.c.follow.bind(e),I);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(i.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:U(n,e,l.c.unfollow.bind(e),N);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:function(e){return{type:C,currentPage:e}},toggleFollowingProgress:L,requestUsers:function(e,t){return function(){var n=Object(i.a)(s.a.mark((function n(r){var a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(E(!0)),n.next=3,l.c.requestUsers(e,t);case 3:a=n.sent,r(E(!1)),r((s=a.items,{type:P,users:s})),r((c=a.totalCount,{type:_,count:c}));case 7:case"end":return n.stop()}var c,s}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Ie),Ee=n(92),Le=n.n(Ee),Ue=function(e){return Object(ee.jsxs)("header",{className:Le.a.header,children:[Object(ee.jsx)("img",{src:"https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg",alt:""}),Object(ee.jsx)("div",{className:Le.a.loginBlock,children:e.isAuth?Object(ee.jsxs)("div",{children:[e.login," - ",Object(ee.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(ee.jsx)(J.b,{to:"/login",children:"Login"})})]})},Te=function(e){Object(Z.a)(n,e);var t=Object(K.a)(n);function n(){return Object(W.a)(this,n),t.apply(this,arguments)}return Object(X.a)(n,[{key:"render",value:function(){return Object(ee.jsx)(Ue,Object(o.a)({},this.props))}}]),n}(Y.a.Component),Fe=Object(se.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.logout();case 2:0===e.sent.data.resultCode&&t(f(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Te),ze=n(127),Ae=n(128),Me=n(86),Ge=n(64),Re=n(54),De=n.n(Re),Be=Object(Ae.a)({form:"login"})((function(e){return Object(ee.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(ee.jsx)("div",{children:Object(ee.jsx)(ze.a,{placeholder:"Email",name:"email",component:Ge.a,validate:[Me.b]})}),Object(ee.jsx)("div",{children:Object(ee.jsx)(ze.a,{placeholder:"Password",name:"password",component:Ge.a,validate:[Me.b],type:"password"})}),Object(ee.jsxs)("div",{children:[Object(ee.jsx)(ze.a,{type:"checkbox",name:"rememberMe",component:Ge.a})," remember me"]}),e.error&&Object(ee.jsx)("div",{className:De.a.formSummaryError,children:e.error}),Object(ee.jsx)("div",{children:Object(ee.jsx)("button",{children:"Login"})})]})})),qe=Object(se.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(i.a)(s.a.mark((function r(a){var c,i;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(b()):(i=c.data.messages.length>0?c.data.messages[0]:"Some error",a(Object(u.a)("login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(ee.jsx)(ne.a,{to:"/profile"}):Object(ee.jsxs)("div",{children:[Object(ee.jsx)("h1",{children:"Login"}),Object(ee.jsx)(Be,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Ye=Y.a.lazy((function(){return n.e(4).then(n.bind(null,300))})),He=Y.a.lazy((function(){return n.e(3).then(n.bind(null,299))})),Ve=function(e){Object(Z.a)(n,e);var t=Object(K.a)(n);function n(){return Object(W.a)(this,n),t.apply(this,arguments)}return Object(X.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(ee.jsxs)("div",{className:"app-wrapper",children:[Object(ee.jsx)(Fe,{}),Object(ee.jsx)(te,{}),Object(ee.jsxs)("div",{className:"app-wrapper-content",children:[Object(ee.jsx)(ne.b,{path:"/profile/:userId?",render:function(){return Object(ee.jsx)(Y.a.Suspense,{fallback:Object(ee.jsx)("div",{children:"Loading..."}),children:Object(ee.jsx)(He,{})})}}),Object(ee.jsx)(ne.b,{path:"/dialogs",render:function(){return Object(ee.jsx)(Y.a.Suspense,{fallback:Object(ee.jsx)("div",{children:"Loading..."}),children:Object(ee.jsx)(Ye,{})})}}),Object(ee.jsx)(ne.b,{path:"/users",render:function(){return Object(ee.jsx)(Ne,{})}}),Object(ee.jsx)(ne.b,{path:"/login",render:function(){return Object(ee.jsx)(qe,{})}}),Object(ee.jsx)(ne.b,{path:"/music",component:re}),Object(ee.jsx)(ne.b,{path:"/news",component:ae}),Object(ee.jsx)(ne.b,{path:"/settings",component:ce})]})]}):Object(ee.jsx)(xe.a,{})}}]),n}(q.Component),Je=Object(se.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(b()).then((function(){e({type:A})}))}}})(Ve),We=function(e){return Object(ee.jsx)(J.a,{children:Object(ee.jsx)(se.a,{store:B,children:Object(ee.jsx)(Y.a.StrictMode,{children:Object(ee.jsx)(Je,{})})})})};V.a.render(Object(ee.jsx)(We,{}),document.getElementById("root")),V.a.render(Object(ee.jsx)(J.a,{children:Object(ee.jsx)(se.a,{store:B,children:Object(ee.jsx)(Y.a.StrictMode,{children:Object(ee.jsx)(We,{})})})}),document.getElementById("root")),r()},54:function(e,t,n){e.exports={formControl:"FormsControls_formControl__O8r0Z",error:"FormsControls_error__2ObGf",formSummaryError:"FormsControls_formSummaryError__1OVVL"}},64:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return f}));var r=n(5),a=n(43),c=n(54),s=n.n(c),i=n(1),o=["input","meta","child"],u=["input","meta","child"],l=["input","meta","child"],d=function(e){e.input;var t=e.meta,n=(e.child,Object(a.a)(e,o)),r=t.touched&&t.error;return Object(i.jsxs)("div",{className:s.a.formControl+" "+(r?s.a.error:""),children:[Object(i.jsx)("div",{children:n.children}),r&&Object(i.jsx)("span",{children:t.error})]})},j=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,u));return Object(i.jsxs)(d,Object(r.a)(Object(r.a)({},e),{},{children:[" ",Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))," "]}))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,l));return Object(i.jsxs)(d,Object(r.a)(Object(r.a)({},e),{},{children:[" ",Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))," "]}))}},66:function(e,t,n){"use strict";var r=n.p+"static/media/loading.7f681fed.svg",a=n(1);t.a=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r})})}},70:function(e,t,n){e.exports={paginator:"Paginator_paginator__3xOES",pageNumber:"Paginator_pageNumber__1NVup",selectedPage:"Paginator_selectedPage__9Rs7X"}},86:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},92:function(e,t,n){e.exports={header:"Header_header__30c2y",loginBlock:"Header_loginBlock___S5G1"}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return O})),n.d(t,"e",(function(){return g}));var r=n(9),a=n.n(r),c=n(19),s=n(42),i=n(5),o=n(16),u="ADD-POST",l="SET_USER_PROFILE",d="SET_STATUS",j="DELETE_POST",f={posts:[{id:1,message:"Hi, how are you?",likesCount:5},{id:2,message:"It's my first post",likesCount:10},{id:3,message:"Yo",likesCount:5},{id:4,message:"Yo",likesCount:5},{id:5,message:"Yo",likesCount:5}],profile:null,status:""},b=function(e){return{type:u,newPostText:e}},p=function(e){return{type:d,status:e}},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n]),newPostText:""});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case j:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}}},[[292,1,2]]]);
//# sourceMappingURL=main.4f9fff61.chunk.js.map