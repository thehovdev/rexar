/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/controllers/homeController.js":
/*!********************************************!*\
  !*** ./dist/controllers/homeController.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.index = function(req, res) {\n    res.render('index');\n};\n\n//# sourceURL=webpack:///./dist/controllers/homeController.js?");

/***/ }),

/***/ "./dist/controllers/teamController.js":
/*!********************************************!*\
  !*** ./dist/controllers/teamController.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.index = function(req, res) {\n    res.send('Team index');\n}\n\nexports.add = function(req, res) {\n    res.send('Team add');\n}\n\nexports.update = function(req, res) {\n    res.send('Team update');\n}\n\nexports.delete = function(req, res) {\n    res.send('Team delete');\n}\n\n//# sourceURL=webpack:///./dist/controllers/teamController.js?");

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! path */ \"path\");\nvar template = __webpack_require__(/*! ejs */ \"ejs\");\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nvar express = __webpack_require__(/*! express */ \"express\");\nvar router = express.Router();\nvar app = express();\n\n// set template engine ejs\napp.set('view engine', 'ejs');\n\n// set template folders for ejs engine\napp.use(express.static('includes'));\napp.use(express.static('public'));\n\n// for bodyParser to get requests\napp.use(express.json());       // to support JSON-encoded bodies\napp.use(express.urlencoded({extended: true}));  // to support URL-encoded bodies\n\n\n\n/*\n* place here all routes according to page like\n*   '/home', require('./home.js)\n*   '/team', require('./team.js)\n* and etc \n* routes methods will specify like this\n*   app.get / app.post for single page route \n*   app.use for multi page route as /team/add, /team/update \n* and etc\n*/\n\n// start : routes\napp.get('/', __webpack_require__(/*! ./routes/home.js */ \"./dist/routes/home.js\"));\napp.use('/team', __webpack_require__(/*! ./routes/team.js */ \"./dist/routes/team.js\"));\n// end : routes\n\n\n// start listening app\napp.listen(3000, function () {\n    console.log('REX app listening on port 3000!');\n});\n\n\n//# sourceURL=webpack:///./dist/index.js?");

/***/ }),

/***/ "./dist/routes/home.js":
/*!*****************************!*\
  !*** ./dist/routes/home.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\nvar router = express.Router();\n\n// controller that is specific to this router\nvar homeController = __webpack_require__(/*! ../controllers/homeController */ \"./dist/controllers/homeController.js\");\n\n// middleware that is specific to this router\nrouter.use(function timeLog(req, res, next) {\n    console.log('Time: ', Date.now());\n    next();\n});\n\n// define the home page route\nrouter.get('/', homeController.index)\n\n\nmodule.exports = router\n\n//# sourceURL=webpack:///./dist/routes/home.js?");

/***/ }),

/***/ "./dist/routes/team.js":
/*!*****************************!*\
  !*** ./dist/routes/team.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\nvar router = express.Router();\n\n// controller that is specific to this router\nvar teamController = __webpack_require__(/*! ../controllers/teamController */ \"./dist/controllers/teamController.js\");\n\n// middleware that is specific to this router\nrouter.use(function timeLog(req, res, next) {\n    console.log('Time: ', Date.now());\n    next();\n});\n\n// define the home page of team\nrouter.get('/', function(req, res) {\n    res.send('Team Home');\n});\n\n// define the add team\nrouter.get('/add', function(req, res) {\n    res.send('Team Add');\n});\n  \n// define the update team\nrouter.get('/update', function(req, res) {\n    res.send('Team Update');\n});\n\n// define the delete team\nrouter.get('/delete', function(req, res) {\n    res.send('Team Delete');\n});\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./dist/routes/team.js?");

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./dist/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/hov-dev/srv/rex/dist/index.js */\"./dist/index.js\");\n\n\n//# sourceURL=webpack:///multi_./dist/index.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "ejs":
/*!**********************!*\
  !*** external "ejs" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ejs\");\n\n//# sourceURL=webpack:///external_%22ejs%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });