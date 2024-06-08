export default function Task({ task, handleCheck, handleDelete }) {
  function formatTime(string) {
    const dateObj = new Date(string);
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();
    const hours = String(dateObj.getHours()).padStart(2, "0");
    const minutes = String(dateObj.getMinutes()).padStart(2, "0");
    return `On ${day}-${month}-${year} at ${hours}:${minutes}`;
  }
  return (
    <li className="border border-slate-600 rounded-full">
      <div className="flex items-center justify-between pl-4 pr-2 py-2">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={task.checked}
            onChange={() => handleCheck(task.id)}
            className="peer w-6 h-6 text-sky-500 bg-slate-100 rounded-full cursor-pointer focus:ring-sky-500 focus:ring-2 appearance-none"
          />
          <span className="peer-[:checked]:text-slate-300 peer-[:checked]:line-through items-center ms-2 text-md font-semibold">
            <h1>{task.activity}</h1>
            <p className="text-xs font-normal">{formatTime(task.time)}</p>
          </span>
        </div>
        <button onClick={() => handleDelete(task.id)} className="p-2 text-3xl rounded-full text-red-500 hover:text-slate-100 hover:bg-red-500">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M16 9v10H8V9zm-1.5-6h-5l-1 1H5v2h14V4h-3.5zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z" />
            </svg>
          </span>
        </button>
      </div>
    </li>
  );
}
