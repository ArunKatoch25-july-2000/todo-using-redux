import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  toDos: [],
};

const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.toDos.push({
        id: action.payload.id,
        text: action.payload.text,
        showSaveCancelBtn: false,
        showEditDelBtn: true,
      });
    },
    showEditInput: (state, action) => {
      state.toDos.map((currState) => {
        if (currState.id === action.payload.id) {
          (currState.showSaveCancelBtn = true),
            (currState.showEditDelBtn = false);
        }
      });
    },
    showSaveEditInput: (state, action) => {
      state.toDos.map((currState) => {
        if (currState.id === action.payload.id) {
          (currState.showSaveCancelBtn = false),
            (currState.showEditDelBtn = true);
        }
      });
    },
    editInputVal: (state, action) => {
      state.toDos.map((editToDo) => {
        if (editToDo.id === action.payload.id) {
          editToDo.inputVal = action.payload.value;
        }
      });
    },

    saveEditToDo: (state, action) => {
      state.toDos.map((todo) => {
        if (todo.id === action.payload.id) {
          (todo.text = action.payload.val),
            (todo.showEditDelBtn = true),
            (todo.showSaveCancelBtn = false);
        }
      });
    },
    removeTodo: (state, action) => {
      state.toDos = state.toDos.filter((toDo) => toDo.id !== action.payload.id);
    },
    deleteAllToDos: (state, action) => {
      state.toDos = [];
    },
  },
});

export const {
  addTodo,
  removeTodo,
  saveEditToDo,
  editInputVal,
  showEditInput,
  showSaveEditInput,
  deleteAllToDos,
} = toDoSlice.actions;
export default toDoSlice.reducer;
