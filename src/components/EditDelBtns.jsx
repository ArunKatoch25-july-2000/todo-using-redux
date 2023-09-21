import { useDispatch } from "react-redux";
import { showEditInput, removeTodo } from "../slices/toDoSlice";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const EditDelBtns = ({ id }) => {
  const dispatch = useDispatch();

  const editTODO = (e) => {
    e.preventDefault();
    dispatch(showEditInput({ id }));
  };

  const deleteTODO = (e) => {
    e.preventDefault();
    dispatch(removeTodo({ id }));
  };
  return (
    <div className="flex items-center justify-center gap-4">
      <button className="flex items-center justify-center" onClick={editTODO}>
        <AiFillEdit className="text-base lg:text-lg text-gray-500 hover:text-gray-600" />
      </button>
      <button className="flex items-center justify-center" onClick={deleteTODO}>
        <AiFillDelete className="text-base lg:text-lg text-red-500 hover:text-red-600" />
      </button>
    </div>
  );
};

export default EditDelBtns;
