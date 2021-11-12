import { CgPlayListAdd, CgTrash } from "react-icons/cg";
const Todo = () => {
  return (
    <div class="flex flex-col gap-5 items-center my-auto h-screen bg-cover">
      <h1 class="pt-14 text-5xl text-white">My Todos</h1>
      <h3 class="text-gray-500">{new Date().toDateString()}</h3>

      <div className="flex flex-col gap-2">
        <div className="flex flex-row pl-2 bg-gray-800 rounded-md border border-black">
          <CgPlayListAdd className="text-gray-500" size="45" />
          <input
            type="text"
            className="px-3 py-2 w-full text-gray-600 bg-gray-900 outline-none"
            placeholder="Add Task..."
          />
          <button className="px-4 text-gray-400 bg-gray-900 rounded">Add</button>
        </div>

        <div className="flex flex-col gap-4 p-4 mt-5 bg-gray-900 rounded">
          <div className="flex flex-row justify-between items-start">
            <label className="inline-flex items-center">
              <input type="checkbox" className="w-6 h-6" />
              <span className="ml-3 text-gray-400">Tasks Detail</span>
            </label>
            <button>
              <CgTrash size="25" className="text-red-600"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
