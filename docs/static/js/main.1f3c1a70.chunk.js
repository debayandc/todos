(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{22:function(e,t,n){e.exports=n(35)},27:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(6),i=n.n(r),l=(n(27),n(13)),c=n(14),s=n(20),d=n(15),u=n(21),m=n(7),f=n(1),p=function(e,t){return{type:"EDIT_TODO",id:e,text:t}},h=function(e,t){return{type:"UPDATE",id:e,text:t}},b=function(e){return{type:"TOGGLE_COMPLETED",id:e}},v=n(2),g="SHOW_ALL",E="SHOW_COMPLETED",w="SHOW_ACTIVE",T=function(e,t){switch(t){case g:return{todos:e,filteredTodos:Object(v.a)(e)};case E:return{todos:e,filteredTodos:Object(v.a)(e.filter((function(e){return e.completed})))};case w:return{todos:e,filteredTodos:Object(v.a)(e.filter((function(e){return!e.completed})))};default:throw new Error("Unknown filter: "+t)}},O=function(e){var t=e.onClick;return a.a.createElement("div",{id:"hamburger",className:"hamburger",onClick:t},"\u2630")},k=(n(32),Object(f.b)((function(e){return{todos:T(e.todos,e.filter)}}))((function(e){var t,n=e.dispatch,r=e.todos,i=e.getSidebarval,l=e.showSidebar,c=(e.getHowToUse,e.showHowToUse,0),s=Object(o.useState)(l),d=Object(m.a)(s,2),u=d[0],f=d[1],h=void 0===r.todos.length?0:r.todos.length;return a.a.createElement("div",{id:"add-todo-sticky",className:"add-todo-sticky",onClick:function(e){e.preventDefault(),l&&(f(!u),i(!u)),r.todos.map((function(e){return e.editing?n(p(e.id)):null}))},style:{opacity:l?.4:1}},a.a.createElement("div",{id:"main-header",className:"main-header"},l?a.a.createElement("div",{className:"placeholder-div"}):a.a.createElement(O,{onClick:function(e){return function(e){e.preventDefault(),f(!u),i(!u)}(e)}}),a.a.createElement("div",{id:"todo-header",className:"todo-header"},"todos")),a.a.createElement("div",{id:"add-todo",className:"add-todo",style:{height:"50px"}},a.a.createElement("button",{id:"toggle-all",className:"toggle-all",onClick:function(e){e.preventDefault(),r.todos.map((function(e){return e.completed?c++:""})),c<r.todos.length&&r.todos.map((function(e){return e.completed?"":n(b(e.id))})),c===r.todos.length&&r.todos.map((function(e){return e.completed?n(b(e.id)):""}))}},"\u203a"),a.a.createElement("form",{id:"form",className:"form",onSubmit:function(e){return function(e){e.preventDefault(),t.value.trim()&&(n(function(e,t){return{type:"ADD_TODO",id:e,text:t}}(h,t.value)),t.value="",h=0)}(e)}},a.a.createElement("label",{for:"form-input",class:"label-hidden"},"What needs to be done"),a.a.createElement("input",{autoComplete:"off",id:"form-input",className:"input-no-style input-override form",required:!0,type:"text",placeholder:"What needs to be done",ref:function(e){return t=e}}))))}))),y=function(e){var t=e.onDoubleClick,n=e.onClick,o=e.completed,r=e.text,i=e.id;return a.a.createElement("li",{id:i,className:"input-no-style li-style",onDoubleClick:t,onClick:n,style:{textDecoration:o?"line-through":"none",fontStyle:o?"italic":"normal"}},r)},S=(n(33),function(e){var t=e.onClick,n=e.checked;return a.a.createElement("label",{className:"container"},a.a.createElement("label",{for:"checkbox",className:"label-hidden"},"Checkbox"),a.a.createElement("input",{type:"checkbox",onClick:t,checked:n}),a.a.createElement("span",{className:"checkmark"}))}),N=(n(34),Object(f.b)()((function(e){var t=e.dispatch,n=e.id,o=e.placeholder;return a.a.createElement(a.a.Fragment,null,a.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),o.value.trim()&&(t(h(n,o.value)),o.value="")}},a.a.createElement("label",{for:"id",className:"label-hidden"},"Edit"),a.a.createElement("input",{id:n,className:"input-no-style edit-input-override",required:!0,type:"text",defaultValue:o,autoFocus:"autofocus",ref:function(e){return o=e},onBlur:function(e){o.value.trim()&&(t(h(n,o.value)),o.value="")}})))}))),C=Object(f.b)((function(e,t){return{active:t.filter===e.filter}}),(function(e,t){return{onClick:function(){return e((n=t.id,o=t.filter,{type:"FILTER_TYPE",id:n,filter:o}));var n,o}}}))((function(e){var t=e.active,n=e.children,o=e.onClick,r=e.showSidebar;return a.a.createElement("button",{id:"filters-btn",className:"filters-btn",onClick:r?null:o,disabled:t},n)})),D=function(e){var t=e.showSidebar;return a.a.createElement("div",{id:"filters",className:"filters"},a.a.createElement(C,{showSidebar:t,filter:g},"All"),a.a.createElement(C,{showSidebar:t,filter:w},"Active"),a.a.createElement(C,{showSidebar:t,filter:E},"Completed"))};var j=Object(f.b)((function(e){return{todos:T(e.todos,e.filter)}}),(function(e){return{toggleTodo:function(t){return e(function(e){return{type:"TOGGLE_TODO",id:e}}(t))},deleteTodo:function(t){return e(function(e){return{type:"DELETE_TODO",id:e}}(t))},editTodo:function(t){return e(p(t))},update:function(t,n){return e(h(t,n))}}}))((function(e){var t=e.todos,n=e.toggleTodo,o=e.deleteTodo,r=e.editTodo,i=e.getSidebarval,l=e.showSidebar,c=0,s=0,d=0,u=0;t.filteredTodos.map((function(e){return e.completed?c++:s++})),t.todos.map((function(e){return e.completed?d++:u++}));var m=function(e){t.filteredTodos.map((function(e){return e.editing?r(e.id):null}))};return a.a.createElement("div",{className:"todolist-container",onClick:function(){l&&i(!l)},style:{opacity:l?.4:1,overflow:l?"hidden":null}},t.todos.length?a.a.createElement(a.a.Fragment,null,a.a.createElement("ul",{id:"ul",className:"ul",onClick:m,style:{}},t.filteredTodos.map((function(e){return a.a.createElement("div",{id:e.id,text:e.text,className:"todolist-items add-todo spanbutton draggable",onClick:m,draggable:!l},a.a.createElement(S,{id:e.id,checked:e.completed,onClick:function(){return o=e.id,void t.filteredTodos.map((function(e){return o===e.id&&n(e.id),e.editing&&r(e.id),null}));var o}}),!0!==e.editing?a.a.createElement("span",{className:"todo-edit-range"},a.a.createElement(y,Object.assign({id:e.id,key:e.id},e,{onDoubleClick:function(){return l?null:r(e.id)},onClick:function(){return l?null:(n=e.id,void t.filteredTodos.map((function(e){return n!==e.id&&e.editing&&r(e.id),null})));var n}})),a.a.createElement("button",{className:"btn",onClick:function(){return l?null:o(e.id)}},"\u2715")):a.a.createElement(N,{key:e.id,id:e.id,placeholder:e.text}))}))),a.a.createElement("div",{id:"footer",className:"add-todo footer-font footer-fix",onClick:m},function(e,t,n,o){return e<o?n?a.a.createElement("div",{id:"completed-count",className:"completed-count"},n," ",n>1?" items left":" item left"):a.a.createElement("div",{id:"completed-count",className:"completed-count"},t," ",t>1?" items completed":" item completed"):t?t===e?a.a.createElement("div",{id:"completed-count",className:"completed-count"},"All items completed"):a.a.createElement("div",{id:"completed-count",className:"completed-count"},t," ",t>1?" items completed":" item completed"):a.a.createElement("div",{id:"completed-count",className:"completed-count"},n," ",n>1?" items left":" item left")}(d,c,s,t.todos.length),a.a.createElement(D,{showSidebar:l}),0!==c?0===s?a.a.createElement("div",{id:"clear-completed",className:"clear-completed",onClick:function(){return l?null:t.filteredTodos.map((function(e){return o(e.id)}))}},"Clear Completed"):a.a.createElement("div",{id:"clear-completed",className:"clear-completed",onClick:function(){return l?null:t.filteredTodos.map((function(e){return e.completed?o(e.id):null}))}},"Clear Completed"):null)):null)}));var H=function(e){var t=e.handleSidebarnav,n=e.hideHowToUse;return a.a.createElement("div",{className:"how-to-use-container"},a.a.createElement("div",{className:"how-to-use-header"},a.a.createElement("div",{className:"hamburger hb2",onClick:function(e){return t(e)}},"\u2630"),a.a.createElement("div",{style:{display:"flex",flexDirection:"row",flexBasis:"90%",justifyContent:"center"}},a.a.createElement("div",{style:{fontSize:"30px",fontWeight:"bold",color:"white",padding:"10px",cursor:"default"}},"How to use"),a.a.createElement("div",{className:"question-mark q-mark2"},"?")),a.a.createElement("button",{className:"btn btn2",onClick:function(e){return n(e)}},"\u2715")),a.a.createElement("ol",{className:"how-to-use-content"},a.a.createElement("li",{className:"instructions"},"Double click on any list item to edit it."),a.a.createElement("li",{className:"instructions"},"To mark an item as completed, tap on the icon on the left of each item."),a.a.createElement("li",{className:"instructions"},"List items can be deleted by clicking on the delete button that appears on the right of each item on clicking."),a.a.createElement("li",{className:"instructions"},"Hold and drag the items to re-order the list."),a.a.createElement("li",{className:"instructions"},"Filter the items based on the tabs at the bottom."),a.a.createElement("li",{className:"instructions"},"Clear Completed option appears at the bottom when one or more items are completed. Click it to remove completed items from the list.")),a.a.createElement("button",{id:"filters-btn",className:"filters-btn close-btn",onClick:function(e){return n(e)}},"Close"))},U=function(e){var t=e.showHowToUse,n=e.getHowToUse,r=Object(o.useState)(t),i=Object(m.a)(r,2),l=i[0],c=i[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"how-to-use",onClick:function(e){e.preventDefault(),c(!l),n(!l)}},a.a.createElement("div",{style:{fontSize:"15px"}},"How to use "),a.a.createElement("div",{className:"question-mark"},"?")),a.a.createElement("div",null,"Active List",a.a.createElement("li",null,"qwerty")),a.a.createElement("div",null,"Pending Lists",a.a.createElement("li",null,"qwerty"),a.a.createElement("li",null,"asdfgh")),a.a.createElement("div",null,"Completed Lists",a.a.createElement("li",null,"poiuytr"),a.a.createElement("li",null,"lkjhgf"),a.a.createElement("li",null,"mnbvcx")),a.a.createElement("div",null,"All Lists",a.a.createElement("li",null,"qwerty"),a.a.createElement("li",null,"asdfgh"),a.a.createElement("li",null,"poiuytr"),a.a.createElement("li",null,"lkjhgf"),a.a.createElement("li",null,"mnbvcx")))},x=function(e){var t=e.onClick,n=e.showHowToUse,o=e.getHowToUse;return a.a.createElement("div",{id:"sidebar-menu",className:"sidebar-menu",onClick:t},a.a.createElement("div",{id:"sidebar-header",className:"sidebar-header"}," todos options"),a.a.createElement("div",{id:"sidebar-options",className:"sidebar-options"},a.a.createElement(U,{showHowToUse:n,getHowToUse:o})),a.a.createElement("div",{id:"sidebar-footer",className:"sidebar-footer"}," \xa9 Debayan Chatterjee, 2019"))},A=null,L=-1,P=-1,_=function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={showSidebar:!1,showHowToUse:!1},n.handleClick=function(e){var t=n.props,o=t.todos,a=t.editTodo;n.state.showSidebar&&n.setState({showSidebar:!n.state.showSidebar}),o.filteredTodos.map((function(e){return e.editing?a(e.id):null}))},n.handleDragStart=function(e){L=e.target.id,P=e.target.id,e.dataTransfer.setData("text",e.target.id),e.dataTransfer.dropEffect="move";var t=n.props.todos.filteredTodos.map((function(e){return e}));A=Object.assign({},t.splice(Number(L),1)[0]),t.splice(Number(L),0,A),n.props.dragAction(Number(L),1,A)},n.onDragEnter=function(e){e.target.parentElement.parentElement.classList.contains("draggable")&&e.target.parentElement.parentElement.classList.add("over")},n.onDragLeave=function(e){e.stopPropagation(),e.target.parentElement.parentElement.classList.contains("draggable")&&e.target.parentElement.parentElement.classList.remove("over")},n.handleDragOver=function(e,t){e.preventDefault(),e.dataTransfer.dropEffect="move",e.target.id!==P&&(function(e){for(var t=["outer-container","todo-header","toggle-all","form-input","form","add-todo","add-todo-sticky","footer","completed-count","clear-completed","filters","filters-btn"],n=0;n<t.length;n++)if(t[n]===e)return!0;return!1}(e.target.id)||(n.props.dragAction(Number(P),1),"ul"!==e.target.id?(P=e.target.id,n.props.dragAction(Number(P),0,A)):(P=t-1,n.props.dragAction(P,0,A))))},n.onDragEnd=function(e){n.props.dragAction(Number(P),1,A);var t=document.querySelectorAll(".draggable");[].forEach.call(t,(function(e){e.classList.remove("over")}))},n.handleSidebarnav=function(e){n.state.showHowToUse&&n.setState({showHowToUse:!n.state.showHowToUse}),n.setState({showSidebar:!n.state.showSidebar})},n.handleShowHowToUse=function(e){n.setState({showHowToUse:!n.state.showHowToUse,showSidebar:!n.state.showSidebar})},n.hideHowToUse=function(e){n.setState({showHowToUse:!n.state.showHowToUse})},n.onClickOpenSidebar=function(e){e.stopPropagation()},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{id:"outer-container",className:"outer-container",onClick:this.handleClick,onDragStart:function(t){return e.handleDragStart(t)},onDragEnter:function(t){return e.onDragEnter(t)},onDragLeave:function(t){return e.onDragLeave(t)},onDragOver:function(t){return e.handleDragOver(t,e.props.todos.filteredTodos.length)},onDragEnd:function(t){return e.onDragEnd(t)}},a.a.createElement("div",{id:"inner-container",className:"inner-container",onClick:this.handleClick},this.state.showSidebar?a.a.createElement(x,{onClick:function(t){return e.onClickOpenSidebar(t)},showHowToUse:this.state.showHowToUse,getHowToUse:function(t){return e.handleShowHowToUse(t)}}):null,a.a.createElement(k,{getSidebarval:function(t){return e.handleSidebarnav(t)},showSidebar:this.state.showSidebar,showHowToUse:this.state.showHowToUse,getHowToUse:function(t){return e.handleShowHowToUse(t)}}),a.a.createElement(j,{getSidebarval:function(t){return e.handleSidebarnav(t)},showSidebar:this.state.showSidebar}),this.state.showHowToUse&&a.a.createElement(H,{handleSidebarnav:function(t){return e.handleSidebarnav(t)},hideHowToUse:function(t){return e.hideHowToUse(t)}})))}}]),t}(o.Component),W=Object(f.b)((function(e){return{todos:T(e.todos,e.filter)}}),(function(e){return{editTodo:function(t){return e(p(t))},dragAction:function(t,n,o){return e(function(e,t,n){return{type:"DRAG_ACTION",index:e,method:t,object:n}}(t,n,o))}}}))(_),G=n(4),I=n(17),q=n(18);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(n,!0).forEach((function(t){Object(q.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function B(e){for(var t=0;t<e.length;t++)e[t].id!==t&&(e[t].id=t)}var J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":var n=0===e.length?0:t.id,o=[{id:n,text:t.text,completed:!1,editing:!1}].concat(Object(v.a)(e));return B(o),o;case"EDIT_TODO":return e.map((function(e){return e.id===t.id?F({},e,{editing:!e.editing}):F({},e,{editing:!1})}));case"UPDATE":var a=Object(v.a)(e);return a[t.id].text=t.text,a[t.id].editing=!a[t.id].editing,a;case"TOGGLE_TODO":return e.map((function(e){return e.id===t.id?F({},e,{completed:!e.completed}):e}));case"DELETE_TODO":var r=Object(v.a)(e);return B(r=r.filter((function(e){return e.id!==t.id}))),r;case"TOGGLE_COMPLETED":var i=Object(v.a)(e);return i[t.id].completed=!i[t.id].completed,i;case"DRAG_ACTION":var l=Object(v.a)(e);return void 0!==t.object?l.splice(t.index,t.method,t.object):l.splice(t.index,t.method),B(l),l;default:return e}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER_TYPE":return t.filter;default:return e}},z=Object(G.combineReducers)({todos:J,filter:M}),V=function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){console.log("Data not saved")}},Y=n(19),$=n.n(Y),K=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}!function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");K?(!function(e,t){fetch(e).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Q(t,e)}))}}();var X=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),Z=Object(G.createStore)(z,X,Object(I.composeWithDevTools)());Z.subscribe((function(){V({todos:Z.getState().todos})})),Z.subscribe($()((function(){V({todos:Z.getState().todos})}),1e3)),i.a.render(a.a.createElement(f.a,{store:Z},a.a.createElement(W,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.1f3c1a70.chunk.js.map