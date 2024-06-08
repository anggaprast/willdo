import Button from "../fragment/Button";
import Title from "../fragment/Title";
import Task from "./Task";

export default function TaskPanel({ tasks, handleCheck, handleDelete, setIsVisible }) {
  return (
    <div className="w-full md:w-2/3 h-[100%] flex flex-col justify-between rounded-2xl border border-slate-500 p-3 md:p-6 backdrop-blur-md bg-slate-100 bg-opacity-10">
      <div className="flex flex-col">
        <Title>Tasks</Title>
        <ul className="h-[400px] md:h-[300px] flex flex-col gap-3 text-slate-100 overflow-y-auto">
          {tasks.map((task) => (
            <Task key={task.id} task={task} handleCheck={handleCheck} handleDelete={handleDelete} />
          ))}
        </ul>
      </div>
      <Button setIsVisible={setIsVisible}>Add List +</Button>
    </div>
  );
}
