import { useEffect, useState } from "react";
import Header from "./Header";
import Taskboard from "./tasks/Taskboard";
import { getLocalStorageData } from "../utilities/storage";

const AppLayout = () => {
  // const defaultTask = {
  //   id: crypto.randomUUID(),
  //   title: "Learn JavaScript",
  //   description: "Lorem ipsum dlor sit amet fazum gtimes",
  //   tags: ["JavaScript", "React", "Vite"],
  //   priority: "High",
  //   isFavorite: false,
  // };
  const [tasks, setTasks] = useState(getLocalStorageData());
  const [editingTask, setEditingTask] = useState(null); //State for editing task
  // const [taskToDelete, setTaskToDelete] = useState(null);

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const submitModal = (task, toggleModal) => {
    // Add new task to the tasks array
    let isConfirmed = confirm("Are you sure you want to submit?");
    if (isConfirmed === true) {
      if (editingTask) { //This if block is related to editing task
        const updatedTask = tasks.map((prevTask) =>
          prevTask.id === editingTask.id ? task : prevTask
        );

        setTasks(updatedTask);
        setEditingTask(null);
        toggleModal();
        
      } else {
        setTasks([...tasks, task]);
        // Reset the modal form
        toggleModal();
      }
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

  // This function deletes a single task
  const deleteSingleTask = (task)=> {
    let isConfirmed = confirm("Are you sure you want to delete")
    if (isConfirmed) {
      const updatedtasks = tasks.filter((prevTask)=>{
        return prevTask.id !== task.id
      })
      setTasks(updatedtasks);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen w-full bg-[#153448] px-5 lg:px-10 2xl:px-0">
        <Taskboard
          setEditingTask={setEditingTask}
          tasks={tasks}
          submitModal={submitModal}
          deleteAll={deleteAllTasks}
          deleteSingle={deleteSingleTask}
        />
      </div>
    </>
  );
};

export default AppLayout;
