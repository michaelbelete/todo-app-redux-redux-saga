import React, { useEffect } from "react";

import PropTypes from "prop-types";

import Logo from "../assets/img/logo.png";
import { connect } from "react-redux";
import {
  GET_TODOS_REQUEST,
  DELETE_TODO_REQUEST,
  EDIT_TODO_REQUEST,
} from "../redux/actions/todo-action";

import TodoForm from "./todoForm";
import TodoItem from "./todoItem";

const Todo = ({
  todo: { loading, todos },
  getTodos,
  deleteTodo,
  updateTodo,
}) => {
  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="flex flex-col gap-5 items-center my-auto h-screen bg-cover">
      <h1 className="pt-14 text-5xl text-white">My Todos</h1>
      <h3 className="text-gray-500">{new Date().toDateString()}</h3>

      <div className="flex flex-col gap-2">
        <TodoForm />
        <div className="flex flex-col gap-4 p-4 mt-5 bg-gray-900 rounded">
          {loading && <p className="text-white">Please wait...</p>}
          {!loading && todos && todos.length === 0 && (
            <p className="text-white">
              No Todos yet get started by adding some
            </p>
          )}
          {todos &&
            todos.map((oneTodo, index) => (
              <TodoItem
                todo={oneTodo}
                key={index}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
              />
            ))}{" "}
        </div>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <img src={Logo} alt="logo" width="120" />
        <h1 className="text-lg text-white">Developed By michael belete</h1>
        <a href="https://www.linkedin.com/in/michael-belete-8600a3176/"><p className="px-4 py-2 text-gray-200 bg-blue-900 rounded-3xl">Contact Me</p></a>
      </div>
    </div>
  );
};

Todo.propTypes = {
  loading: PropTypes.bool,
  todo: PropTypes.array,
  getTodos: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  todo: state.todo,
});

const mapDispatchToProps = (dispatch) => ({
  getTodos: () => dispatch({ type: GET_TODOS_REQUEST }),
  deleteTodo: (id) => dispatch({ type: DELETE_TODO_REQUEST, payload: id }),
  updateTodo: (todo) => dispatch({ type: EDIT_TODO_REQUEST, payload: todo }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
