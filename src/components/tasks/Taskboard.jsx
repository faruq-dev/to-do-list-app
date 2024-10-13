import { useState } from "react";
import TaskActions from "./TaskActions"
import TaskList from "./TaskList"
import TaskModal from "./TaskModal"

const Taskboard = ({tasks, submitModal, deleteAll, setEditingTask}) => {
  // State lifting up from Task Modal
  const currentState = {
    id: crypto.randomUUID(),
    title: "",
    description: "",
    tags: [],
    priority: "",
    isFavorite: false,
  };
  const [task, setTask] = useState(currentState);
  // ==============================================

  const [showModal, setShowModal] = useState(false);
  const [editClicked, setEditClicked] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    if (!showModal) {
      setTask(currentState);
    };
    setEditClicked(false);
  }

  // Function for editing  a task
  const editHandler = (task) => {
    toggleModal();
    setTask(task);
    setEditingTask(task);
    setEditClicked(true)//To change the Modal Heading to "Edit Task"
  };
  
  return (
    <>
    {showModal && (
      <TaskModal toggleModal={toggleModal}
      submitModal={submitModal}
      task={task}
      setTask={setTask}
      editClicked={editClicked} />
    )}
    
    <section id="tasks" className="max-w-[1320px] mx-auto pt-36">
      <h1 className="text-center text-[32px] font-semibold mt-12 mb-8">Create Your To Do List</h1>

      <TaskList tasks={tasks} editHandler={editHandler} />

      <TaskActions toggleModal={toggleModal} deleteAll={deleteAll}/>
    </section>
    </>
  )
}

export default Taskboard