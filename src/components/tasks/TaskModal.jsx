import { useState } from "react";

const TaskModal = ({toggleModal}) => {
  const currentState = {
    id: crypto.randomUUID(),
    title: "",
    description: "",
    tags: [],
    priority: "",
    isFavorite: false,
  };
  const [task, setTask] = useState(currentState);

  const changeHandler = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "tags") {
      value = value.split(",");
    }
    setTask({
      ...task,
      [name]: value,
    });
  };

  return (
    <div id="parent" className="modal-bg" onClick={""}>
      <form
        className="modal-form"
        onSubmit={(e) => e.preventDefault()}
        // onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-center text-2xl font-bold text-white">
          Create Your To Do List
        </h2>

        {/* Form Fields */}
        <div className="space-y-6 text-white">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="modal-input-box"
              type="text"
              name="title"
              id="title"
              value={task.title}
              onChange={changeHandler}
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="modal-input-box min-h-[120px] lg:min-h-[140px]"
              type="text"
              name="description"
              id="description"
              value={task.description}
              onChange={changeHandler}
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-10 xl:gap-x-20 space-y-6 md:space-y-0">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="modal-input-box"
                type="text"
                name="tags"
                id="tags"
                value={task.tags.join(",")}
                onChange={changeHandler}
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="modal-input-box text-white"
                name="priority"
                id="priority"
                value={task.priority}
                onChange={changeHandler}
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-between pt-6">
          <button
            type="button"
            className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={toggleModal}
          >
            Close
          </button>

          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskModal;
