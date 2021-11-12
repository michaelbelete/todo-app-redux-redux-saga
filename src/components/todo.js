import React, { useEffect } from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";

import { GET_TODOS_REQUEST } from "../redux/actions/todo-action";

const Todo = ({ todo: { loading, todos }, getTodos }) => {
  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {loading && "Loading"}
      {todos &&
        todos.map((todo, index) => <p key={index}>{JSON.stringify(todo)}</p>)}
    </div>
  );
};

Todo.propTypes = {
    loading: PropTypes.bool,
    todos: PropTypes.array,
    allTodos: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    todo: state.todo
})

const mapDispatchToProps = (dispatch) => ({
    getTodos: () => dispatch({ type: GET_TODOS_REQUEST })
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)