import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");
  const debounced = useDebounce(input, 500);

  useEffect(() => {
    onSearch(debounced);
  }, [debounced]);

  return (
    <input
      type="text"
      placeholder="Search product..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="w-full md:w-1/3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
    />
  );
}
