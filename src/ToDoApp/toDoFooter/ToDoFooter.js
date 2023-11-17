"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./index.css");
const ToDoFooter = ({ toDos, onClearCompleted }) => {
    const completed = toDos.filter((toDo) => toDo.isCompleted).length;
    return (react_1.default.createElement("div", { className: "footer-container" },
        react_1.default.createElement("span", null,
            completed,
            "/",
            toDos.length,
            " Completed"),
        react_1.default.createElement("button", { onClick: onClearCompleted }, "Clear Completed")));
};
exports.default = ToDoFooter;
