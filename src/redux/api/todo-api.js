import axios from './index'

export const allTodos = async () => {
    try {
        const todos = await axios.get('todos?_page=1&_limit=10')
        return todos.data
    }catch (e) {
        console.log(e);
    }
}