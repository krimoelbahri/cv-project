(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{13:function(e,t,i){},14:function(e,t,i){},15:function(e,t,i){},17:function(e,t,i){"use strict";i.r(t);var n=i(2),s=i.n(n),a=i(8),c=i.n(a),l=(i(13),i(14),i(3)),r=i(4),o=i(1),d=i(6),h=i(5),j=(i(15),i(0)),p=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(o.a)(n)),n.handleBlur=n.handleBlur.bind(Object(o.a)(n)),n.handleChange=n.handleChange.bind(Object(o.a)(n)),n.state={name:n.props.name,isEditing:!1},n}return Object(r.a)(i,[{key:"handleClick",value:function(){this.setState({isEditing:!0})}},{key:"handleChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleBlur",value:function(e){e.target.value?this.setState({name:e.target.value,isEditing:!1}):this.setState({name:this.props.name,isEditing:!1})}},{key:"render",value:function(){var e,t=this.state.isEditing,i=this.props.isPreview;return e=t?Object(j.jsx)("input",{onBlur:this.handleBlur,onChange:this.handleChange,type:this.props.type,value:this.state.name,placeholder:this.state.name,autoFocus:!0}):Object(j.jsx)("h1",{onClick:this.handleClick,children:this.state.name}),i&&(e=Object(j.jsx)("h1",{children:this.state.name})),Object(j.jsx)("div",{children:e})}}]),i}(s.a.Component),b=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return Object(j.jsxs)("div",{id:"generalInfo",children:[Object(j.jsxs)("div",{id:"mainGInfo",children:[Object(j.jsx)(p,{name:"Title",type:"text",isPreview:this.props.isPreview}),Object(j.jsx)(p,{name:"Full Name",type:"text",isPreview:this.props.isPreview})]}),Object(j.jsxs)("div",{id:"sideGInfo",children:[Object(j.jsxs)("div",{className:"flex-R",children:[Object(j.jsx)("i",{className:"fas fa-address-book"}),Object(j.jsx)(p,{name:"Address",type:"text",isPreview:this.props.isPreview})]}),Object(j.jsxs)("div",{className:"flex-R",children:[Object(j.jsx)("i",{className:"fas fa-phone"}),Object(j.jsx)(p,{name:"Phone Number",type:"number",isPreview:this.props.isPreview})]}),Object(j.jsxs)("div",{className:"flex-R",children:[Object(j.jsx)("i",{className:"fas fa-envelope"}),Object(j.jsx)(p,{name:"Email",type:"email",isPreview:this.props.isPreview})]}),Object(j.jsxs)("div",{className:"flex-R",children:[Object(j.jsx)("i",{className:"fas fa-at"}),Object(j.jsx)(p,{name:"Website",type:"text",isPreview:this.props.isPreview})]})]})]})}}]),i}(s.a.Component),u=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"form-div pd-1px",children:[Object(j.jsx)("label",{htmlFor:this.props.id,children:this.props.title}),Object(j.jsx)("input",{onChange:this.props.handleInputChange,id:this.props.id,type:this.props.type,required:!0})]})}}]),i}(s.a.Component),O=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).onSubmitInfo=n.onSubmitInfo.bind(Object(o.a)(n)),n.placeChange=n.placeChange.bind(Object(o.a)(n)),n.titleChange=n.titleChange.bind(Object(o.a)(n)),n.startDateChange=n.startDateChange.bind(Object(o.a)(n)),n.endDateChange=n.endDateChange.bind(Object(o.a)(n)),n.descriptionChange=n.descriptionChange.bind(Object(o.a)(n)),n.state={place:"",title:"",startDate:"",endDate:"",description:""},n}return Object(r.a)(i,[{key:"placeChange",value:function(e){this.setState({place:e.target.value})}},{key:"titleChange",value:function(e){this.setState({title:e.target.value})}},{key:"startDateChange",value:function(e){this.setState({startDate:e.target.value})}},{key:"endDateChange",value:function(e){this.setState({endDate:e.target.value})}},{key:"descriptionChange",value:function(e){this.setState({description:e.target.value})}},{key:"onSubmitInfo",value:function(e){e.preventDefault();var t=this.state;this.props.onSubmitted(t)}},{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.onSubmitInfo,className:"pd-1x body-form",children:[Object(j.jsx)(u,{handleInputChange:this.placeChange,id:this.props.place.toLowerCase(),title:this.props.place,type:"text"}),Object(j.jsx)(u,{handleInputChange:this.titleChange,id:this.props.title.toLowerCase(),title:this.props.title,type:"text"}),Object(j.jsxs)("div",{className:"form-date pd-1px",children:[Object(j.jsx)(u,{handleInputChange:this.startDateChange,id:"startDate",title:"From",type:"date"}),Object(j.jsx)(u,{handleInputChange:this.endDateChange,id:"endDate",title:"To",type:"date"})]}),Object(j.jsx)("textarea",{onChange:this.descriptionChange,id:"description",title:"Description",rows:"3",cols:"30",placeholder:"2 Lines Max"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:this.props.onCancel,children:"Cancel"}),Object(j.jsx)("button",{type:"submit",children:" Submit"})]})]})}}]),i}(s.a.Component),x=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).onSubmitInfo=n.onSubmitInfo.bind(Object(o.a)(n)),n.skillChange=n.skillChange.bind(Object(o.a)(n)),n.state={skill:""},n}return Object(r.a)(i,[{key:"skillChange",value:function(e){this.setState({skill:e.target.value})}},{key:"onSubmitInfo",value:function(e){e.preventDefault();var t=this.state;this.props.onSubmitted(t)}},{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.onSubmitInfo,className:"pd-1x skill-form",children:[Object(j.jsx)(u,{handleInputChange:this.skillChange,id:this.props.skill.toLowerCase(),title:this.props.skill,type:"text"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:this.props.onCancel,children:"Cancel"}),Object(j.jsx)("button",{type:"submit",children:" Submit"})]})]})}}]),i}(s.a.Component),f=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).deleteClick=n.deleteClick.bind(Object(o.a)(n)),n}return Object(r.a)(i,[{key:"deleteClick",value:function(e){var t=e.target.dataset.index,i=this.props.info[t];this.props.deleteClick(i)}},{key:"render",value:function(){var e=this,t=this.props.info;return this.props.isPreview?Object(j.jsx)("div",{className:"body-info",children:t.map((function(t,i){return Object(j.jsx)("div",{className:"information",children:Object(j.jsxs)("div",{className:"main-information",children:[Object(j.jsxs)("div",{className:"pd-1px flex-R",children:[Object(j.jsxs)("h3",{children:[e.props.place,": "]}),Object(j.jsx)("p",{children:t.place})]}),Object(j.jsxs)("div",{className:"pd-1px flex-R",children:[Object(j.jsxs)("h3",{children:[e.props.title,": "]}),Object(j.jsx)("p",{children:t.title})]}),Object(j.jsxs)("div",{className:"pd-1px date flex-R",children:[Object(j.jsxs)("div",{className:"flex-R",children:[Object(j.jsx)("h3",{children:"From: "}),Object(j.jsx)("p",{children:t.startDate})]}),Object(j.jsxs)("div",{className:"flex-R",children:[Object(j.jsx)("h3",{children:"To: "}),Object(j.jsx)("p",{children:t.endDate})]})]}),Object(j.jsx)("div",{className:"pd-1px flex-R",children:Object(j.jsx)("p",{children:t.description})})]})},"ID".concat(i))}))}):Object(j.jsx)("div",{className:"body-info",children:t.map((function(t,i){return Object(j.jsxs)("div",{className:"information",children:[Object(j.jsxs)("div",{className:"main-information",children:[Object(j.jsxs)("div",{className:"pd-1px flex-R",children:[Object(j.jsxs)("h3",{children:[e.props.place,": "]}),Object(j.jsx)("p",{children:t.place})]}),Object(j.jsxs)("div",{className:"pd-1px flex-R",children:[Object(j.jsxs)("h3",{children:[e.props.title,": "]}),Object(j.jsx)("p",{children:t.title})]}),Object(j.jsxs)("div",{className:"pd-1px date flex-R",children:[Object(j.jsxs)("div",{className:"flex-R",children:[Object(j.jsx)("h3",{children:"From: "}),Object(j.jsx)("p",{children:t.startDate})]}),Object(j.jsxs)("div",{className:"flex-R",children:[Object(j.jsx)("h3",{children:"To: "}),Object(j.jsx)("p",{children:t.endDate})]})]}),Object(j.jsx)("div",{className:"pd-1px flex-R",children:Object(j.jsx)("p",{children:t.description})})]}),Object(j.jsx)("div",{children:Object(j.jsx)("i",{className:"far fa-trash-alt","data-index":i,onClick:e.deleteClick})})]},"ID".concat(i))}))})}}]),i}(s.a.Component),v=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).deleteClick=n.deleteClick.bind(Object(o.a)(n)),n}return Object(r.a)(i,[{key:"deleteClick",value:function(e){var t=e.target.dataset.index,i=this.props.info[t];this.props.deleteClick(i)}},{key:"render",value:function(){var e=this,t=this.props.info;return this.props.isPreview?Object(j.jsx)("ul",{className:"body-skill flex-R pd-1px",children:t.map((function(e,t){return Object(j.jsxs)("li",{className:"skills pd-2px flex-R",children:[Object(j.jsx)("i",{className:"fas fa-circle pd-2px"}),Object(j.jsx)("p",{className:"pd-2px",children:e.skill})]},"ID".concat(t))}))}):Object(j.jsx)("ul",{className:"body-skill flex-R pd-1px",children:t.map((function(t,i){return Object(j.jsxs)("li",{className:"skills pd-2px flex-R",children:[Object(j.jsx)("i",{className:"fas fa-circle pd-2px"}),Object(j.jsx)("p",{className:"pd-2px",children:t.skill}),Object(j.jsx)("i",{className:"fas fa-minus-circle pd-2px","data-index":i,onClick:e.deleteClick})]},"ID".concat(i))}))})}}]),i}(s.a.Component),m=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(o.a)(n)),n.onSubmitted=n.onSubmitted.bind(Object(o.a)(n)),n.onCancel=n.onCancel.bind(Object(o.a)(n)),n.deleteInformation=n.deleteInformation.bind(Object(o.a)(n)),n.state={isEditing:!1,info:[]},n}return Object(r.a)(i,[{key:"handleClick",value:function(){this.setState((function(e){return{isEditing:!e.isEditing}}))}},{key:"onSubmitted",value:function(e){var t=this;this.setState((function(i){return{isEditing:!i.isEditing,info:t.state.info.concat(e)}}))}},{key:"onCancel",value:function(){this.setState((function(e){return{isEditing:!e.isEditing}}))}},{key:"deleteInformation",value:function(e){var t=this;this.setState((function(){return{info:t.state.info.filter((function(t){return t!==e}))}}))}},{key:"render",value:function(){var e,t,i=this.state,n=i.isEditing,s=i.info,a=this.props.isPreview;return e=n?Object(j.jsx)(O,{id:this.props.place.toLowerCase(),place:this.props.place,title:this.props.title,onSubmitted:this.onSubmitted,onCancel:this.onCancel}):Object(j.jsxs)("button",{onClick:this.handleClick,children:["Add ",this.props.name]}),t=a?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:this.props.name}),Object(j.jsx)(f,{info:s,place:this.props.place,title:this.props.title,isPreview:a,deleteClick:this.deleteInformation})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:this.props.name}),Object(j.jsx)(f,{info:s,place:this.props.place,title:this.props.title,isPreview:a,deleteClick:this.deleteInformation}),e]}),Object(j.jsx)("div",{className:"body-info",children:t})}}]),i}(s.a.Component),C=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(o.a)(n)),n.onSubmitted=n.onSubmitted.bind(Object(o.a)(n)),n.onCancel=n.onCancel.bind(Object(o.a)(n)),n.deleteInformation=n.deleteInformation.bind(Object(o.a)(n)),n.state={isEditing:!1,info:[]},n}return Object(r.a)(i,[{key:"handleClick",value:function(){this.setState((function(e){return{isEditing:!e.isEditing}}))}},{key:"onSubmitted",value:function(e){var t=this;this.setState((function(i){return{isEditing:!i.isEditing,info:t.state.info.concat(e)}}))}},{key:"onCancel",value:function(){this.setState((function(e){return{isEditing:!e.isEditing}}))}},{key:"deleteInformation",value:function(e){var t=this;this.setState((function(){return{info:t.state.info.filter((function(t){return t!==e}))}}))}},{key:"render",value:function(){var e,t,i=this.state,n=i.isEditing,s=i.info,a=this.props.isPreview;return e=n?Object(j.jsx)(x,{id:this.props.name.toLowerCase(),skill:this.props.name,onSubmitted:this.onSubmitted,onCancel:this.onCancel}):Object(j.jsxs)("button",{onClick:this.handleClick,children:["Add ",this.props.name]}),t=a?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:this.props.name}),Object(j.jsx)(v,{info:s,deleteClick:this.deleteInformation,isPreview:a})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:this.props.name}),Object(j.jsx)(v,{info:s,deleteClick:this.deleteInformation,isPreview:a}),e]}),Object(j.jsx)("div",{className:"body-info",children:t})}}]),i}(s.a.Component),k=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).edit=n.edit.bind(Object(o.a)(n)),n.preview=n.preview.bind(Object(o.a)(n)),n.state={isPreview:!1},n}return Object(r.a)(i,[{key:"edit",value:function(){this.setState({isPreview:!1})}},{key:"preview",value:function(){this.setState({isPreview:!0})}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"buttons-div",children:[Object(j.jsx)("button",{onClick:this.edit,children:"Edit Mode"}),Object(j.jsx)("button",{onClick:this.preview,children:"Preview Mode"})]}),Object(j.jsxs)("div",{id:"cvContainer",children:[Object(j.jsx)(b,{isPreview:this.state.isPreview}),Object(j.jsx)(m,{name:"Experience",place:"Company",title:"Position",isPreview:this.state.isPreview}),Object(j.jsx)(m,{name:"Education",place:"Establishment",title:"Degree",isPreview:this.state.isPreview}),Object(j.jsx)(C,{name:"Skills",isPreview:this.state.isPreview})]})]})}}]),i}(s.a.Component),g=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,18)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;i(e),n(e),s(e),a(e),c(e)}))};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.30d975aa.chunk.js.map