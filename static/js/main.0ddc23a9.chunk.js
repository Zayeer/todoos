(this.webpackJsonptodoos=this.webpackJsonptodoos||[]).push([[0],{124:function(t,e,a){},152:function(t,e,a){t.exports=a(281)},281:function(t,e,a){"use strict";a.r(e);var r=a(0),o=a.n(r),n=a(33),s=a.n(n),i=a(24),l=a(25),c=a(27),u=a(26),d=a(29),k=a(16),h=a(125),p=a(126);function b(t){return o.a.createElement("li",{className:"task","data-task":t.dataTask,onClick:t.displayTaskDetails,style:t.bgColor},o.a.createElement("input",{type:"checkbox",id:"check-task",onClick:t.checkboxHandler}),o.a.createElement("p",{id:"name"},t.name),o.a.createElement("p",{id:"date"},t.dueDate),o.a.createElement(h.a,{icon:p.a,onClick:t.deleteTask}))}var y=function(t){Object(c.a)(a,t);var e=Object(u.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this,e=this.props.todos.map((function(e){return o.a.createElement(b,{name:e.taskTitle,dueDate:e.dueDate,key:e.taskTitle,dataTask:e.taskTitle,deleteTask:t.props.deleteTask,displayTaskDetails:t.props.displayTaskDetails,checkboxHandler:t.props.checkboxHandler,bgColor:t.props.bgColor})}));return o.a.createElement("ul",{className:"todo-list"},e)}}]),a}(o.a.Component);var f=function(t){return o.a.createElement("form",{className:"add-todo",onSubmit:t.addTaskToList},o.a.createElement("input",{type:"text",placeholder:"Task",className:"task-name",minlength:"1",maxlength:"20"}),o.a.createElement("input",{type:"submit",value:"Add",className:"submit-todo"}))},m=function(t){Object(c.a)(a,t);var e=Object(u.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=new Date,e=t.getFullYear()+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+("0"+t.getDate()).slice(-2);return o.a.createElement("div",{className:"taskDetail-bg",onClick:this.props.closeMenu},o.a.createElement("form",{className:"task-detail"},o.a.createElement("h2",{id:"taskTitle"},this.props.taskTitle),o.a.createElement("input",{type:"date",id:"dueDate",value:this.props.dueDate,onChange:this.props.input,min:e}),o.a.createElement("select",{id:"priority",value:this.props.priority,onChange:this.props.input},o.a.createElement("option",null,"high"),o.a.createElement("option",null,"medium"),o.a.createElement("option",null,"low")),o.a.createElement("textarea",{placeholder:"describe your task...",id:"desc",value:this.props.desc,onChange:this.props.input})))}}]),a}(o.a.Component),v=a(288),g=[{key:1,text:"",value:1},{key:2,text:"Sort by alphabets",value:2},{key:3,text:"Sort by priority",value:3},{key:4,text:"Sort by date",value:4}];var T=function(t){return o.a.createElement(v.a,{clearable:!0,options:g,selection:!0,onChange:t.sortTodos})},D=(a(124),function(t){Object(c.a)(a,t);var e=Object(u.a)(a);function a(t){var r;return Object(i.a)(this,a),(r=e.call(this,t)).state={todos:[],taskProps:{name:"",dueDate:"",priority:"high",desc:""},defaultSort:[]},r.addTaskToList=r.addTaskToList.bind(Object(k.a)(r)),r.duplicateTask=r.duplicateTask.bind(Object(k.a)(r)),r.deleteTask=r.deleteTask.bind(Object(k.a)(r)),r.displayTaskDetails=r.displayTaskDetails.bind(Object(k.a)(r)),r.updateTaskDetails=r.updateTaskDetails.bind(Object(k.a)(r)),r.saveData=r.saveData.bind(Object(k.a)(r)),r.getSavedData=r.getSavedData.bind(Object(k.a)(r)),r.closeTaskDetails=r.closeTaskDetails.bind(Object(k.a)(r)),r.checkboxHandler=r.checkboxHandler.bind(Object(k.a)(r)),r.changeTaskColor=r.changeTaskColor.bind(Object(k.a)(r)),r.taskTextStyling=r.taskTextStyling.bind(Object(k.a)(r)),r.sortTodos=r.sortTodos.bind(Object(k.a)(r)),r.sortByAlphabets=r.sortByAlphabets.bind(Object(k.a)(r)),r.sortByPriority=r.sortByPriority.bind(Object(k.a)(r)),r.sortByDate=r.sortByDate.bind(Object(k.a)(r)),r}return Object(l.a)(a,[{key:"addTaskToList",value:function(t){t.preventDefault();var e=document.querySelector(".task-name");if(!this.duplicateTask(e.value)&&e.value.length>0){var a={taskTitle:e.value,dueDate:"",priority:"high",desc:"",checked:!1};this.setState((function(t){return{todos:t.todos.concat([a]),defaultSort:t.defaultSort.concat([a])}}))}t.currentTarget.reset()}},{key:"duplicateTask",value:function(t){return this.state.todos.some((function(e){return e.taskTitle.toLowerCase()===t.toLowerCase()}))}},{key:"displayTaskDetails",value:function(t){var e=document.querySelector(".taskDetail-bg");if(t.target!==t.currentTarget.children[0]&&t.target!==t.currentTarget.children[3]&&t.target!==t.currentTarget.children[3].children[0]){e.style.display="grid";for(var a=0;a<this.state.todos.length;a++)if(this.state.todos[a].taskTitle.toLowerCase()===t.currentTarget.getAttribute("data-task").toLowerCase()){this.setState({taskProps:{name:this.state.todos[a].taskTitle,dueDate:this.state.todos[a].dueDate,priority:this.state.todos[a].priority,desc:this.state.todos[a].desc}});break}}}},{key:"checkboxHandler",value:function(t){var e=t.target;this.taskTextStyling(e);var a=t.target.parentElement;this.setState((function(t){for(var r=Object(d.a)(t.todos),o=0;o<r.length;o++)if(r[o].taskTitle===a.getAttribute("data-task")){if(e.checked){r[o].checked=!0;break}r[o].checked=!1;break}return{todos:r}}))}},{key:"taskTextStyling",value:function(t){t.checked?t.nextElementSibling.style.textDecoration="line-through":t.nextElementSibling.style.textDecoration="none"}},{key:"updateTaskDetails",value:function(t){var e=this;t.preventDefault();var a=t.target;this.setState((function(t){for(var r=t.todos,o=t.taskProps,n=0;n<r.length;n++)if(r[n].taskTitle===t.taskProps.name){r[n][a.getAttribute("id")]=a.value,o[a.getAttribute("id")]=a.value,a===document.querySelector("#priority")&&e.changeTaskColor(r[n]);break}return{todos:r,taskProps:o}}))}},{key:"changeTaskColor",value:function(t){for(var e=document.querySelector(".task-detail"),a=document.querySelectorAll(".task"),r=0;r<a.length;r++)a[r].getAttribute("data-task").toLowerCase()===t.taskTitle.toLowerCase()&&("medium"===t.priority?(a[r].style.backgroundColor="#FFA500",e.style.backgroundColor="#FFA500"):"low"===t.priority?(a[r].style.backgroundColor="#00FA9A",e.style.backgroundColor="#00FA9A"):(a[r].style.backgroundColor="#B22222",e.style.backgroundColor="#B22222"))}},{key:"closeTaskDetails",value:function(t){if(t.target===t.currentTarget){var e=document.querySelector(".taskDetail-bg");document.querySelector(".task-detail").reset(),e.style.display="none"}}},{key:"deleteTask",value:function(t){var e;e="task"===t.target.parentElement.className?t.target.parentElement:t.target.parentElement.parentElement,this.setState((function(t){for(var a=t.todos,r=t.defaultSort,o=0;o<t.todos.length;o++)if(a[o].taskTitle.toLowerCase()===e.getAttribute("data-task").toLowerCase()){r.splice(r.indexOf(a[o]),1),a.splice(o,1);break}return e.style.display="none",{todos:a,defaultSort:r}}))}},{key:"saveData",value:function(t){this.state.todos.length>0?localStorage.setItem("tasks",JSON.stringify(this.state.defaultSort)):localStorage.removeItem("tasks")}},{key:"getSavedData",value:function(){var t=this,e=JSON.parse(localStorage.getItem("tasks"));if(e){var a=Object(d.a)(e);this.setState({todos:e,defaultSort:a}),e.forEach((function(e){"high"!==e.priority&&t.changeTaskColor(e)}));var r=document.querySelectorAll("input[type=checkbox]");e.forEach((function(e){if(e.checked)for(var a=0;a<r.length;a++){if(r[a].parentElement.getAttribute("data-task")===e.taskTitle){r[a].checked=!0,t.taskTextStyling(r[a]);break}}}))}}},{key:"sortTodos",value:function(t){var e=this,a=t.target.innerText;this.setState((function(t){var r;return"Sort by alphabets"===a?(r=t.todos,{todos:e.sortByAlphabets(r)}):"Sort by priority"===a?(r=t.todos,{todos:e.sortByPriority(r)}):"Sort by date"===a?(r=t.todos,{todos:e.sortByDate(r)}):{todos:Object(d.a)(e.state.defaultSort)}}))}},{key:"sortByAlphabets",value:function(t){var e=[],a=[];return t.forEach((function(t){a.push(t.taskTitle)})),a.sort(),t.forEach((function(t){e[a.indexOf(t.taskTitle)]=t})),e}},{key:"sortByPriority",value:function(t){var e=t.filter((function(t){return"high"===t.priority})),a=t.filter((function(t){return"medium"===t.priority})),r=t.filter((function(t){return"low"===t.priority}));return[].concat(Object(d.a)(e),Object(d.a)(a),Object(d.a)(r))}},{key:"sortByDate",value:function(t){var e=t.filter((function(t){return""===t.dueDate})),a=t.filter((function(t){return""!==t.dueDate})),r=[];a.forEach((function(t){return r.push(new Date(t.dueDate).getTime())})),r.sort((function(t,e){return t-e}));for(var o=r.map((function(t){return new Date(t).getFullYear()+"-"+("0"+(new Date(t).getMonth()+1)).slice(-2)+"-"+("0"+new Date(t).getDate()).slice(-2)})),n=[],s=Object(d.a)(new Set(o)),i=0;i<s.length;i++)for(var l=0;l<a.length;l++)s[i]===a[l].dueDate&&n.push(a[l]);return n.concat(e)}},{key:"componentDidMount",value:function(){window.addEventListener("load",this.getSavedData),window.addEventListener("beforeunload",this.saveData)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("load",this.getSavedData),window.removeEventListener("beforeunload",this.saveData)}},{key:"render",value:function(){var t=this.state.taskProps,e=t.name,a=t.dueDate,r=t.priority,n=t.desc;return o.a.createElement("div",{className:"todo-container"},o.a.createElement(f,{addTaskToList:this.addTaskToList}),o.a.createElement(T,{sortTodos:this.sortTodos}),o.a.createElement(y,{deleteTask:this.deleteTask,displayTaskDetails:this.displayTaskDetails,checkboxHandler:this.checkboxHandler,bgColor:this.state.bgColor,todos:this.state.todos}),o.a.createElement(m,{taskTitle:e,dueDate:a,priority:r,desc:n,input:this.updateTaskDetails,closeMenu:this.closeTaskDetails,checkboxHandler:this.checkboxHandler}))}}]),a}(o.a.Component)),S=function(t){Object(c.a)(a,t);var e=Object(u.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{id:"container"},o.a.createElement("nav",{className:"nav-container"},o.a.createElement("h1",null,"React Todoos")),o.a.createElement(D,null))}}]),a}(o.a.Component);a(280);s.a.render(o.a.createElement(S,null),document.querySelector("#root"))}},[[152,1,2]]]);
//# sourceMappingURL=main.0ddc23a9.chunk.js.map