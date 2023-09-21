import React, { useState } from "react";
import InputToDo from "./components/InputToDo";
import DisplayToDo from "./components/DisplayToDo";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllToDos } from "./slices/toDoSlice";
import Share from "./components/Share";

const App = () => {
  const toDos = useSelector((state) => state.toDos);
  const dispatch = useDispatch();
  const [showShare, setShowShare] = useState("hidden");
  const delete_ALL_TODOS = (e) => {
    e.preventDefault();
    dispatch(deleteAllToDos());
  };
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100 relative">
      <div className="w-[100%] h-screen sm:h-[70%] sm:w-[45%] lg:w-[30%] shadow-lg p-3 flex flex-col gap-5 rounded-lg bg-white">
        <InputToDo />
        <DisplayToDo />
        {toDos.length !== 0 && (
          <div className="flex gap-2">
            <button
              className="w-[50%] py-2 rounded-lg bg-red-500 hover:bg-red-600 text-base lg:text-lg text-white"
              onClick={() => {
                setShowShare((showShare) => "flex");
              }}
            >
              Share
            </button>
            <button
              className="w-[50%] py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-base lg:text-lg text-white"
              onClick={delete_ALL_TODOS}
            >
              Delete All
            </button>
          </div>
        )}
      </div>
      <Share display={showShare} setDisplay={setShowShare} />
    </div>
  );
};

export default App;
