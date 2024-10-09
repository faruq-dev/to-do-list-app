const TaskModal = () => {
  return (
    <div id="parent" className="modal-bg" onClick={""}>
      <form
          className="modal-form"
          onSubmit={""}
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
                value={""}
                onChange={""}
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="description">Description</label>
              <textarea
                className="modal-input-box min-h-[120px] lg:min-h-[140px]"
                type="text"
                name="description"
                id="description"
                value={""}
                onChange={""}
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
                  value={''}
                  onChange={''}
                />
              </div>

              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="priority">Priority</label>
                <select
                  className="modal-input-box text-white"
                  name="priority"
                  id="priority"
                  value={''}
                  onChange={''}
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
              onClick={''}
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
