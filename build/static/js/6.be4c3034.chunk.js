(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[6],{113:function(e,a,t){"use strict";var l=t(1),r=t(2),s=t(5),i=t.n(s),o=t(0),n=t.n(o),c=t(8),m=["xl","lg","md","sm","xs"],d=n.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,o=e.as,d=void 0===o?"div":o,u=Object(r.a)(e,["bsPrefix","className","as"]),f=Object(c.a)(t,"col"),b=[],p=[];return m.forEach((function(e){var a,t,l,r=u[e];if(delete u[e],"object"===typeof r&&null!=r){var s=r.span;a=void 0===s||s,t=r.offset,l=r.order}else a=r;var i="xs"!==e?"-"+e:"";a&&b.push(!0===a?""+f+i:""+f+i+"-"+a),null!=l&&p.push("order"+i+"-"+l),null!=t&&p.push("offset"+i+"-"+t)})),b.length||b.push(f),n.a.createElement(d,Object(l.a)({},u,{ref:a,className:i.a.apply(void 0,[s].concat(b,p))}))}));d.displayName="Col",a.a=d},114:function(e,a,t){"use strict";var l=t(1),r=t(2),s=t(5),i=t.n(s),o=t(0),n=t.n(o),c=(t(74),t(24)),m=t.n(c),d={type:m.a.string,tooltip:m.a.bool,as:m.a.elementType},u=n.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"div":t,o=e.className,c=e.type,m=void 0===c?"valid":c,d=e.tooltip,u=void 0!==d&&d,f=Object(r.a)(e,["as","className","type","tooltip"]);return n.a.createElement(s,Object(l.a)({},f,{ref:a,className:i()(o,m+"-"+(u?"tooltip":"feedback"))}))}));u.displayName="Feedback",u.propTypes=d;var f=u,b=n.a.createContext({controlId:void 0}),p=t(8),v=n.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,c=e.bsCustomPrefix,m=e.className,d=e.type,u=void 0===d?"checkbox":d,f=e.isValid,v=void 0!==f&&f,h=e.isInvalid,x=void 0!==h&&h,O=e.isStatic,y=e.as,j=void 0===y?"input":y,N=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),P=Object(o.useContext)(b),C=P.controlId,w=P.custom?[c,"custom-control-input"]:[s,"form-check-input"],E=w[0],I=w[1];return s=Object(p.a)(E,I),n.a.createElement(j,Object(l.a)({},N,{ref:a,type:u,id:t||C,className:i()(m,s,v&&"is-valid",x&&"is-invalid",O&&"position-static")}))}));v.displayName="FormCheckInput";var h=v,x=n.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,c=e.className,m=e.htmlFor,d=Object(r.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),u=Object(o.useContext)(b),f=u.controlId,v=u.custom?[s,"custom-control-label"]:[t,"form-check-label"],h=v[0],x=v[1];return t=Object(p.a)(h,x),n.a.createElement("label",Object(l.a)({},d,{ref:a,htmlFor:m||f,className:i()(c,t)}))}));x.displayName="FormCheckLabel";var O=x,y=n.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,c=e.bsCustomPrefix,m=e.inline,d=void 0!==m&&m,u=e.disabled,v=void 0!==u&&u,x=e.isValid,y=void 0!==x&&x,j=e.isInvalid,N=void 0!==j&&j,P=e.feedbackTooltip,C=void 0!==P&&P,w=e.feedback,E=e.className,I=e.style,g=e.title,F=void 0===g?"":g,k=e.type,R=void 0===k?"checkbox":k,S=e.label,V=e.children,T=e.custom,L=e.as,z=void 0===L?"input":L,G=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),A="switch"===R||T,B=A?[c,"custom-control"]:[s,"form-check"],M=B[0],J=B[1];s=Object(p.a)(M,J);var D=Object(o.useContext)(b).controlId,U=Object(o.useMemo)((function(){return{controlId:t||D,custom:A}}),[D,A,t]),W=A||null!=S&&!1!==S&&!V,Y=n.a.createElement(h,Object(l.a)({},G,{type:"switch"===R?"checkbox":R,ref:a,isValid:y,isInvalid:N,isStatic:!W,disabled:v,as:z}));return n.a.createElement(b.Provider,{value:U},n.a.createElement("div",{style:I,className:i()(E,s,A&&"custom-"+R,d&&s+"-inline")},V||n.a.createElement(n.a.Fragment,null,Y,W&&n.a.createElement(O,{title:F},S),(y||N)&&n.a.createElement(f,{type:y?"valid":"invalid",tooltip:C},w))))}));y.displayName="FormCheck",y.Input=h,y.Label=O;var j=y,N=n.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,c=e.bsCustomPrefix,m=e.className,d=e.isValid,u=e.isInvalid,f=e.lang,v=e.as,h=void 0===v?"input":v,x=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),O=Object(o.useContext)(b),y=O.controlId,j=O.custom?[c,"custom-file-input"]:[s,"form-control-file"],N=j[0],P=j[1];return s=Object(p.a)(N,P),n.a.createElement(h,Object(l.a)({},x,{ref:a,id:t||y,type:"file",lang:f,className:i()(m,s,d&&"is-valid",u&&"is-invalid")}))}));N.displayName="FormFileInput";var P=N,C=n.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,c=e.className,m=e.htmlFor,d=Object(r.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),u=Object(o.useContext)(b),f=u.controlId,v=u.custom?[s,"custom-file-label"]:[t,"form-file-label"],h=v[0],x=v[1];return t=Object(p.a)(h,x),n.a.createElement("label",Object(l.a)({},d,{ref:a,htmlFor:m||f,className:i()(c,t),"data-browse":d["data-browse"]}))}));C.displayName="FormFileLabel";var w=C,E=n.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,c=e.bsCustomPrefix,m=e.disabled,d=void 0!==m&&m,u=e.isValid,v=void 0!==u&&u,h=e.isInvalid,x=void 0!==h&&h,O=e.feedbackTooltip,y=void 0!==O&&O,j=e.feedback,N=e.className,C=e.style,E=e.label,I=e.children,g=e.custom,F=e.lang,k=e["data-browse"],R=e.as,S=void 0===R?"div":R,V=e.inputAs,T=void 0===V?"input":V,L=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),z=g?[c,"custom"]:[s,"form-file"],G=z[0],A=z[1];s=Object(p.a)(G,A);var B=Object(o.useContext)(b).controlId,M=Object(o.useMemo)((function(){return{controlId:t||B,custom:g}}),[B,g,t]),J=null!=E&&!1!==E&&!I,D=n.a.createElement(P,Object(l.a)({},L,{ref:a,isValid:v,isInvalid:x,disabled:d,as:T,lang:F}));return n.a.createElement(b.Provider,{value:M},n.a.createElement(S,{style:C,className:i()(N,s,g&&"custom-file")},I||n.a.createElement(n.a.Fragment,null,g?n.a.createElement(n.a.Fragment,null,D,J&&n.a.createElement(w,{"data-browse":k},E)):n.a.createElement(n.a.Fragment,null,J&&n.a.createElement(w,null,E),D),(v||x)&&n.a.createElement(f,{type:v?"valid":"invalid",tooltip:y},j))))}));E.displayName="FormFile",E.Input=P,E.Label=w;var I=E,g=(t(75),n.a.forwardRef((function(e,a){var t,s,c=e.bsPrefix,m=e.bsCustomPrefix,d=e.type,u=e.size,f=e.htmlSize,v=e.id,h=e.className,x=e.isValid,O=void 0!==x&&x,y=e.isInvalid,j=void 0!==y&&y,N=e.plaintext,P=e.readOnly,C=e.custom,w=e.as,E=void 0===w?"input":w,I=Object(r.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),g=Object(o.useContext)(b).controlId,F=C?[m,"custom"]:[c,"form-control"],k=F[0],R=F[1];if(c=Object(p.a)(k,R),N)(s={})[c+"-plaintext"]=!0,t=s;else if("file"===d){var S;(S={})[c+"-file"]=!0,t=S}else if("range"===d){var V;(V={})[c+"-range"]=!0,t=V}else if("select"===E&&C){var T;(T={})[c+"-select"]=!0,T[c+"-select-"+u]=u,t=T}else{var L;(L={})[c]=!0,L[c+"-"+u]=u,t=L}return n.a.createElement(E,Object(l.a)({},I,{type:d,size:f,ref:a,readOnly:P,id:v||g,className:i()(h,t,O&&"is-valid",j&&"is-invalid")}))})));g.displayName="FormControl";var F=Object.assign(g,{Feedback:f}),k=n.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,c=e.children,m=e.controlId,d=e.as,u=void 0===d?"div":d,f=Object(r.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(p.a)(t,"form-group");var v=Object(o.useMemo)((function(){return{controlId:m}}),[m]);return n.a.createElement(b.Provider,{value:v},n.a.createElement(u,Object(l.a)({},f,{ref:a,className:i()(s,t)}),c))}));k.displayName="FormGroup";var R=k,S=t(113),V=n.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"label":t,c=e.bsPrefix,m=e.column,d=e.srOnly,u=e.className,f=e.htmlFor,v=Object(r.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),h=Object(o.useContext)(b).controlId;c=Object(p.a)(c,"form-label");var x="col-form-label";"string"===typeof m&&(x=x+" "+x+"-"+m);var O=i()(u,c,d&&"sr-only",m&&x);return f=f||h,m?n.a.createElement(S.a,Object(l.a)({as:"label",className:O,htmlFor:f},v)):n.a.createElement(s,Object(l.a)({ref:a,className:O,htmlFor:f},v))}));V.displayName="FormLabel",V.defaultProps={column:!1,srOnly:!1};var T=V,L=n.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,o=e.as,c=void 0===o?"small":o,m=e.muted,d=Object(r.a)(e,["bsPrefix","className","as","muted"]);return t=Object(p.a)(t,"form-text"),n.a.createElement(c,Object(l.a)({},d,{ref:a,className:i()(s,t,m&&"text-muted")}))}));L.displayName="FormText";var z=L,G=n.a.forwardRef((function(e,a){return n.a.createElement(j,Object(l.a)({},e,{ref:a,type:"switch"}))}));G.displayName="Switch",G.Input=j.Input,G.Label=j.Label;var A=G,B=t(52),M=Object(B.a)("form-row"),J=n.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.inline,o=e.className,c=e.validated,m=e.as,d=void 0===m?"form":m,u=Object(r.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(p.a)(t,"form"),n.a.createElement(d,Object(l.a)({},u,{ref:a,className:i()(o,c&&"was-validated",s&&t+"-inline")}))}));J.displayName="Form",J.defaultProps={inline:!1},J.Row=M,J.Group=R,J.Control=F,J.Check=j,J.File=I,J.Switch=A,J.Label=T,J.Text=z;a.a=J},122:function(e,a,t){"use strict";t.r(a);var l=t(4),r=t(48),s=t(49),i=t(51),o=t(50),n=t(0),c=t.n(n),m=t(10),d=t(9),u=t(114),f=t(53),b=(t(30),function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(r.a)(this,t);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(e=a.call.apply(a,[this].concat(i))).state={name:"",email:"",password:""},e.handleInputChange=function(a){var t=a.currentTarget,r=t.name,s=t.value;e.setState(Object(l.a)({},r,s))},e.handleSubmit=function(a){a.preventDefault(),e.props.onRegister(e.state),e.setState({name:"",email:"",password:""})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,l=e.password;return c.a.createElement(u.a,{onSubmit:this.handleSubmit,autoComplete:"off",style:{padding:"20px",width:"400px",margin:"50px auto",borderRadius:"0.25rem",boxShadow:"0px 0px 23px 4px rgba(0,0,0,0.31)"}},c.a.createElement(u.a.Group,{controlId:"formBasicName"},c.a.createElement(u.a.Control,{type:"text",name:"name",value:a,onChange:this.handleInputChange,placeholder:"Your name"})),c.a.createElement(u.a.Group,{controlId:"formBasicEmail"},c.a.createElement(u.a.Control,{type:"email",name:"email",value:t,onChange:this.handleInputChange,placeholder:"Enter email"}),c.a.createElement(u.a.Text,{className:"text-muted",style:{paddingLeft:"5px"}},"We'll never share your email with anyone else.")),c.a.createElement(u.a.Group,{controlId:"formBasicName"},c.a.createElement(u.a.Control,{type:"password",name:"password",value:l,onChange:this.handleInputChange,placeholder:"Password"})),c.a.createElement(f.a,{variant:"primary",type:"submit",style:{margin:"0 auto",display:"block",opacity:"0.7"}},"Sign Up"))}}]),t}(n.Component)),p={onRegister:d.a.register};a.default=Object(m.b)(null,p)(b)}}]);
//# sourceMappingURL=6.be4c3034.chunk.js.map