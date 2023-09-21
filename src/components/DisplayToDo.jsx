import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ToDo from "./ToDo";
import EditToDoInput from "./EditToDoInput";
import EditDelBtns from "./EditDelBtns";
import SaveCancelEditBtns from "./SaveCancelEditBtns";

const DisplayToDo = () => {
  const toDos = useSelector((state) => state.toDos);
  const dispatch = useDispatch();
  return (
    <div className="w-full h-[85%] p-2 flex flex-col overflow-y-auto">
      {toDos.map((currTodo) => {
        return (
          <div className="w-full p-3 flex justify-between" key={currTodo.id}>
            {currTodo.showEditDelBtn ? (
              <>
                <ToDo text={currTodo.text} />
                <EditDelBtns id={currTodo.id} />
              </>
            ) : (
              <>
                <EditToDoInput id={currTodo.id} val={currTodo.inputVal} />
                <SaveCancelEditBtns id={currTodo.id} val={currTodo.inputVal} />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DisplayToDo;
