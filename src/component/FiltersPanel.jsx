import { useState } from "react";
import Title from "../fragment/Title";
import FilterBtn from "./FilterBtn";
import NavIcon from "./NavIcon";

export default function FiltersPanel({ tasks, setFilteredTasks }) {
  const [activeBtn, setActiveBtn] = useState("All");
  const datenow = new Date();
  const today = datenow.toISOString().split("T")[0];

  function handleFilter(activeBtn) {
    setActiveBtn(activeBtn);
    switch (activeBtn) {
      case "Today":
        setFilteredTasks(tasks.filter((task) => task.time.split("T")[0] === today));
        break;
      case "Completed":
        setFilteredTasks(tasks.filter((task) => task.checked === true));
        break;
      default:
        setFilteredTasks(tasks);
        break;
    }
  }

  return (
    <div className="w-full md:w-1/3 md:h-[450px] flex flex-col justify-between rounded-2xl border border-slate-500 p-3 md:p-6 backdrop-blur-md bg-slate-100 bg-opacity-10">
      <div className="flex flex-col">
        <Title>Filters</Title>
        <div className="flex md:flex-col gap-2 text-slate-100 font-semibold text-sm sm:text-lg">
          <FilterBtn
            activeBtn={activeBtn}
            handleFilter={handleFilter}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M18 6H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm0 22H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2ZM40 6H30a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm0 22H30a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2Z"
                />
              </svg>
            }>
            All
          </FilterBtn>
          <FilterBtn
            handleFilter={handleFilter}
            activeBtn={activeBtn}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M9 16.5q-1.05 0-1.775-.725T6.5 14t.725-1.775T9 11.5t1.775.725T11.5 14t-.725 1.775T9 16.5M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z"
                />
              </svg>
            }>
            Today
          </FilterBtn>
          <FilterBtn
            handleFilter={handleFilter}
            activeBtn={activeBtn}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                <path fill="currentColor" d="M1.5 8a6.5 6.5 0 1 1 13 0A.75.75 0 0 0 16 8a8 8 0 1 0-8 8a.75.75 0 0 0 0-1.5A6.5 6.5 0 0 1 1.5 8" />
                <path
                  fill="currentColor"
                  d="m8.677 12.427l2.896 2.896a.25.25 0 0 0 .427-.177V13h3.25a.75.75 0 0 0 0-1.5H12V9.354a.25.25 0 0 0-.427-.177l-2.896 2.896a.25.25 0 0 0 0 .354M11.28 6.78a.749.749 0 1 0-1.06-1.06L7.25 8.689L5.78 7.22a.749.749 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z"
                />
              </svg>
            }>
            Completed
          </FilterBtn>
        </div>
      </div>
      <NavIcon />
    </div>
  );
}
