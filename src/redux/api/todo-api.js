import { axios } from './index'

export const getAllTodos = async () => {
    try {
        const todos = await axios.get('todos?_page=1&_limit=10')
        return todos.data
    }catch (e) {
        console.error(e);
    }
}