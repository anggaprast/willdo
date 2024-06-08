export default function Button({ children, setIsVisible }) {
  return (
    <button onClick={() => setIsVisible(true)} className="w-full mt-2 py-3 rounded-full bg-sky-700">
      <h1 className="text-center text-slate-100 font-semibold">{children}</h1>
    </button>
  );
}
