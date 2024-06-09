import { useState } from "react";
import FiltersPanel from "./component/FiltersPanel";
import Modal from "./component/Modal";
import TaskPanel from "./component/TaksPanel";
import Blob from "./fragment/Blob";

const taskList = [
  {
    id: 0,
    checked: true,
    activity: "Morning coffee",
    time: "2024-05-12T06:30",
  },
  {
    id: 1,
    checked: false,
    activity: "Buy a house",
    time: "2024-05-12T10:05",
  },
  {
    id: 2,
    checked: false,
    activity: "Try add your task",
    time: "2024-05-12T19:45",
  },
];

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [tasks, setTasks] = useState(taskList);
  const [filteredTasks, setFilteredTasks] = useState(taskList);

  function handleAdd(task) {
    const newTask = [...tasks, task];
    setTasks(newTask);
    setFilteredTasks(newTask);
  }

  function handleCheck(id) {
    const newTask = (tasks) => tasks.map((task) => (task.id === id ? { ...task, checked: !task.checked } : task));
    setTasks(newTask);
    setFilteredTasks(newTask);
  }

  function handleDelete(id) {
    const newTask = (tasks) => tasks.filter((task) => task.id !== id);
    setTasks(newTask);
    setFilteredTasks(newTask);
  }
  return (
    <>
      <section>
        <div className="container h-full mx-auto my-auto p-4 md:px-12 lg:px-16 xl:px-28 md:py-7">
          <div className="relative w-full h-full grid grid-cols-1 bg-slate-800 backdrop-blur-md rounded-3xl p-7 sm:p-10 overflow-hidden">
            <h1 className="text-4xl text-slate-100 font-bold">WillDo.</h1>
            <h1 className="text-sm text-slate-100 font-bold mb-8">
              Made by{" "}
              <a href="https://instagram.com/anggaaprast/" target="_blank" className="hover:text-sky-300">
                @anggaaprast
              </a>
            </h1>
            <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
              <FiltersPanel tasks={tasks} setFilteredTasks={setFilteredTasks} />
              <TaskPanel tasks={filteredTasks} handleCheck={handleCheck} handleDelete={handleDelete} setIsVisible={setIsVisible} />
            </div>
            <Blob />
          </div>
        </div>
      </section>
      <Modal showModal={isVisible} onClose={() => setIsVisible(false)} onAddTask={handleAdd} />
    </>
  );
}
