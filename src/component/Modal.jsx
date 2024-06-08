import { useState } from "react";

export default function Modal({ showModal, onClose, onAddTask }) {
  const [activity, setActivity] = useState("");
  const [time, setTime] = useState(Date.now());
  if (!showModal) return;

  function handleSubmit(e) {
    e.preventDefault();
    if (!activity) return;

    const newTask = { id: Date.now(), checked: false, activity, time };
    onAddTask(newTask);
    setActivity("");
    setTime("");
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-15 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[380px] sm:w-[500px] bg-slate-700 bg-opacity-90 rounded-xl p-6 border border-slate-500">
        <div className="flex justify-between">
          <h1 className="text-sky-500 text-2xl font-semibold mb-4">Add New Task</h1>
          <button onClick={() => onClose()} className="text-sm text-red-500 hover:text-slate-100 font-bold h-fit px-3 py-2 border border-red-500 rounded-full hover:bg-red-500">
            X
          </button>
        </div>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-1">
            <span className="block text-md font-medium text-slate-100">I will ...</span>
            <input
              type="text"
              placeholder="Do something"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="mt-1 w-full px-6 py-3 bg-slate-800 border text-slate-100 text-md border-slate-300 rounded-xl shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:placeholder-transparent
    "
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="block text-md font-medium text-slate-100">At</span>
            <input
              type="datetime-local"
              name="datetime"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="mt-1 w-full px-6 py-3 bg-slate-800 border text-slate-100 text-md border-slate-300 rounded-xl shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:placeholder-transparent dark:[color-scheme: ]
    "
            />
          </label>
          <button type="submit" onSubmit={handleSubmit} className="text-md font-semibold text-slate-100 bg-sky-700 hover:bg-sky-500 py-3 rounded-full text-center mt-4">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
