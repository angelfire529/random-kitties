(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{170:function(e,t,a){e.exports=a(401)},175:function(e,t,a){},176:function(e,t,a){},191:function(e,t){},193:function(e,t){},224:function(e,t){},225:function(e,t){},273:function(e,t){},275:function(e,t){},298:function(e,t){},389:function(e,t,a){},390:function(e,t,a){},401:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(67),i=a.n(s),c=(a(175),a(22)),o=a(23),l=a(28),u=a(27),h=a(33),m=(a(176),a(3)),d=a(177),g=function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,[{key:"GetRandomCat",value:function(){return new Promise(function(e,t){d.get("http://aws.random.cat/meow",function(a,n,r){if(a)t(a);else{var s=JSON.parse(r);e(s.file)}})})}},{key:"GetImagesByCategory",value:function(e){var t=JSON.parse(localStorage.getItem("categories")).find(function(t){return t.category.toLowerCase()===e.toLowerCase()});return t?t.images:[]}},{key:"AddCategory",value:function(e,t){var a=JSON.parse(localStorage.getItem("categories")),n={category:e,images:[t]};if(a){for(var r=-1,s=0;s<a.length;s++)if(a[s].category.toLowerCase()===e.toLowerCase()){r=s;break}-1!==r?a[r].images.push(t):a.push(n)}else a=[n];localStorage.setItem("categories",JSON.stringify(a))}},{key:"Exists",value:function(e){return!!JSON.parse(localStorage.getItem("categories")).find(function(t){return t.category.toLowerCase()===e.toLowerCase()})}}],[{key:"getInstance",value:function(){return this._INSTANCE?this._INSTANCE:this._INSTANCE=new e}}]),e}();g._INSTANCE=null;var b=g.getInstance(),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).props=e,a.handleSubmit=a.handleSubmit.bind(Object(m.a)(Object(m.a)(a))),a.handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a.handleKeyPress=a.handleKeyPress.bind(Object(m.a)(Object(m.a)(a))),a.refresh=a.refresh.bind(Object(m.a)(Object(m.a)(a))),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).props=e,a.state={value:""},a.refresh=a.refresh.bind(Object(m.a)(Object(m.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(Object(m.a)(a))),a.handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.addCat(this.state.value,this.props.imageSrc),this.setState({value:""})}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleKeyPress",value:function(e){13===e.which&&this.handleSubmit(e)}},{key:"refresh",value:function(){this.props.refreshCat()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"form-inline",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group col-xs-12 col-xl-7"},r.a.createElement("div",{className:"category--input"},r.a.createElement("label",{className:"category--label"},"Category"),r.a.createElement("input",{className:"form-control",type:"text",placeholder:"enter cagetory",value:this.state.value,onChange:this.handleChange,onKeyPress:this.handleKeyPress,required:!0}))),r.a.createElement("div",{className:"form-group col-xs-12 col-xl-5"},r.a.createElement("div",{className:"btn-container "},r.a.createElement("button",{type:"submit",className:"btn btn-sm btn-outline-primary"},"Submit"),r.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary btn-next",onClick:this.refresh},"Next")))))}}]),t}(n.Component),p=(a(389),function(e){return r.a.createElement("div",{className:"category-container col-12  d-inline-flex"},r.a.createElement("div",{className:"col-8"},r.a.createElement("button",{type:"button",className:"btn btn-link",onClick:function(){return t=e.name,e.getCats(t),void e.show();var t}},e.name)),r.a.createElement("div",{className:"col-4"},r.a.createElement("span",{className:"badge badge-primary badge-pill"},e.total)))}),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).props=e,a.state={imgSrc:null},a.catService=b,a.refreshCat=a.refreshCat.bind(Object(m.a)(Object(m.a)(a))),a.addCategory=a.addCategory.bind(Object(m.a)(Object(m.a)(a))),a.getCategories=a.getCategories.bind(Object(m.a)(Object(m.a)(a))),a.printCategories=a.printCategories.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.refreshCat()}},{key:"addCategory",value:function(e,t){this.catService.Exists(e)?this.props.show():this.props.hide(),this.catService.AddCategory(e,t)}},{key:"getCategories",value:function(){return console.log(localStorage.getItem("categories")),JSON.parse(localStorage.getItem("categories"))}},{key:"printCategories",value:function(){var e=this,t=this.getCategories();return!t||t&&0===t.length?"":t.map(function(t,a){return r.a.createElement("li",{key:a+3},r.a.createElement(p,{key:a,name:t.category,show:e.props.show,getCats:e.props.setCat,total:t.images.length}))})}},{key:"refreshCat",value:function(){var e=this;this.catService.GetRandomCat().then(function(t){e.setState({imgSrc:t})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:this.state.imgSrc,className:"card-img-top img-cat",alt:"cat"}),r.a.createElement("div",{className:"card-body"},r.a.createElement(f,{imageSrc:this.state.imgSrc,refreshCat:this.refreshCat,addCat:this.addCategory}),r.a.createElement("div",{className:"cats"},r.a.createElement("ul",null,this.printCategories()))))}}]),t}(n.Component),y=a(169),O=(a(390),function(e){return r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-3 ml-2 mt-3 mr-2"},r.a.createElement("a",{target:"_blank",className:"margin-right--10",href:e.src},r.a.createElement("img",{src:e.src,width:"150px",height:"125px",alt:"i"})))}),C=function(e){var t;return r.a.createElement("div",{className:"slide-out"},r.a.createElement("span",{className:"close",onClick:function(){e.hide()}},"x"),r.a.createElement("div",{className:"row"},((t=e.cat)?b.GetImagesByCategory(t):[]).map(function(e,t){return r.a.createElement(O,{key:t,src:e})})))},j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).props=e,a.state={show:!1,category:null},a.hideSlideOut=a.hideSlideOut.bind(Object(m.a)(Object(m.a)(a))),a.getCategory=a.getCategory.bind(Object(m.a)(Object(m.a)(a))),a.setShow=a.setShow.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"hideSlideOut",value:function(){this.setState({show:!1})}},{key:"setShow",value:function(){this.setState({show:!0})}},{key:"getCategory",value:function(e){this.setState({category:e})}},{key:"render",value:function(){var e=null;return this.state.show&&(e=r.a.createElement(y.CSSTransition,{in:this.state.show,enter:this.state.show,exit:!this.state.show,appear:!0,timeout:15e3,classNames:"slide"},r.a.createElement(C,{className:"",hide:this.hideSlideOut,show:this.state.show,cat:this.state.category}))),r.a.createElement("div",{className:"slide-out-container"},r.a.createElement("div",{className:"side-window"},r.a.createElement(v,{show:this.setShow,hide:this.hideSlideOut,setCat:this.getCategory})),e)}}]),t}(n.Component),S=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(400);i.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[170,1,2]]]);
//# sourceMappingURL=main.b938da45.chunk.js.map