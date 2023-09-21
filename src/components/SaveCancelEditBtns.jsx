import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { saveEditToDo, showSaveEditInput } from "../slices/toDoSlice";

const SaveCancelEditBtns = ({ id, val }) => {
  const dispatch = useDispatch();
  const saveTODO = (e) => {
    e.preventDefault();
    if (!val) {
      window.alert(`can't be empty`);
      return;
    }
    dispatch(saveEditToDo({ id, val }));
  };

  const cancelTODO = (e) => {
    e.preventDefault();
    dispatch(showSaveEditInput({ id }));
  };
  return (
    <div className="flex items-center justify-center gap-4">
      <button className="flex items-center justify-center" onClick={saveTODO}>
        <AiOutlineCheck
          className="text-base lg:text-lg text-gray-500 hover:text-gray-600"
          //   onClick={editTODO}
        />
      </button>
      <button className="flex items-center justify-center" onClick={cancelTODO}>
        <AiOutlineClose className="text-base lg:text-lg text-red-500 hover:text-red-600" />
      </button>
    </div>
  );
};

export default SaveCancelEditBtns;
