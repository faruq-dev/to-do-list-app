import { useState } from "react";
import Header from "./Header";
import Taskboard from "./tasks/Taskboard";

const AppLayout = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn JavaScript",
    description: "Lorem ipsum dlor sit amet fazum gtimes",
    tags: ["JavaScript", "React", "Vite"],
    priority: "High",
    isFavorite: false,
  }
  const [tasks, setTasks] = useState([defaultTask]);

  const submitModal = (task, toggleModal)=> {
    // Add new task to the tasks array
    setTasks([...tasks, task]);
    // Reset the modal form
    toggleModal()
  }
  
  return (
    <>
      <Header />
      <div className="min-h-screen w-full bg-[#153448] px-5 lg:px-10 2xl:px-0">
        <Taskboard
        tasks={tasks}
        submitModal={submitModal}/>
      </div>
    </>
  );
};

export default AppLayout;
