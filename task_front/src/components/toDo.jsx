import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ToDo() {
  const [items, setItems] = useState([]);

  function handleDelete(e) {
    let id = e.target.id;

    let arr = items;

    arr = arr.filter((item) => {
      return item != items[id];
    });

    setItems(arr);
  }
  function handleEdit(e) {
    let ele = document.getElementById("input");
    let id = e.target.id;
    ele.value = items[id];
    let arr = items;

    arr = arr.filter((item) => {
      return item != items[id];
    });

    setItems(arr);
  }

  function handleClick() {
    let item = document.getElementById("input").value;

    setItems([item, ...items]);
    let ele = document.getElementById("input");
    ele.value = "";
  }
  function handleCheck(e) {
    console.log(e);
  }

  return (
    <div className="bg-[#1e293b] h-full flex flex-col items-center pt-3">
      <p className="text-white text-xl font-semibold underline-offset-4 underline">
        To Do
      </p>
      <div className="w-full flex justify-center items-center">
        <input
          id="input"
          type="text"
          placeholder="New Item"
          name="item"
          autoComplete="off"
          required
          className="w-full m-3 h-12 text-white bg-[#0f172a] text-left pl-2"
        />
        <button
          className="bg-[#38bdf8] rounded-md mr-2 h-10 text-2xl font-semibold w-12"
          onClick={handleClick}
        >
          +
        </button>
      </div>
      <div className=" w-full h-full">
        {items.length ? (
          items.map((item, idx) => {
            return (
              <div key={idx} className="flex w-full gap-2 p-3">
                <input type="checkbox" onClick={handleCheck}></input>

                <p className="text-white min-w-[500px]  ">{item}</p>
                <div className="flex w-full justify-end gap-1">
                  <div id={idx} className="cursor-pointer" onClick={handleEdit}>
                    <EditIcon id={idx} className="text-white" />
                  </div>

                  <div
                    id={idx}
                    className="cursor-pointer"
                    onClick={handleDelete}
                  >
                    <DeleteIcon id={idx} className="text-white" />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-white pl-4">No Tasks</p>
        )}
      </div>
    </div>
  );
}
