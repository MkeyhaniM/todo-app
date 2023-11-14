import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { initialState } from "../state/initialState";

interface Todo {
  id: number;
  task: string;
  isDone: boolean;
  time: string;
}

interface TodoState extends Array<Todo> {}

interface AddTaskPayload {
  id: number;
  task: string;
}

interface RemoveTaskPayload {
  id: number;
}

interface DoneTaskPayload {
  id: number;
}

interface EditTaskPayload {
  id: number;
}

const todoList = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state: TodoState, action: PayloadAction<AddTaskPayload>) => {
      return [
        ...state,
        {
          id: action.payload.id + 1,
          task: action.payload.task,
          isDone: false,
          time: new Date().toLocaleTimeString(),
        },
      ];
    },
    removeTask: (
      state: TodoState,
      action: PayloadAction<RemoveTaskPayload>
    ) => {
      return state.filter((t) => t.id !== action.payload.id);
    },
    doneTask: (state: TodoState, action: PayloadAction<DoneTaskPayload>) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isDone: true };
        }
        return todo;
      });
    },
    editTask: (state: TodoState, action: PayloadAction<EditTaskPayload>) => {
      const editedTodo = prompt("Edit the todo:");

      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, task: editedTodo };
        }
        return todo;
      });
    },

    anotherClient: () => {
      // state: TodoState, action: PayloadAction
      return [...initialState];
    },
  },
});

export const { addTask, removeTask, doneTask, editTask, anotherClient } =
  todoList.actions;

export const selectCount = (state: RootState) => state.todo;
export default todoList.reducer;
