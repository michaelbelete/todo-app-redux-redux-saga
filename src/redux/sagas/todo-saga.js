import { put, call} from "redux-saga/effects";

//actions
import { SET_LOADING, GET_TODOS } from "../actions/todo-action";

//api calls
import { getAllTodos } from "../api/todo-api";

//get all todos
export default function* getTodos() {
  yield put({ type: SET_LOADING });

  const todos = yield call(getAllTodos);

  yield put({ type: GET_TODOS, payload: todos });
}
