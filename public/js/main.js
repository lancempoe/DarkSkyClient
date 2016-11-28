/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "localhost:9001";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var App = __webpack_require__(1);
	__webpack_require__(2);
	React.render (
	    React.createElement(App, {id: "app"}),
	  document.getElementById('main')
	);
	Router.init();


/***/ },
/* 1 */
/***/ function(module, exports) {

	
	var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){App[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;App.prototype=Object.create(____SuperProtoOf____Class0);App.prototype.constructor=App;App.__superConstructor__=____Class0;
	  function App(props) {"use strict";
	    ____Class0.call(this,props);
	    $('body').css('backgroundColor','#1f352b');
	    $('body').css('color','white');
	  }

	  Object.defineProperty(App.prototype,"render",{writable:true,configurable:true,value:function(){"use strict";
	    return(
	      React.createElement("div", null, 
	        React.createElement(Jumbotron, {style: styles.jumbo}, 
	          React.createElement(Row, {style: styles.row}, 
	            React.createElement("img", {src: "assets/images/mtn.png", className: "col-md-1"}), 
	            React.createElement("h1", {className: "col-md-10"}, "Welcome to React-Flux-Starter-Kit"), 
	            React.createElement("img", {src: "assets/images/mtn.png", className: "col-md-1"})
	          )
	        ), 
	        React.createElement(Row, {style: css(styles.body,styles.row)}, 
	          React.createElement("h1", {className: "text-center"}, "Using the Starter Kit"), 
	          React.createElement("hr", null), 
	          React.createElement("div", {className: "col-md-3"}), 
	          React.createElement("div", {className: "col-md-6", style: styles.display}, 
	            React.createElement("h2", null, "App Folder"), 
	            React.createElement("h3", null, "Components"), 
	            React.createElement("p", null, "All React Components Should go into this folder. To generate a React component you can use the installed mtn" + " " +
	              "CLI:", React.createElement("br", null), React.createElement("br", null), 
	              React.createElement("span", {style: styles.code}, "mtn dew component [NameInCapCase] [-c]"), " ", React.createElement("br", null), React.createElement("br", null), 
	              "in the folder you want the component to be created in. Running the" + " " + 
	              "command with a",  
	              React.createElement("span", {style: styles.code}, "-c"), 
	              "at the end will generate a component with additional comments for starting out. Another" + " " + 
	              "additional feature of the starter kit is a simple way to combine multiple style objects on a react component." + " " +
	              "We implement a function called css which can be use as follows: ", React.createElement("br", null), React.createElement("br", null), " ", React.createElement("span", {style: styles.code}, " ", raw, " "), React.createElement("br", null), React.createElement("br", null), 
	              "It also has many modules globally accessible such as:", 
	              React.createElement("ol", null, React.createElement("li", null, "React"), React.createElement("li", null, "ReactBootstrap's Components"), React.createElement("li", null, "Jquery"), React.createElement("li", null, "JqueryUI"))
	            ), 
	            React.createElement("h3", null, "Flux"), 
	            React.createElement("p", null, 
	              "The Starter Kit holds a convention on how you should use flux and provides some nice generator commands to help" + " " +
	              "build a flux architecture very quickly. Just like with generating a component you can generate flux files quickly.", 
	              React.createElement("br", null), React.createElement("br", null), React.createElement("span", {style: styles.code}, "mtn dew flux [NameInCapCase] [-c]"), " ", React.createElement("br", null), React.createElement("br", null), " Again you can include the",  
	              React.createElement("span", {style: styles.code}, "-c"), " argument to generate with additional comments." + " " +
	              "It generates 4 files" + " " + 
	              "using underscored_names for the files and CapCase names for the modules and has them properly linked together:", 
	              React.createElement("ol", null, React.createElement("li", null, "[name]_actions.js"), React.createElement("li", null, "[name]_constants.js"), React.createElement("li", null, "[name]_dispatcher.js"), React.createElement("li", null, "[name]_store.js"))
	            ), 
	            React.createElement("h3", null, "Router"), 
	            React.createElement("p", null, 
	              "The Starter Kit comes built in with a router call future-router. It is a simple router that is supposed to help" + " " +
	              "facilitate keeping state and transitioning easily between states. The router is located in app/router.js. It watches" + " " +
	              "any changes to the window location and will invoke the corresponding route. This allows you to create a href with" + " " + 
	              "the url to navigate to or you can dynamically invoke a route. Since generating the href url can be tedious, there is an" + " " + 
	              "easy way to generate the url in a href attribute. Here's how you can go about using it:", React.createElement("br", null), React.createElement("br", null), 
	              React.createElement("ol", null, 
	                React.createElement("li", null, "First create the route definition in router.js. You must include the root route as this is the entry point to the site." + " " +
	                  "Anything you want can happen in a route and a route allows arguments to be passed in as url-encoded arguments but usually you will" + " " +
	                  "want to mount and unmoint components. ", React.createElement("em", null, "To do this you need to do the unmounting and mounting only in the router."), "For example if" + " " +
	                  "want to initially have the start page component mounted on a page tag, you would not in your component initally have it nested under it." + " " +
	                  "React requires that the unmounting and mounting happen in the same place. You can visit the home page for examples: ", React.createElement("a", {href: "https://github.com/timthez/future-router"}, "Future Router")
	                ), 
	                React.createElement("li", null, 
	                  "You can use these routes in your components in an href like so: ", React.createElement("br", null), React.createElement("br", null), 
	                  React.createElement("span", {style: styles.code}, "Router.route('nameOfRoute',", "{argsOBJ: 'args'}", ")"), 
	                  React.createElement("br", null), React.createElement("br", null), 
	                  "To invoke it dynamically such as on a button click:", React.createElement("br", null), React.createElement("br", null), 
	                  React.createElement("span", {style: styles.code}, "Router.route('nameOfRoute',", "{argsOBJ: 'args'}", ",true)")
	                )
	              )
	            )
	          ), 
	          React.createElement("div", {className: "col-md-3"})
	        ), 
	        React.createElement(Row, {style: css(styles.row)}, 
	          React.createElement("h1", {className: "text-center"}, "What now?"), 
	          React.createElement("hr", null), 
	          React.createElement("div", {className: "col-md-3"}), 
	          React.createElement("div", {className: "col-md-6", style: styles.display}, 
	            React.createElement("h1", null, "Replace app.js"), 
	            React.createElement("p", null, "This start page's source code is currently app.js. I would recommend replacing it by deleting it and running ", React.createElement("br", null), React.createElement("br", null), 
	            React.createElement("span", {style: styles.code}, "mtn dew component App"), " ", React.createElement("br", null), " ", React.createElement("br", null), 
	            "I would also like to note that it is not written in the way you should write a react application as it is not broken down into components for the sake of only having to delete" + " " + 
	            "a single file rather than several."
	            ), 
	            React.createElement("h1", null, "Useful Links"), 
	            React.createElement("ul", null, 
	              React.createElement("li", null, React.createElement("a", {href: "http://reactkungfu.com/"}, "React Kungfu")), 
	              React.createElement("li", null, React.createElement("a", {href: "https://github.com/timthez/react-flux-starter-kit"}, "React-Flux-Starter-Kit")), 
	              React.createElement("li", null, React.createElement("a", {href: "http://react-bootstrap.github.io/components.html"}, "React Bootstrap")), 
	              React.createElement("li", null, React.createElement("a", {href: "https://github.com/timthez/future-router"}, "Future Router")), 
	              React.createElement("li", null)
	            )
	          ), 
	          React.createElement("div", {className: "col-md-3"})
	        ), 
	         React.createElement(Row, {style: css(styles.row)}, 
	          React.createElement("h1", {className: "text-center"}, "Good Luck and Happy Coding "), 
	          React.createElement("h1", {className: "text-center"}, "Grab yourself a DEW while your at it.")
	          )
	      )
	    )
	  }});
	;
	var raw='<div style={ css(styles.base, styles.first, styles.second, ...) } >';
	var styles ={
	  jumbo:{
	    color: '#1f352b',
	    position: 'fixed',
	    zIndex: '10'
	  },
	  row:{
	    marginLeft: '0px',
	    marginRight: '0px'
	  },
	  body:{
	    paddingTop: '197px',
	  },
	  display:{
	    backgroundColor: '#a4a4a4',
	    color: '#1f352b',
	    paddingBottom:'30px'
	  },
	  code:{
	    backgroundColor: '#71907b',
	    marginRight:'5px',
	    marginLeft:'5px'
	  }

	}

	module.exports = App;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {global.Router = __webpack_require__(3).Router;

	Router.Routes = {
	  default: function(args){
	    //var _name_ = require('');    
	    //var _mount_node_ = document.getElementById('_mount_node_');
	    //React.unmountComponentAtNode(document.getElementById('_mount_node_'));
	    //React.render(_name_, document.getElementById('_mount_node_')); 
	  },
	  root: function(args){

	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports) {

	$(document).ready(function(){
	  $(window).on('hashchange',function(){ 
	    var jsn = urlDecode(window.location);
	    if(jsn.hasOwnProperty('route')){
	      func = jsn.route;
	      jsn.hasOwnProperty('args')?Router.Routes[func](jsn.args):Router.Routes[func]();
	    }   
	});
	});
	 

	 function changeRoute(jsn){
	  if(jsn == null){
	      throw "No Specified Route! Please include in the href tag";
	    }
	    var func = 'root';
	    if(jsn.hasOwnProperty('route') && !jsn.route.isBlank() ){
	      func = jsn.route;
	    }   
	    if(jsn.hasOwnProperty('args')){
	      var args = jsn.args;    
	      Router.Routes[func](args);
	      window.history.pushState('','',"#/"+(func == 'root'?'':func)+'?'+$.param(args,true));
	    }else{
	      Router.Routes[func]();
	      window.history.pushState('','',"#/"+(func == 'root'?'':func));
	    }
	   
	 };

	var Router = {
	  Routes: {},
	  route: function(route, args, execute){
	    execute = execute === undefined ? false : execute
	    if(!execute){
	      if(args == undefined || $.isEmptyObject(args)){
	        return "#/"+(route == 'root'?'':route);
	      }else{              
	       return "#/"+(route == 'root'?'':route)+'?'+$.param(args,true);
	      }
	    }else{
	      if(args == undefined || $.isEmptyObject(args)){
	        changeRoute($.parseJSON('{"route":"'+route+'"}'));
	      }else{              
	       changeRoute($.parseJSON('{"route":"'+route+'","args":'+JSON.stringify(args)+'}'));
	      }
	    }
	  },
	  init: function(){
	    var jsn = Router.route('root');
	    if(window.location.hash.length > 2){
	      jsn = urlDecode();
	    }
	    changeRoute(jsn);    
	    
	  }
	};


	function urlDecode(hash){
	    var hash =window.location.hash.substring(2);
	    var index = hash.indexOf('?');
	    var func = index !== -1?hash.substring(0,index):hash;
	    func = func == "" ? "root" : func
	    var args = index !== -1?hash.substring(index+1):null;
	    
	    var dec = args ? JSON.parse(('{"' + args.replace(/&/g, '","').replace(/=/g,'":"') + '"}'),function(key, value) { return key==="" ? value : decodeURIComponent(value).replace(/[+]/g,' ') }) : null
	    
	    if(dec){
	      return ({route: func,args: dec});
	    }else{
	      return ({route: func});
	    }
	}
	exports.Router = Router;

/***/ }
/******/ ]);