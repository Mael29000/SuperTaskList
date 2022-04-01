import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from "./actionsType";

// Actions are functions that return an object processed by the reducer - {type: 'NAME_ACTION', payload: {DATA}}

// ADD_TASK

export const addTask = (title: string) => {
  return {
    type: ADD_TASK,
    payload: {
      title,
    },
  };
};

// TOGGLE_TASK

export const toggleTask = (id: number) => {
  return {
    type: TOGGLE_TASK,
    payload: {
      id,
    },
  };
};

// DELETE_TASK

export const deleteTask = (id: number) => {
  return {
    type: DELETE_TASK,
    payload: {
      id,
    },
  };
};
