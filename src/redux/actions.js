export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const FILTER_TASK = 'FILTER_TASK';

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
});

export const editTask = (id, newDescription) => ({
    type: EDIT_TASK,
    payload: { id, newDescription },
});

export const filterTask = (isDone) => ({
    type: FILTER_TASK,
    payload: isDone,
});
