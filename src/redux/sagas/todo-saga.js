import { put, call, takeEvery, takeLatest} from "redux-saga/effects";

//actions
import { SET_LOADING, GET_TODOS, CREATE_TODO, GET_TODOS_REQUEST, CREATE_TODO_REQUEST } from "../actions/todo-action";

//api calls
import { getAllTodos, createNewTodo } from "../api/todo-api";

//get all todos
function* getTodos() {
  yield put({ type: SET_LOADING });

  const todos = yield call(getAllTodos);

  yield put({ type: GET_TODOS, payload: todos });
}

function* createTodo({ payload }) {
  yield put({ type: SET_LOADING})

  const newTodo = yield call(createNewTodo, payload);

  yield put({ type: CREATE_TODO, payload: newTodo });
}

export default function* todoSaga() {
  yield takeEvery(GET_TODOS_REQUEST, getTodos)
  yield takeLatest(CREATE_TODO_REQUEST, createTodo)
}
