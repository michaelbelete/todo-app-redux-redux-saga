import { CgPlayListAdd } from "react-icons/cg";

const TodoForm = () => {
    return (
        <div className="flex flex-row pl-2 bg-gray-800 rounded-md border border-black">
        <CgPlayListAdd className="text-gray-500" size="45" />
        <input
          type="text"
          className="px-3 py-2 w-full text-gray-600 bg-gray-900 outline-none"
          placeholder="Add Task..."
        />
        <button className="px-4 text-gray-400 bg-gray-900 rounded">Add</button>
      </div>

    );
}

export default TodoForm;