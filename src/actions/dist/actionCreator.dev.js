"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.completeTask = exports.removeTask = exports.addTast = void 0;

var _constants = require("../constants");

var addTast = function addTast(id, text, isCompleted) {
  return {
    type: _constants.ADD_TASK,
    id: id,
    text: text,
    isCompleted: isCompleted
  };
};

exports.addTast = addTast;

var removeTask = function removeTask(id) {
  return {
    type: _constants.REMOVE_TASK,
    id: id
  };
};

exports.removeTask = removeTask;

var completeTask = function completeTask(id) {
  return {
    type: _constants.COMPLETE_TASK,
    id: id
  };
};

exports.completeTask = completeTask;