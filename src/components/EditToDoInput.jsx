import { useDispatch } from "react-redux";
import { editInputVal, saveEditToDo } from "../slices/toDoSlice";

const EditToDoInput = ({ id, val }) => {
  const dispatch = useDispatch();
  return (
    <input
      className="w-[80%] px-2 outline-none border-b border-b-red-600 text-base text-gray-600 lg:text-lg"
      autoFocus="autoFocus"
      type="text"
      id={id}
      value={val}
      onChange={(e) => {
        e.preventDefault();
        dispatch(editInputVal({ id, value: e.target.value }));
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          if (!val) {
            window.alert(`can't be empty`);
            return;
          }
          dispatch(saveEditToDo({ id, val }));
        }
      }}
    />
  );
};

export default EditToDoInput;
