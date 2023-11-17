"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./App.css");
const ToDoList_1 = __importDefault(require("./ToDoApp/toDoList/ToDoList"));
const ToDoForm_1 = __importDefault(require("./ToDoApp/toDoForm/ToDoForm"));
const ToDoFooter_1 = __importDefault(require("./ToDoApp/toDoFooter/ToDoFooter"));
function App() {
    const [toDos, setToDos] = (0, react_1.useState)([
        {
            id: Math.random(),
            text: 'Learn JS',
            isCompleted: false,
        },
        {
            id: Math.random(),
            text: 'Learn React',
            isCompleted: false,
        },
        {
            id: Math.random(),
            text: 'Learn Angular',
            isCompleted: false,
        },
    ]);
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(ToDoForm_1.default, { onAdd: (text) => {
                setToDos([
                    ...toDos,
                    {
                        id: Math.random(),
                        text: text,
                        isCompleted: false,
                    },
                ]);
            } }),
        react_1.default.createElement(ToDoList_1.default, { toDos: toDos, onChange: (newTodo) => {
                setToDos(toDos.map((todo) => {
                    if (todo.id === newTodo.id) {
                        return newTodo;
                    }
                    return todo;
                }));
            }, onDelete: (toDo) => {
                setToDos(toDos.filter((t) => t.id !== toDo.id));
            } }),
        react_1.default.createElement(ToDoFooter_1.default, { toDos: toDos, onClearCompleted: () => {
                setToDos(toDos.filter((todo) => !todo.isCompleted));
            } })));
}
exports.default = App;
