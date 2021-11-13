import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { CgTrash } from "react-icons/cg";
const TodoItem = ({ todo, deleteTodo, checked }) => {
  return (
    <div className="flex flex-row justify-between items-start">
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          className="w-6 h-6 text-gray-900 bg-gray-900"
          checked={todo.status}
          onClick={() => checked(todo.id)}
        />
        <span
          className={`ml-3 text-gray-400 ${todo.status ? "line-through" : ""}`}
        >
          {todo.todo}
        </span>
      </label>
      <button
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        <CgTrash size="25" className="text-red-600" />
      </button>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.any,
  deleteTodo: PropTypes.func.isRequired,
  checked: PropTypes.func.isRequired,
}


export default TodoItem;
