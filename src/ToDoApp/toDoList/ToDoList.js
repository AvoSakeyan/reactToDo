"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toDoItem_1 = __importDefault(require("../toDoItem/toDoItem"));
require("./index.css");
const react_1 = __importDefault(require("react"));
const ToDoList = ({ toDos, onChange, onDelete }) => {
    return (react_1.default.createElement("div", null, toDos.map((toDo) => (react_1.default.createElement(toDoItem_1.default, { key: toDo.id, toDo: toDo, onChange: onChange, onDelete: onDelete })))));
};
exports.default = ToDoList;
