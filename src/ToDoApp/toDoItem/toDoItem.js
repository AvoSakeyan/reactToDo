"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./index.css");
const ToDoItem = ({ toDo, onChange, onDelete }) => {
    return (react_1.default.createElement("div", { className: "item-container" },
        react_1.default.createElement("label", null,
            react_1.default.createElement("input", { className: "checkbox", type: "checkbox", checked: toDo.isCompleted, onChange: (ev) => {
                    onChange(Object.assign(Object.assign({}, toDo), { isCompleted: ev.target.checked }));
                } }),
            toDo.text),
        react_1.default.createElement("button", { className: "delete-btn", onClick: () => onDelete(toDo) }, "x")));
};
exports.default = ToDoItem;
