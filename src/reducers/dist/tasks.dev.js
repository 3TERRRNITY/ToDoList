"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../constants");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var TASKS = [{
  id: 1,
  text: "Бегит",
  isCompleted: true
}, {
  id: 2,
  text: "Анжумания",
  isCompleted: true
}, {
  id: 3,
  text: "Пресс качат",
  isCompleted: false
}];

var tasks = function tasks() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : TASKS;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      id = _ref.id,
      text = _ref.text,
      isCompleted = _ref.isCompleted,
      type = _ref.type;

  switch (type) {
    case _constants.ADD_TASK:
      return [].concat(_toConsumableArray(state), [{
        id: id,
        text: text,
        isCompleted: isCompleted
      }]);

    case _constants.REMOVE_TASK:
      return _toConsumableArray(state).filter(function (task) {
        return task.id !== id;
      });

    case _constants.COMPLETE_TASK:
      return _toConsumableArray(state).map(function (task) {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
        }

        return task;
      });

    default:
      return state;
  }
};

var _default = tasks;
exports["default"] = _default;