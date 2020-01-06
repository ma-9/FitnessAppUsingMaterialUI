(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{81:function(e,t,a){e.exports=a(92)},92:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),i=a(9),l=a.n(i),s=a(58),o=a(17),u=a(49),m=a(34),d=a(35),p=a(39),h=a(36),E=a(40),f=a(139),b=a(140),x=a(45),g=a(157),y=a(135),v=a(153),C=a(136),O=a(137),j=a(138),S=a(71),k=a.n(S),w=a(4),M=a(154),B=a(129),D=a(156),N=a(150),T=a(133),A=a(134),F=Object(w.a)(function(e){return{formControl:{width:"100%",marginTop:20}}})(function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state=a.getInitState(),a.handleChange=function(e){return function(t){return a.setState(Object(o.a)({},e,t.target.value))}},a.handleSubmit=function(){a.props.onSubmit(Object(u.a)({id:a.state.title.toLowerCase().replace(/ /g,"-")},a.state))},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"getInitState",value:function(){var e=this.props.exercise;return e||{title:"",description:"",muscles:""}}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.muscles,n=this.state,r=n.title,i=n.description,l=n.muscles;return c.a.createElement("form",null,c.a.createElement(M.a,{required:!0,color:"primary",label:"Title",onChange:this.handleChange("title"),value:r,variant:"outlined",margin:"dense",className:t.formControl}),c.a.createElement(B.a,{color:"primary",className:t.formControl},c.a.createElement(D.a,{id:"muscles"},"Muscles"),c.a.createElement(N.a,{required:!0,labelId:"muscles",id:"demo-simple-select",value:l,onChange:this.handleChange("muscles")},c.a.createElement(T.a,{default:!0,disabled:!0},"-- Select Any One --"),a.map(function(e){return c.a.createElement(T.a,{key:e,value:e},e)}))),c.a.createElement(M.a,{className:t.formControl,color:"primary",multiline:!0,rows:"4",fullWidth:!0,label:"Description",onChange:this.handleChange("description"),value:i,margin:"dense",variant:"outlined"}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(A.a,{onClick:this.handleSubmit,variant:"contained",color:"secondary",disabled:!r||!l},this.props.exercise?"Update":"Create"))}}]),t}(r.Component)),L=Object(r.createContext)(),P=L.Provider,I=L.Consumer,q=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},a.handleToggle=function(){a.setState({open:!a.state.open})},a.handleFormSubmit=function(e){a.handleToggle(),a.props.onCreate(e)},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.open,t=this.props.muscles;return c.a.createElement(r.Fragment,null,c.a.createElement(g.a,{title:"Add New Exercise",placement:"left"},c.a.createElement(y.a,{color:"primary",onClick:this.handleToggle,size:"small"},c.a.createElement(k.a,null))),c.a.createElement(v.a,{open:e,onClose:this.handleToggle},c.a.createElement(C.a,null,"Create a New Exercise"),c.a.createElement(O.a,null,c.a.createElement(j.a,null,"Please Fill out the form below"),c.a.createElement(F,{muscles:t,onSubmit:this.handleFormSubmit}))))}}]),t}(r.Component),z=(n=q,function(e){return c.a.createElement(I,null,function(t){return c.a.createElement(n,Object.assign({},t,e))})}),J=Object(w.a)({flex:{flex:1}})(function(e){var t=e.classes;e.onExerciseCreate;return c.a.createElement(f.a,{position:"static",color:"secondary"},c.a.createElement(b.a,null,c.a.createElement(x.a,{variant:"h6",className:t.flex},"Fitness Exercises"),c.a.createElement(z,null)))}),U=a(158),W=a(151),Y=a(141),G=Object(U.a)()(function(e){var t=e.muscles,a=e.category,n=e.onSelect,r=e.width,i=a?t.findIndex(function(e){return e===a})+1:0,l=function(e,a){n(0===a?"":t[a-1])};return"xs"===r||"sm"===r?c.a.createElement(f.a,{color:"secondary",position:"static"},c.a.createElement(W.a,{indicatorColor:"primary",onChange:l,value:i,textColor:"primary",variant:"scrollable",scrollButtons:"on"},c.a.createElement(Y.a,{label:"ALL"}),t.map(function(e){return c.a.createElement(Y.a,{key:e,label:e})}))):"xs"!==r||"sm"!==r?c.a.createElement(f.a,{color:"secondary",position:"static"},c.a.createElement(W.a,{indicatorColor:"primary",onChange:l,value:i,textColor:"primary",centered:!0},c.a.createElement(Y.a,{label:"ALL"}),t.map(function(e){return c.a.createElement(Y.a,{key:e,label:e})}))):void 0}),H=a(73),K=a(142),Q=a(95),R=a(132),V=a(96),X=a(143),Z=a(144),$=a(145),_=a(146),ee=a(147),te=a(93),ae=Object(te.a)(function(e){var t;return{paper:(t={padding:e.spacing(1)},Object(o.a)(t,e.breakpoints.up("sm"),{marginTop:5,height:450}),Object(o.a)(t,e.breakpoints.down("xs"),{height:"100%"}),Object(o.a)(t,"overflowY","auto"),t),items:Object(o.a)({},e.breakpoints.down("xs"),{height:300}),itemsDisplay:Object(o.a)({},e.breakpoints.down("xs"),{height:300})}})(function(e){var t=e.muscles,a=e.exercises,n=e.category,i=e.onSelect,l=e.onDelete,s=e.onSelectEdit,o=e.editMode,u=e.onEdit,m=e.exercise,d=e.classes,p=e.exercise,h=p.id,E=p.title,f=void 0===E?"Welcome Folks!":E,b=p.description,g=void 0===b?"Please Select an exercise from the list on the left.":b;return c.a.createElement(K.a,{container:!0},c.a.createElement(K.a,{item:!0,className:d.items,xs:12,sm:6},c.a.createElement(Q.a,{className:d.paper},a.map(function(e){var t=Object(H.a)(e,2),a=t[0],o=t[1];return n&&n!==a?null:c.a.createElement(r.Fragment,{key:a},c.a.createElement(x.a,{variant:"h6",color:"primary",style:{textTransform:"capitalize"}},a),c.a.createElement(R.a,{component:"ul"},o.map(function(e){var t=e.id,a=e.title;return c.a.createElement(V.a,{key:t,button:!0,onClick:function(){return i(t)}},c.a.createElement(X.a,{primary:a}),c.a.createElement(Z.a,null,c.a.createElement($.a,{onClick:function(){return s(t)}},c.a.createElement(_.a,{color:"primary"})),c.a.createElement($.a,{onClick:function(){return l(t)}},c.a.createElement(ee.a,{color:"error"}))))})))}))),c.a.createElement(K.a,{className:d.itemsDisplay,item:!0,xs:12,sm:6},c.a.createElement(Q.a,{className:d.paper},c.a.createElement(x.a,{variant:"h5",color:"primary",gutterBottom:!0},f),o?c.a.createElement(F,{key:h,exercise:m,muscles:t,onSubmit:u}):c.a.createElement(x.a,{variant:"subtitle1"},g))))}),ne=["shoulders","chest","arms","back","legs"],re=[{id:"overhead-press",title:"Overhead Press",description:"Delts exercise...",muscles:"shoulders"},{id:"dips",title:"Dips",description:"Triceps exercise...",muscles:"arms"},{id:"barbell-curls",title:"Barbell Curls",description:"Biceps exercise...",muscles:"arms"},{id:"bench-press",title:"Bench Press",description:"Chest exercise...",muscles:"chest"},{id:"pull-ups",title:"Pull Ups",description:"Back and biceps exercise...",muscles:"back"},{id:"deadlifts",title:"Deadlifts",description:"Back and leg exercise...",muscles:"back"},{id:"squats",title:"Squats",description:"Legs exercise...",muscles:"legs"}],ce=a(159),ie=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={exercises:re,exercise:{},editMode:!1},a.getExerciseByMuscles=function(){var e=ne.reduce(function(e,t){return Object(u.a)({},e,Object(o.a)({},t,[]))},{});return Object.entries(a.state.exercises.reduce(function(e,t){var a=t.muscles;return e[a]=[].concat(Object(s.a)(e[a]),[t]),e},e))},a.handleExerciseCreate=function(e){return a.setState(function(t){var a=t.exercises;return{exercises:[].concat(Object(s.a)(a),[e])}})},a.handleCategorySelect=function(e){return a.setState({category:e})},a.handleExerciseSelect=function(e){return a.setState(function(t){return{exercise:t.exercises.find(function(t){return t.id===e}),editMode:!1}})},a.handleExerciseDelete=function(e){return a.setState(function(t){var a=t.exercises,n=t.exercise,r=t.editMode;return{exercises:a.filter(function(t){return t.id!==e}),editMode:n.id!==e&&r,exercise:n.id===e?{}:n}})},a.handleExerciseSelectEdit=function(e){return a.setState(function(t){return{exercise:t.exercises.find(function(t){return t.id===e}),editMode:!0}})},a.handleExerciseEdit=function(e){a.setState(function(t){var a=t.exercises;return{exercises:[].concat(Object(s.a)(a.filter(function(t){return t.id!==e.id})),[e]),exercise:e}})},a.getContext=function(){return Object(u.a)({muscles:ne},a.state,{onCreate:a.handleExerciseCreate})},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.getExerciseByMuscles(),t=this.state,a=t.category,n=t.exercise,i=t.editMode;return c.a.createElement(P,{value:this.getContext()},c.a.createElement(r.Fragment,null,c.a.createElement(ce.a,null),c.a.createElement(J,null),c.a.createElement(G,{muscles:ne,category:a,onSelect:this.handleCategorySelect}),c.a.createElement(ae,{muscles:ne,editMode:i,onSelectEdit:this.handleExerciseSelectEdit,onDelete:this.handleExerciseDelete,exercise:n,onSelect:this.handleExerciseSelect,category:a,exercises:e,onEdit:this.handleExerciseEdit})))}}]),t}(r.Component),le=a(72),se=a(149),oe=a(148),ue=Object(le.a)({palette:{primary:{main:oe.a.A400,light:oe.a[300],dark:oe.a[900]},secondary:{main:"#323648"},type:"dark"},spacing:10}),me=document.getElementById("root");l.a.render(c.a.createElement(se.a,{theme:ue},c.a.createElement(ie,null)),me)}},[[81,1,2]]]);
//# sourceMappingURL=main.9f917bbc.chunk.js.map