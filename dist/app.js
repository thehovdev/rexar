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

eval("exports.index = function(req, res) {\r\n    res.render('index');\r\n};\n\n//# sourceURL=webpack:///./dist/controllers/homeController.js?");

/***/ }),

/***/ "./dist/controllers/teamController.js":
/*!********************************************!*\
  !*** ./dist/controllers/teamController.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var team = __webpack_require__(/*! ../models/team */ \"./dist/models/team.js\");\r\n\r\nexports.index = function(req, res) {\r\n    res.send('Team index');\r\n}\r\n\r\nexports.add = function(req, res) {\r\n\r\n    var new_team = new team({\r\n        user: 'Admin',\r\n        action: 'insert data2'\r\n    });\r\n    \r\n    console.log(new_team);\r\n    new_team.save(function(err){\r\n      if(err) console.log(err); \r\n    });\r\n\r\n\r\n    res.send('Team add');\r\n}\r\n\r\nexports.add_sql = function(req, res) {\r\n\r\n    // var new_team = new team({\r\n    //     user: 'Admin',\r\n    //     action: 'insert data2'\r\n    // });\r\n    \r\n    // console.log(new_team);\r\n    // new_team.save(function(err){\r\n    //   if(err) console.log(err); \r\n    // });\r\n\r\n\r\n    res.send('Team add');\r\n}\r\n\r\n\r\nexports.update = function(req, res) {\r\n    res.send('Team update');\r\n}\r\n\r\nexports.delete = function(req, res) {\r\n    res.send('Team delete');\r\n}\n\n//# sourceURL=webpack:///./dist/controllers/teamController.js?");

/***/ }),

/***/ "./dist/database/connect.js":
/*!**********************************!*\
  !*** ./dist/database/connect.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar mongoDB = 'mongodb://127.0.0.1/rexar';\r\n\r\nmongoose.connect(mongoDB, { useNewUrlParser: true });\r\n// make mongoose use global library of promises\r\nmongoose.Promise = global.Promise;\r\n\r\n// get information about connection\r\nvar db = mongoose.connection;\r\n// if connection error, show message or show success\r\ndb.on('error', console.error.bind(console, 'MongoDB connection error:'));\r\ndb.on('connected', function() {\r\n    console.log('connected to MongoDB');\r\n});\r\n\r\nmodule.exports = db\n\n//# sourceURL=webpack:///./dist/database/connect.js?");

/***/ }),

/***/ "./dist/includes/app.js":
/*!******************************!*\
  !*** ./dist/includes/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// dont edit this file if its not needed\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar router = express.Router();\r\nvar app = express();\r\n\r\n// mongoose for database\r\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar db = __webpack_require__(/*! ../database/connect */ \"./dist/database/connect.js\");\r\n\r\n// set template engine ejs\r\napp.set('view engine', 'ejs');\r\n\r\n// set template folders for ejs engine\r\napp.use(express.static('includes'));\r\napp.use(express.static('public'));\r\n\r\n// for bodyParser to get requests\r\napp.use(express.json());       // to support JSON-encoded bodies\r\napp.use(express.urlencoded({extended: true}));  // to support URL-encoded bodies\r\n\r\nmodule.exports = app;\n\n//# sourceURL=webpack:///./dist/includes/app.js?");

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// require app settings \r\nvar app = __webpack_require__(/*! ./includes/app */ \"./dist/includes/app.js\");\r\n\r\n/*\r\n* place here all routes according to page like\r\n*   '/home', require('./home.js)\r\n*   '/team', require('./team.js)\r\n* and etc \r\n* routes methods will specify like this\r\n*   app.get / app.post for single page route \r\n*   app.use for multi page route as /team/add, /team/update \r\n* and etc\r\n*/\r\napp.get('/', __webpack_require__(/*! ./routes/home.js */ \"./dist/routes/home.js\"));\r\napp.use('/team', __webpack_require__(/*! ./routes/team.js */ \"./dist/routes/team.js\"));\r\n\r\n\r\n\r\n// listeting port 3000 for serve app\r\napp.listen(3000, function () {\r\n    console.log('Rexar app listening on port 3000!');\r\n});\r\n\n\n//# sourceURL=webpack:///./dist/index.js?");

/***/ }),

/***/ "./dist/models/team.js":
/*!*****************************!*\
  !*** ./dist/models/team.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\r\n\r\nclass Project extends Model {}\r\nProject.init({\r\n  title: Sequelize.STRING,\r\n  description: Sequelize.TEXT\r\n}, { sequelize, modelName: 'project' });\r\n\r\n\r\n\r\n\r\n// var mongoose = require('mongoose');\r\n// var Schema = mongoose.Schema;\r\n\r\n// var teamSchema = new Schema({\r\n//     __id: String,\r\n//     user: String, \r\n//     action: String\r\n// });\r\n\r\n// // compile model from schema\r\n// module.exports = mongoose.model('team', teamSchema);\r\n\n\n//# sourceURL=webpack:///./dist/models/team.js?");

/***/ }),

/***/ "./dist/routes/home.js":
/*!*****************************!*\
  !*** ./dist/routes/home.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\r\nvar router = express.Router();\r\n\r\n// controller that is specific to this router\r\nvar homeController = __webpack_require__(/*! ../controllers/homeController */ \"./dist/controllers/homeController.js\");\r\n\r\n// middleware that is specific to this router\r\nrouter.use(function timeLog(req, res, next) {\r\n    console.log('Time: ', Date.now());\r\n    next();\r\n});\r\n\r\n// define the home page route\r\nrouter.get('/', homeController.index)\r\n\r\n\r\nmodule.exports = router\n\n//# sourceURL=webpack:///./dist/routes/home.js?");

/***/ }),

/***/ "./dist/routes/team.js":
/*!*****************************!*\
  !*** ./dist/routes/team.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\r\nlet config = __webpack_require__(/*! config */ \"config\");\r\nvar router = express.Router();\r\n\r\n// controller that is specific to this router\r\nvar teamController = __webpack_require__(/*! ../controllers/teamController */ \"./dist/controllers/teamController.js\");\r\n\r\n// middleware that is specific to this router\r\nrouter.use(function timeLog(req, res, next) {\r\n    console.log('Time: ', Date.now());\r\n    next();\r\n});\r\n\r\n// define the home page of team\r\nrouter.get('/', teamController.index);\r\n\r\n// define the add team\r\nrouter.get('/add', teamController.add);\r\n\r\n// define the add team\r\nrouter.get('/add-sql', teamController.add_sql);\r\n\r\n// define the update team\r\nrouter.get('/update', teamController.update);\r\n\r\n// define the delete team\r\nrouter.get('/delete', teamController.delete);\r\n\r\nmodule.exports = router;\n\n//# sourceURL=webpack:///./dist/routes/team.js?");

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./dist/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Projects\\dist\\index.js */\"./dist/index.js\");\n\n\n//# sourceURL=webpack:///multi_./dist/index.js?");

/***/ }),

/***/ "config":
/*!*************************!*\
  !*** external "config" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"config\");\n\n//# sourceURL=webpack:///external_%22config%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ })

/******/ });