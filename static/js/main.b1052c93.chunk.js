(this["webpackJsonpproject-board"]=this["webpackJsonpproject-board"]||[]).push([[0],{213:function(e,t,a){e.exports=a.p+"static/media/JohnCena.6e949f40.png"},214:function(e,t,a){e.exports=a.p+"static/media/AlexaRoy.e5949df4.png"},215:function(e,t,a){e.exports=a.p+"static/media/PeterSnow.a7b494ce.png"},222:function(e,t,a){e.exports=a(484)},231:function(e,t,a){},336:function(e,t,a){},409:function(e,t,a){},421:function(e,t,a){},422:function(e,t,a){},423:function(e,t,a){},427:function(e,t,a){},484:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"loadCategorySuccess",(function(){return O})),a.d(r,"createTaskSuccess",(function(){return S})),a.d(r,"updateTaskSuccess",(function(){return D})),a.d(r,"dragAndDropCardUpdateSuccess",(function(){return j})),a.d(r,"addCategorySuccess",(function(){return w})),a.d(r,"loadCategory",(function(){return M})),a.d(r,"createTask",(function(){return N})),a.d(r,"updateTask",(function(){return I})),a.d(r,"dragAndDropCardUpdate",(function(){return A})),a.d(r,"addCategory",(function(){return x}));var n=a(0),c=a.n(n),o=a(12),i=a.n(o),s=a(25),l=(a(231),a(19)),d=a(20),u=a(22),g=a(21),p=a(50),m=a(210),C=a.n(m),h=a(18),f=(a(336),a(13)),y=function(e){var t=e.children;return c.a.createElement("div",{className:"nav-component"},c.a.createElement(f.h,{className:"navbar",bsStyle:"Green",fixedTop:!0},c.a.createElement(f.h.Header,null,c.a.createElement(f.h.Brand,null,c.a.createElement("a",{href:"/"},"Project Board"))),t))},k=(a(409),a(152)),v=a.n(k),E=a(98),_=a.n(E),b=[{category_title:"On Track",category_id:1,tasks:[{task_id:11,task_title:"CBSE grade 4 Math",participant:["JohnCena","PeterSnow"],date:new Date,progress:78}]},{category_title:"Delayed",category_id:2,tasks:[{task_id:12,task_title:"CBSE grade 5 Math",participant:["JohnCena"],date:new Date,progress:88}]}],T=function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,null,[{key:"getAllCategory",value:function(){return new Promise((function(e,t){return e(b)}))}}]),e}();function O(e){return{type:"LOAD_CATEGORY_SUCCESS",category:e}}function S(e){return{type:"CREATE_TASK_SUCCESS",data:e}}function D(e){return{type:"UPDATE_TASK_SUCCESS",data:e}}function j(e,t,a){return{type:"CARD_DRAG_AND_DROP_SUCCESS",data:{dragListId:e,dropListId:t,cardId:a}}}function w(e){return{type:"CREATE_CATEGORY_SUCCESS",categoryName:e}}function M(){return function(e){return T.getAllCategory().then((function(t){e(O(t))})).catch((function(e){throw e}))}}function N(e){return function(t){t(S(e))}}function I(e){return function(t){t(D(e))}}function A(e,t,a){return function(r){r(j(e,t,a))}}function x(e){return function(t){t(w(e))}}var R=a(212),U=a.n(R),B=(a(199),a(421),a(213)),P=a.n(B),V=a(214),G=a.n(V),L=a(215),Y=a.n(L),H=[{name:"AlexaRoy",pic:G.a},{name:"JohnCena",pic:P.a},{name:"PeterSnow",pic:Y.a}],J=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.card,a=e.categoryId,r=e.onClickOnCard;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card_grid"},c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("h6",null,t.task_title," "))),c.a.createElement("div",{className:"card_container"},c.a.createElement("div",{className:"card_avatar_container"},t.participant.map((function(e){return c.a.createElement("img",{alt:e,src:(t=e,H.filter((function(e){return e.name===t}))[0].pic),className:"card_avatar"});var t})),c.a.createElement(f.f,{glyph:"plus-sign",onClick:function(){return r(t.task_id,a)}})),c.a.createElement("div",{className:"card_calender"},c.a.createElement("span",null," ",c.a.createElement(f.f,{glyph:"calendar",onClick:function(){return r(t.task_id,a)}}),U()(t.date).format("DD MMM, YYYY"))),c.a.createElement("div",{className:"card_progress",onClick:function(){return r(t.task_id,a)}},c.a.createElement("span",null,t.progress," %")))))}}]),a}(c.a.Component),W=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.connectDragSource,a=e.connectDropTarget,r=e.categoryId,n=e.onClickOnCard;return t(a(c.a.createElement("div",null,c.a.createElement(J,{card:this.props.card,categoryId:r,onClickOnCard:n}))))}}]),a}(n.Component),F={hover:function(e,t,a){var r=t.getItem().index,n=e.index,c=t.getItem().listId;if(r!==n){var i=Object(o.findDOMNode)(a).getBoundingClientRect(),s=(i.bottom-i.top)/2,l=t.getClientOffset().y-i.top;r<n&&l<s||r>n&&l>s||e.listId===c&&(e.moveCard(r,n),t.getItem().index=n)}}};var K=_()(Object(p.DropTarget)("CARD",F,(function(e){return{connectDropTarget:e.dropTarget()}})),Object(p.DragSource)("CARD",{beginDrag:function(e){return{index:e.index,listId:e.listId,card:e.card}},endDrag:function(e,t){var a=t.getItem(),r=t.getDropResult();r&&r.listId!==a.listId&&(e.actions.dragAndDropCardUpdate(e.listId,r.listId,e.card.task_id),e.removeCard(a.index))}},(function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}})),Object(s.b)((function(e){return{}}),(function(e){return{actions:Object(h.b)(r,e)}})))(W),$=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).state={cards:[]},r}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.setState({cards:this.props.list})}},{key:"componentWillReceiveProps",value:function(e){this.setState({cards:e.list})}},{key:"pushCard",value:function(e){this.setState(v()(this.state,{cards:{$push:[e]}}))}},{key:"removeCard",value:function(e){}},{key:"moveCard",value:function(e,t){var a=this.state.cards[e];this.setState(v()(this.state,{cards:{$splice:[[e,1],[t,0,a]]}}))}},{key:"render",value:function(){var e=this,t=this.state.cards,a=this.props,r=a.canDrop,o=a.isOver,i=a.connectDropTarget,s=a.id,l=a.onClickOnCard,d=r&&o?"#00b386":"#FFF",u=0===t.length?"50px":"auto",g={minWidth:"200px",width:.2*window.innerWidth,backgroundColor:d,height:u};return i(c.a.createElement("div",{style:g},t.map((function(t,a){return c.a.createElement(n.Fragment,null,t&&c.a.createElement(K,{key:t.task_id,index:t.task_id,listId:s,card:t,categoryId:s,onClickOnCard:l,removeCard:function(){return e.removeCard()},moveCard:function(){return e.moveCard()}}))}))))}}]),a}(n.Component);var z=_()(Object(p.DropTarget)("CARD",{drop:function(e,t,a){var r=e.id,n=t.getItem();return r!==n.listId&&a.pushCard(n.card),{listId:r}}},(function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver(),canDrop:t.canDrop()}})),Object(s.b)((function(e){return{category_fetching:e.categoryReducer.category_fetching,categories:e.categoryReducer.categories}}),(function(e){return{actions:Object(h.b)(r,e)}})))($),X=a(76),q=(a(422),function(e){var t=e.show,a=e.onHide,r=e.ModalTitle,n=e.addAdd,o=e.addBtnLabel,i=e.children;return c.a.createElement(f.g,{className:"model",backdrop:!1,show:t,onHide:a},c.a.createElement(f.g.Header,{closeButton:!0},c.a.createElement(f.g.Title,null,r)),c.a.createElement(f.g.Body,null,i),c.a.createElement(f.g.Footer,null,c.a.createElement(f.a,{id:"cancel",bsStyle:"white",className:"model_button model_btn_cancel",onClick:a},"Cancel"),c.a.createElement(f.a,{id:"submit",bsStyle:"Green",className:"model_button model_btn_create",onClick:function(){return n()}},o)))}),Q=(a(423),function(e){var t=e.showCreateCategoryModal,a=e.categoryName,r=e.openCreateCategoryModal,n=e.closeCreateCategoryModal,o=e.changeCategoryName,i=e.addCategory;return c.a.createElement("div",{className:"addCategory"},c.a.createElement("div",{className:"addCategory_card",onClick:function(){return r()}},c.a.createElement("h5",{id:"addNewMember",className:"addCategory_grid"},"Add New Category")),c.a.createElement(q,{show:t,onHide:n,ModalTitle:"Add Category",addAdd:i,addBtnLabel:"Create"},c.a.createElement("form",null,c.a.createElement(f.e,{controlId:"formBasicText",validationState:""},c.a.createElement(f.c,null,"Category Name"),c.a.createElement(f.d,{type:"text",value:a,placeholder:"Enter Category Name",onChange:function(e){return o(e)}})))))}),Z=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).closeCreateCategoryModal=function(){r.setState({showCreateCategoryModal:!1,categoryName:null})},r.openCreateCategoryModal=function(){r.setState({showCreateCategoryModal:!0})},r.changeCategoryName=function(e){r.setState({categoryName:e.target.value})},r.addCategory=function(){var e=r.state.categoryName;Object(X.isEmpty)(e)||(r.props.actions.addCategory(e),r.setState({showCreateCategoryModal:!1,categoryName:null}))},r.state={showCreateCategoryModal:!1,categoryName:null},r}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.showCreateCategoryModal,a=e.categoryName;return c.a.createElement("div",null,c.a.createElement(Q,{showCreateCategoryModal:t,categoryName:a,openCreateCategoryModal:this.openCreateCategoryModal,closeCreateCategoryModal:this.closeCreateCategoryModal,changeCategoryName:this.changeCategoryName,addCategory:this.addCategory}))}}]),a}(n.Component);var ee=Object(s.b)((function(e){return{}}),(function(e){return{actions:Object(h.b)(r,e)}}))(Z),te=a(217),ae=a.n(te),re=a(216),ne=a.n(re),ce=(a(426),a(427),function(e){var t=e.showCreateTaskModal,a=e.showModal,r=e.taskTitle,n=e.particepants,o=e.selectedDate,i=e.progressValue,s=e.changeTaskTitle,l=e.closeCreateTaskModal,d=e.openCreateTaskModal,u=e.onChangeDate,g=e.onToggleCheckbox,p=e.onChangeSliderValue,m=e.createTasks;return c.a.createElement("div",{className:"createTask"},c.a.createElement("div",{className:"createTask_card",onClick:function(){return d()}},c.a.createElement("h5",{id:"createTask",className:"createTask_grid"},c.a.createElement(f.f,{glyph:"plus-sign"}),c.a.createElement("br",null),"Create Task")),c.a.createElement(q,{show:t,onHide:l,ModalTitle:a?"Update Task":"Create Task",addAdd:m,addBtnLabel:a?"Update":"Create"},c.a.createElement("form",null,c.a.createElement(f.e,{controlId:"formBasicText",validationState:""},c.a.createElement(f.c,null,"Title"),c.a.createElement(f.d,{type:"text",value:r,placeholder:"Enter Task Title",onChange:function(e){return s(e)}})),c.a.createElement("div",null,c.a.createElement(f.c,null,"Candidates"),H.map((function(e){return c.a.createElement(f.b,{name:e.name,checked:n.includes(e.name),onChange:function(){return g(e.name)}},c.a.createElement("img",{alt:e.name,src:e.pic,style:{height:30,width:30}})," ",c.a.createElement("span",null,e.name))}))),c.a.createElement(f.c,null,"Task Date"),c.a.createElement("div",null,c.a.createElement(ae.a,{selected:o,onChange:u})),c.a.createElement("br",null),c.a.createElement(f.c,null,"Task Progress"),c.a.createElement("div",null,c.a.createElement(ne.a,{value:i,change:p,step:1,max:100,min:0,orientation:"horizontal"})))))}),oe=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).closeCreateTaskModal=function(){r.setState({showCreateTaskModal:!1,taskTitle:null,particepants:[],selectedDate:new Date,progressValue:0}),r.props.clearCategoryData()},r.openCreateTaskModal=function(){r.setState({showCreateTaskModal:!0})},r.changeTaskTitle=function(e){r.setState({taskTitle:e.target.value})},r.idGenerator=function(e){for(var t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890",r=0;r<e;r++)t+=a.charAt(Math.floor(Math.random()*a.length));return t},r.createTasks=function(){var e=r.state,t=e.taskTitle,a=e.particepants,n=e.selectedDate,c=e.progressValue,o=r.props,i=o.category_id,s=o.showModal,l=o.category,d=o.taskId;if(!Object(X.isEmpty)(t)&&!Object(X.isEmpty)(a)){if(s){var u={category_id:l.category_id,taskData:{task_id:d,task_title:t,participant:a,date:n,progress:c}};r.props.actions.updateTask(u)}else{var g={category_id:i,taskData:{task_id:r.idGenerator(5)+r.state.taskTitle+r.idGenerator(5),task_title:t,participant:a,date:n,progress:c}};r.props.actions.createTask(g)}r.props.clearCategoryData(),r.setState({showCreateTaskModal:!1,taskTitle:null,particepants:[],selectedDate:new Date,progressValue:0})}},r.onChangeDate=function(e){r.setState({selectedDate:e})},r.onToggleCheckbox=function(e){var t=r.state.particepants;t.includes(e)?t=t.filter((function(t){return t!==e})):t.push(e),r.setState({particepants:t})},r.onChangeSliderValue=function(e){r.setState({progressValue:e.target.value})},r.state={showCreateTaskModal:!1,taskTitle:null,particepants:[],selectedDate:new Date,progressValue:0},r}return Object(d.a)(a,[{key:"componentWillReceiveProps",value:function(e){if(e.showModal){var t=function(e,t){for(var a=-1,r=0;r<e.length;r++)if(e[r].task_id===t){a=r;break}return a}(e.category.tasks,e.taskId),a=e.category.tasks[t];this.setState({showCreateTaskModal:!0,taskTitle:a.task_title,particepants:a.participant,selectedDate:a.date,progressValue:a.progress})}}},{key:"render",value:function(){var e=this.state,t=e.showCreateTaskModal,a=e.taskTitle,r=e.particepants,n=e.selectedDate,o=e.progressValue,i=this.props.showModal;return c.a.createElement("div",null,c.a.createElement(ce,{showCreateTaskModal:t,showModal:i,taskTitle:a,particepants:r,selectedDate:n,progressValue:o,changeTaskTitle:this.changeTaskTitle,closeCreateTaskModal:this.closeCreateTaskModal,openCreateTaskModal:this.openCreateTaskModal,onChangeDate:this.onChangeDate,onToggleCheckbox:this.onToggleCheckbox,onChangeSliderValue:this.onChangeSliderValue,createTasks:this.createTasks}))}}]),a}(n.Component);var ie=Object(s.b)((function(e){return{}}),(function(e){return{actions:Object(h.b)(r,e)}}))(oe),se=function(e){var t=e.categories,a=e.taskId,r=e.categoryId,n=e.projectTitle,o=e.onClickOnCard,i=e.clearCategoryData;return c.a.createElement("div",{className:"project"},t&&t.map((function(e,t){return c.a.createElement("div",{id:"members",key:e.category_id,className:"project_grid project_taskgrid"},c.a.createElement("div",{className:"project_card"},c.a.createElement("h5",{className:"project_title"},e.category_title)),c.a.createElement(z,{id:e.category_id,CNumber:e.category_id,list:e.tasks,memberName:e.category_title,projectTitle:n,onClickOnCard:o}),c.a.createElement(ie,{showModal:e.category_id===r,taskId:a,category:e,category_id:e.category_id,clearCategoryData:i}))})),c.a.createElement("div",{className:"project_grid project_addmember"},c.a.createElement(ee,{projectTitle:n})))},le=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).onClickOnCard=function(t,a){e.setState({taskId:t,categoryId:a})},e.clearCategoryData=function(){e.setState({taskId:-1,categoryId:-1})},e.state={taskId:-1,categoryId:-1},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.actions.loadCategory()}},{key:"render",value:function(){var e=this.props.categories,t=this.state,a=t.taskId,r=t.categoryId;return c.a.createElement("div",null,c.a.createElement(y,null),c.a.createElement(se,{categories:e,taskId:a,categoryId:r,onClickOnCard:this.onClickOnCard,clearCategoryData:this.clearCategoryData}))}}]),a}(n.Component);var de=Object(s.b)((function(e){return{categories:e.categoryReducer.categories,category_fetching:e.categoryReducer.category_fetching}}),(function(e){return{actions:Object(h.b)(r,e)}}))(le),ue={grid:{width:"100%",margin:"2px auto",whiteSpace:"nowrap",overflowX:"auto",overflowY:"hidden",verticalAlign:"text-top"}},ge=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{style:ue.grid},c.a.createElement(de,{projectTitle:"Project Board"}))}}]),a}(n.Component),pe=Object(p.DragDropContext)(C.a)(ge),me={categories:[],category_fetching:!1},Ce=function(e,t){for(var a=-1,r=0;r<e.length;r++)if(e[r].category_id===t){a=r;break}return a},he=function(e,t){for(var a=-1,r=0;r<e.length;r++)if(e[r].task_id===t){a=r;break}return a};var fe=Object(h.c)({categoryReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_CATEGORY_SUCCESS":return{categories:t.category,category_fetching:!e.category_fetching};case"CREATE_CATEGORY_SUCCESS":return e.categories.push({category_title:t.categoryName,category_id:e.categories.length+1,tasks:[]}),{categories:e.categories,category_fetching:!e.category_fetching};case"CREATE_TASK_SUCCESS":var a=Ce(e.categories,t.data.category_id);return e.categories[a].tasks.push(t.data.taskData),Object.assign({},e,{category_fetching:!e.category_fetching,categories:e.categories});case"UPDATE_TASK_SUCCESS":var r=Ce(e.categories,t.data.category_id),n=he(e.categories[r].tasks,t.data.taskData.task_id);return e.categories[r].tasks[n]=t.data.taskData,Object.assign({},e,{categories:e.categories,category_fetching:!e.category_fetching});case"CARD_DRAG_AND_DROP_SUCCESS":var c=Ce(e.categories,t.data.dragListId),o=Ce(e.categories,t.data.dropListId),i=he(e.categories[c].tasks,t.data.cardId);e.categories[o].tasks.push(e.categories[c].tasks[i]);var s=e.categories[c].tasks.filter((function(e){return e.task_id!==t.data.cardId}));return e.categories[c].tasks=s,{categories:e.categories,category_fetching:!e.category_fetching};default:return e}}}),ye=a(221);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ke=Object(h.d)(fe,Object(h.a)(ye.a));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s.a,{store:ke},c.a.createElement(pe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[222,1,2]]]);
//# sourceMappingURL=main.b1052c93.chunk.js.map