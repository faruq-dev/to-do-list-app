import { FaStar } from 'react-icons/fa';

const TaskList = ({ tasks, editHandler  }) => {
  return (
    <div className="h-[490px] overflow-auto border-[1px] border-white/20 rounded-xl">
      {/* Table for larger screens */}
      <table className="hidden sm:table table-fixed">
        {/* Table Heading */}
        <thead className="dark:bg-[#121A16] bg-slate-700 sticky top-0">
          <tr>
            <th className="p-6 text-sm font-semibold capitalize w-[48px]"></th>
            <th className="p-6 text-sm font-semibold capitalize w-[300px] text-left">
              Title
            </th>
            <th className="p-6 text-sm font-semibold capitalize md:w-[350px] w-full text-left">
              Description
            </th>
            <th className="p-6 text-sm font-semibold capitalize md:w-[350px]">
              Tags
            </th>
            <th className="p-6 text-sm font-semibold capitalize md:w-[100px]">
              Priority
            </th>
            <th className="p-6 text-sm font-semibold capitalize md:w-[170px]">
              Options
            </th>
          </tr>
        </thead>


        {/* Table Body */}
        <tbody className="dark:text-white text-white even dark:[&>*:nth-child(even)]:bg-gray-800 [&>*:nth-child(even)]:bg-black/20">
          {tasks.length > 0 ? (tasks.map(task => (
            <tr
            key={task.id}
            className="[&>td]:align-baseline [&>td]:px-4 [&>td]:py-6"
          >
            <td>
              <button>
                <FaStar color="gray" />
              </button>
            </td>

            <td>{task.title}</td>

            <td className="text-justify">
              <div>{task.description}</div>
            </td>

            {/* Tags */}
            <td>
              <ul className="flex justify-center gap-1.5">
                {task.tags.map((tag) => (
                  <li key={tag}>
                    <span className="inline-block whitespace-nowrap rounded-[45px] dark:bg-green-700 bg-green-600 px-3 py-1 text-sm capitalize text-white">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </td>

            <td className={`text-center ${task.priority === "High" ? "text-red-600" : task.priority === "Medium" ? "text-yellow-400" : "text-blue-600"}`}>{task.priority}</td>

            {/* Edit & Delete Button */}
            <td>
              <div className="flex items-center justify-center space-x-3">
                <button className="bg-red-500 text-white px-3 py-1 rounded-md">
                  Delete
                </button>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md"
                onClick={()=>editHandler(task)}>
                  Edit
                </button>
              </div>
            </td>

          </tr>
          ))) : (
            // Only visible if no task is available
            <tr className="[&>td]:align-baseline [&>td]:px-4 [&>td]:py-32">
              <td colSpan={6} className="text-red-400 text-center text-2xl">
                No Tasks found...
              </td>
            </tr>
          ) }
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
