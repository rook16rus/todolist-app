import { ITask, TaskActionTypes } from "../types/types";

export const tasksFetching = (): TaskActionTypes => {
    return {
        type: "TASKS_FETCHING"
    }
}

export const tasksFetched = (tasks): TaskActionTypes => {
    return {
        type: "TASKS_FETCHED",
        payload: tasks
    }
}

export const tasksFetchingError = (): TaskActionTypes => {
    return {
        type: "TASKS_FETCHING_ERROR"
    }
}

export const addTask = (task: ITask): TaskActionTypes => {
    return {
        type: "ADD_TASK",
        payload: task
    }
}

export const deleteTask = (id: string): TaskActionTypes => {
    return {
        type: "DELETE_TASK",
        payload: id
    }
}

export const checkTask = (id: string): TaskActionTypes => {
    return {
        type: "CHECK_TASK",
        payload: id
    }
}

export const filterTask = (filter: string): TaskActionTypes => {
    return  {
        type: "FILTER_TASK",
        payload: filter
    }
}