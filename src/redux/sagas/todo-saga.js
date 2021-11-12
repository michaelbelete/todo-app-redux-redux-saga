import { put, call} from "redux-saga/effects";

import { SET_LOADING, GET_TODOS } from "../actions/todo-action";

import { getAllTodos } from "../api/todo-api";

export default function* getTodos() {
  yield put({ type: SET_LOADING });

  const todos = yield call(getAllTodos);

  yield put({ type: GET_TODOS, payload: todos });
}
