"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _index = _interopRequireDefault(require("./reducers/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var composeEnhancers = process.env.NODE_ENV !== "production" && (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : _redux.compose;

var configureStore = function configureStore(preloadedState) {
  return (0, _redux.createStore)(_index["default"], preloadedState, composeEnhancers());
};

var store = configureStore({});
var _default = store;
exports["default"] = _default;