import { useState } from "react";

const TaskModal = ({toggleModal, submitModal}) => {
  const currentState = {
    id: crypto.randomUUID(),
    title: "",
    description: "",
    tags: [],
    priority: "",
    isFavorite: false,
  };
  const [task, setTask] = useState(currentState);
  const [errors, setErrors] = useState({})

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

    setErrors({
      ...errors,
      [name]: "",
    })
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    if (!task.title.trim()){
      newErrors.title = "Title is required"
    };
    
    if (!task.description.trim()){
      newErrors.description = "Description is required"
    };

    if (!task.priority.trim()){
      newErrors.priority = "Priority is required"
    };

    if (!task.tags.length){
      newErrors.tags = "At least one tag is required"
    } else if (task.tags.length > 3) {
      newErrors.tags = "Maximum 3 tags are allowed"
    }
    
    //newErrors অবজেক্টের শুধু key গুলোক নিয়ে একটা অ্যারে তৈরী করে object.keys
    if (Object.keys(newErrors).length > 0){
      setErrors(newErrors);
    } else {
      submitModal(task, toggleModal);
    }
  }

  return (
    <div id="parent" className="modal-bg" onClick={toggleModal}>
      <form
        className="modal-form"
        onSubmit={submitHandler}
        onClick={(e) => e.stopPropagation()}
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
            {errors.title && (
              <p className="text-red-500">{errors.title}</p>
            )}
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
            {errors.description && (
              <p className="text-red-500">{errors.description}</p>
            )}
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
              {errors.tags && (
              <p className="text-red-500">{errors.tags}</p>
            )}
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
              {errors.priority && (
              <p className="text-red-500">{errors.priority}</p>
            )}
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
