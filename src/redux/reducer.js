import { ADD_TASK, EDIT_TASK, FILTER_TASK } from './actions';

const initialState = {
    tasks: [],
    filter: 'all',
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id
                        ? { ...task, description: action.payload.newDescription }
                        : task
                ),
            };
        case FILTER_TASK:
            return {
                ...state,
                filter: action.payload,
            };
        default:
            return state;
    }
};

export default taskReducer;
