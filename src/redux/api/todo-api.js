import { axios } from "./index";

export const getAllTodos = async () => {
  try {
    const todos = await axios.get("todos?_page=1&_limit=10&_sort=id&_order=desc");
    return todos.data;
  } catch (error) {
    console.error(error);
  }
};

export const createNewTodo = async (todo) => {
  try {

    const newTodo = await axios.post("todos", {
      todo: todo,
      status: false,
    });

    return newTodo.data;
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
