import React, { useEffect } from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { GET_TODOS_REQUEST } from "../redux/actions/todo-action";

import TodoForm from "./todoForm";
import TodoItem from "./todoItem";

function deleteTodo() {
  alert("delete");
}

const Todo = ({ todo: { loading, todos }, getTodos }) => {
  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);
  return (
    <div class="flex flex-col gap-5 items-center my-auto h-screen bg-cover">
      <h1 class="pt-14 text-5xl text-white">My Todos</h1>
      <h3 class="text-gray-500">{new Date().toDateString()}</h3>

      <div className="flex flex-col gap-2">
        <TodoForm />
        <div className="flex flex-col gap-4 p-4 mt-5 bg-gray-900 rounded">
          {loading && "Loading"}
          {todos &&
            todos.map((todo, index) => (
              <TodoItem todo={todo} key={index} deleteTodo={ deleteTodo } />
            ))}

          {/* <TodoItem /> */}
        </div>
      </div>
    </div>
  );
};

Todo.propTypes = {
  loading: PropTypes.bool,
  todos: PropTypes.array,
  allTodos: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  todo: state.todo,
});

const mapDispatchToProps = (dispatch) => ({
  getTodos: () => dispatch({ type: GET_TODOS_REQUEST }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
