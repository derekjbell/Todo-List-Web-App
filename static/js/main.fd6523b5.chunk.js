(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){e.exports=n(43)},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(22),c=n.n(r),l=n(15),i=n(5),d=n(6),s=n(8),u=n(7),p=n(9),m=n(12),h=n(10);var f={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},b={color:"#fff",textDecoration:"none"},y=function(){return a.a.createElement("header",{style:f},a.a.createElement("h1",null,"Todo List"),a.a.createElement(m.b,{style:b,to:"/"},"Home")," | ",a.a.createElement(m.b,{style:b,to:"/about"},"About"))},E=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"3px #ccc dotted",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,n=e.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.checkComplete.bind(this,t)})," "," ",n,a.a.createElement("button",{onClick:this.props.delTodo.bind(this,t),style:v},"x")))}}]),t}(o.Component),v={background:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},g=E,j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map(function(t){return a.a.createElement(g,{key:t.id,todo:t,checkComplete:e.props.checkComplete,delTodo:e.props.delTodo})})}}]),t}(o.Component),O=n(25),k=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={title:""},n.onSubmit=function(e){e.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n.onChange=function(e){return n.setState(Object(O.a)({},e.target.name,e.target.value))},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add item to your todo list here...",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),t}(o.Component);var x=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is the TodoList App that I created to learn React!"))},w=n(26),C=n.n(w),T=(n(42),function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[]},n.checkComplete=function(e){n.setState({todos:n.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},n.delTodo=function(e){n.setState({todos:Object(l.a)(n.state.todos.filter(function(t){return t.id!==e}))})},n.addTodo=function(e){var t={id:C.a.v4(),title:e,completed:!1};n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t])})},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(y,null),a.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement(k,{addTodo:e.addTodo}),a.a.createElement(j,{todos:e.state.todos,checkComplete:e.checkComplete,delTodo:e.delTodo}))}}),a.a.createElement(h.a,{path:"/about",component:x}))))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(T,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.fd6523b5.chunk.js.map