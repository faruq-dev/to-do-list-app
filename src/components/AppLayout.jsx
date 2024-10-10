import Header from "./Header";
import Taskboard from "./tasks/Taskboard";

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen w-full bg-[#153448] px-5 lg:px-10 2xl:px-0">
        <Taskboard/>
      </div>
    </>
  );
};

export default AppLayout;
