export default function TaskActions({toggleModal, deleteAll}) {
  return (
    <div className="mt-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
        {/* Add Task Button */}
        <button
          className="task-act-btn bg-[#136942]"
          onClick={toggleModal}
        >
          Add Task
        </button>

        {/* Delete All Button */}
        <button className="task-act-btn"
        onClick={deleteAll}>
          Delete All
        </button>
      </div>
    </div>
  );
}
