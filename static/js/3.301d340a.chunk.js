(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[3],{294:function(t,e,s){t.exports={topPicture:"ProfileInfo_topPicture__1siuB",descriptionBlock:"ProfileInfo_descriptionBlock__2jRH7",mainPhoto:"ProfileInfo_mainPhoto__tcT3D",contact:"ProfileInfo_contact__2Ixkg"}},296:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__3oIfU",posts:"MyPosts_posts__3YoPA"}},297:function(t,e,s){t.exports={item:"Post_item__SnwO0"}},298:function(t,e,s){t.exports={topPicture:"Profile_topPicture__SJbSF"}},300:function(t,e,s){"use strict";s.r(e);var o=s(3),c=s(35),i=s(36),n=s(38),r=s(37),a=s(0),j=s.n(a),l=s(16),u=s(90),b=s(130),d=s(65),p=s(48),h=s(296),f=s.n(h),O=s(297),x=s.n(O),m=s(1),v=function(t){return Object(m.jsxs)("div",{className:x.a.item,children:[Object(m.jsx)("img",{src:"https://5mod.ru/uploads/posts/2020-12/1607051489_1607051535.png"}),t.message,Object(m.jsx)("div",{children:Object(m.jsxs)("span",{children:["like ",t.likesCount]})})]})},P=j.a.memo((function(t){var e=t.posts.map((function(t){return Object(m.jsx)(v,{message:t.message,likesCount:t.likesCount},t.id)}));return Object(m.jsxs)("div",{className:f.a.postsBlock,children:[Object(m.jsx)("h3",{children:"My posts"}),Object(m.jsx)(k,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(m.jsx)("div",{className:f.a.posts,children:e})]})})),g=Object(d.a)(10),k=function(t){return Object(m.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(m.jsx)("div",{children:Object(m.jsx)(u.a,{name:"newPostText",component:p.b,placeholder:"Post message",validate:[d.b,g]})}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{children:"Add post"})})]})};k=Object(b.a)({form:"ProfileAddNewPostForm"})(k);var _=P,S=s(96),y=Object(l.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(S.a)(e))}}}))(_),w=(s(298),s(97)),A=s(67),I=s(294),C=s.n(I),F=(j.a.Component,function(t){var e=Object(a.useState)(!1),s=Object(w.a)(e,2),o=s[0],c=s[1],i=Object(a.useState)(t.status),n=Object(w.a)(i,2),r=n[0],j=n[1];Object(a.useEffect)((function(){j(t.status)}),[t.status]);return Object(m.jsxs)("div",{children:[!o&&Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Status:"})," ",Object(m.jsxs)("span",{onDoubleClick:function(){c(!0)},children:[t.status||"-----"," "]})]}),o&&Object(m.jsx)("div",{children:Object(m.jsx)("input",{autoFocus:!0,onBlur:function(){c(!1),t.updateStatus(r)},onChange:function(t){j(t.currentTarget.value)},value:r})})]})}),M=s(119),N=s(50),T=s.n(N),B=Object(b.a)({form:"edit-profile"})((function(t){var e=t.handleSubmit,s=t.profile,o=t.error;return Object(m.jsxs)("form",{onSubmit:e,children:[Object(m.jsx)("div",{children:Object(m.jsx)("button",{children:"save"})}),o&&Object(m.jsx)("div",{className:T.a.formSummaryError,children:o}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Full name:"})," ",Object(p.c)("Full name","fullName",[],p.a)]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"About me:"})," ",Object(p.c)("About me","aboutMe",[],p.b)]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Looking for a job:"})," ",Object(p.c)("","lookingForAJob",[],p.a,{type:"checkbox"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"My professional skills:"})," ",Object(p.c)("My professional skills","lookingForAJobDescription",[],p.b)]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Contacts:"})," ",Object.keys(s.contacts).map((function(t){return Object(m.jsx)("div",{className:C.a.contact,children:Object(m.jsxs)("b",{children:[t,": ",Object(p.c)(t,"contacts."+t,[],p.a)]})},t)}))]})]})})),J=function(t){var e=t.profile,s=t.isOwner,o=t.goToEditMode;return Object(m.jsxs)("div",{children:[s&&Object(m.jsx)("div",{children:Object(m.jsx)("button",{onClick:o,children:"edit"})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Full name:"})," ",e.fullName]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"About me:"})," ",e.aboutMe]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Looking for a job:"})," ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"My professional skills:"})," ",e.lookingForAJobDescription]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Contacts:"})," ",Object.keys(e.contacts).map((function(t){return Object(m.jsx)(D,{contactTitle:t,contactValue:e.contacts[t]},t)}))]})]})},D=function(t){var e=t.contactTitle,s=t.contactValue;return Object(m.jsxs)("div",{className:C.a.contact,children:[Object(m.jsxs)("b",{children:[e,":"]})," ",s]})},U=function(t){var e=Object(a.useState)(!1),s=Object(w.a)(e,2),o=s[0],c=s[1];if(!t.profile)return Object(m.jsx)(A.a,{});return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:C.a.descriptionBlock,children:[Object(m.jsx)("img",{src:t.profile.photos.large||M.a,className:C.a.mainPhoto,alt:""}),t.isOwner&&Object(m.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&t.savePhoto(e.target.files[0])}}),o?Object(m.jsx)(B,{initialValues:t.profile,profile:t.profile,onSubmit:function(e){t.saveProfile(e).then((function(){c(!1)}))}}):Object(m.jsx)(J,{goToEditMode:function(){c(!0)},profile:t.profile,isOwner:t.isOwner}),Object(m.jsx)(F,{status:t.status,updateStatus:t.updateStatus})]})})},E=function(t){return Object(m.jsxs)("div",{children:[Object(m.jsx)(U,{savePhoto:t.savePhoto,isOwner:t.isOwner,profile:t.profile,status:t.status,saveProfile:t.saveProfile,updateStatus:t.updateStatus}),Object(m.jsx)(y,{})]})},V=s(10),z=s(11),L=function(t){Object(n.a)(s,t);var e=Object(r.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(i.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e,s){this.props.match.params.userId!=t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(m.jsx)(E,Object(o.a)(Object(o.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),s}(j.a.Component);e.default=Object(z.d)(Object(l.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:S.d,getStatus:S.c,updateStatus:S.g,savePhoto:S.e,saveProfile:S.f}),V.f)(L)}}]);
//# sourceMappingURL=3.301d340a.chunk.js.map