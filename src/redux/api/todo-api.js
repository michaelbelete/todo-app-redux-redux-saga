import { axios } from "./index";

export const getAllTodos = async () => {
  try {
    const todos = await axios.get("todos?_page=1&_limit=10");
    return todos.data;
  } catch (error) {
    console.error(error);
  }
};

export const createNewTodo = async (todo) => {
  try {
    const newTodo = {
      todo: todo,
      status: false,
    };

    const todo = await axios.post("todos", newTodo);

    return todo.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateExistingTodo = async (id, todo) => {
  try {
    const todo = await axios.put("todos", todo);
    return todo.data;
  } catch (error) {
    console.log(error);
  }
};



export const deleteExistingTodo = async (id) => {
  try {
    await axios.delete(`todos/${id}`)
    return id
  } catch(err) {
     return console.error(err)
  }
}
