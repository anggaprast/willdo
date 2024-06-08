export default function FilterBtn({ icon, children, handleFilter, activeBtn }) {
  return (
    <button
      onClick={() => handleFilter(`${children}`)}
      href=""
      className={`flex justify-center md:justify-start items-center w-full px-3 py-1 md:py-3 rounded-full md:rounded-s-none ${
        activeBtn === children ? `active` : `border border-slate-500 hover:bg-sky-950 hover:bg-opacity-20`
      }`}>
      <span className="mr-2 lg:mr-3">{icon}</span>
      {children}
    </button>
  );
}
