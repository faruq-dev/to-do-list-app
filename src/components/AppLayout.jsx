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
  };
  const [tasks, setTasks] = useState([]);

  const submitModal = (task, toggleModal) => {
    // Add new task to the tasks array
    let isConfirmed = confirm("Are you sure you want to submit?");
    if (isConfirmed === true) {
      setTasks([...tasks, task]);
      // Reset the modal form
      toggleModal();
    } else {
      // Close the modal if user cancels
      toggleModal();
    }
  };

  // This function deletes all the tasks
  const deleteAllTasks = () => {
    if (tasks.length) {
      let isConfirmed = confirm("Are you sure you want to delete?");
      if (isConfirmed === true) {
        setTasks([]);
      }
    } else {
      // Do nothing if there are no tasks to delete
      alert("No tasks to delete.");
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen w-full bg-[#153448] px-5 lg:px-10 2xl:px-0">
        <Taskboard
          tasks={tasks}
          submitModal={submitModal}
          deleteAll={deleteAllTasks}
        />
      </div>
    </>
  );
};

export default AppLayout;
