import { tasksState } from "../types/types";

const initialState: tasksState = {
    tasks: [],
    tasksLoadingStatus: "loading",
    tasksFilter: "all"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "TASKS_FETCHING":
            return {
                ...state,
                tasksLoadingStatus: "loading"
            }
        case "TASKS_FETCHED":
            return {
                ...state,
                tasks: action.payload,
                tasksLoadingStatus: "idle"
            }
        case "TASKS_FETCHING_ERROR":
            return {
                ...state,
                tasksLoadingStatus: "error"
            }
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        case "CHECK_TASK":
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload) {
                        return {...task, checked: !task.checked}
                    }

                    return task;
                })
            }
        case "FILTER_TASK":
            return {
                ...state,
                tasksFilter: action.payload
            }
        default:
            return state
    }
}

export default reducer