import { useState } from "react";

export default function ToDo() {
  const [items, setItems] = useState(["day1", "day2"]);

  function handleClick() {}
  return (
    <div className="bg-[#1e293b] h-full flex flex-col items-center pt-3">
      <p className="text-[#38bdf8] text-xl font-semibold ">To Do</p>
      <form
        method="post"
        className="w-full flex justify-center items-center"
        action="/"
      >
        <input
          type="text"
          placeholder="New Item"
          name="item"
          required
          autoComplete="off"
          className="w-full m-3 h-12 text-white bg-[#0f172a] text-center"
        />
        <button
          className="bg-[#38bdf8] rounded-sm mr-2 h-11 text-2xl font-semibold w-11"
          type="submit"
          onClick={handleClick}
        >
          +
        </button>
      </form>
      <div className=" w-full h-full">
        <input type="checkbox"></input>
        {items.map((item, idx) => {
          return (
            <p key={idx} className="text-white">
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}
