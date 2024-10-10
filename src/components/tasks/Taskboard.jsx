import { useState } from "react";
import TaskActions from "./TaskActions"
import TaskList from "./TaskList"
import TaskModal from "./TaskModal"

const Taskboard = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }
  
  return (
    <>
    {showModal && (
      <TaskModal toggleModal={toggleModal} />
    )}
    
    <section id="tasks" className="max-w-[1320px] mx-auto pt-36">
      <h1 className="text-center text-[32px] font-semibold mt-12">Create Your To Do List</h1>
      <TaskList/>
      <TaskActions toggleModal={toggleModal}/>
    </section>
    </>
  )
}

export default Taskboard