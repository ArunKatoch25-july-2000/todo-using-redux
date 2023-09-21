import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../slices/toDoSlice";
const InputToDo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.toDos);

  const inputEvent = (e) => {
    e.preventDefault();
    setInput((input) => e.target.value);
  };

  const createToDo = (e) => {
    e.preventDefault();
    if (!input) {
      window.alert(`plz write something in input box.`);
      return;
    }
    dispatch(addTodo({ id: Date.now(), text: input }));
    setInput((input) => "");
  };
  return (
    <div className="w-full flex justify-between gap-5">
      <input
        type="text"
        name="addItem"
        value={input}
        onChange={inputEvent}
        className="w-full border-b border-blue-400 outline-none p-2"
        placeholder="Type here..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            dispatch(addTodo({ id: Date.now(), text: input }));
            setInput((input) => "");
          }
        }}
      />
      <button
        className="px-3 py-3 bg-blue-400 hover:bg-blue-500 flex items-center justify-center rounded-full"
        onClick={createToDo}
      >
        <AiOutlinePlus className="text-white text-lg" />
      </button>
    </div>
  );
};

export default InputToDo;
