import Task from "../../model/Task";
import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from "../actions/actionsType";

// Reducers are functions that return a new state

const initialState: Task[] = [{ id: 1, title: "Task 1", isCompleted: false }];
export const tasksList = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: new Date().getTime(),
          title: action.payload.title,
          isCompleted: false,
        },
      ];
    case TOGGLE_TASK:
      return state.map((task: Task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            // set isCompleted to the opposite of what it currently is
            isCompleted: !task.isCompleted,
          };
        }
        return task;
      });
    case DELETE_TASK:
      return state.filter((task: Task) => task.id !== action.payload.id);
    default:
      return state;
  }
};
