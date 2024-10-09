import TaskModal from "./TaskModal"

const Taskboard = () => {
  return (
    <>
    <TaskModal/>
    <section id="tasks" className="max-w-[1320px] mx-auto pt-36">
      <h1 className="text-center text-[32px] font-semibold mt-12">Create Your To Do List</h1>
    </section>
    </>
  )
}

export default Taskboard