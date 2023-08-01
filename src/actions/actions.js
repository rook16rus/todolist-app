export const tasksFetching = () => {
    return {
        type: "TASKS_FETCHING"
    }
}

export const tasksFetched = (tasks) => {
    return {
        type: "TASKS_FETCHED",
        payload: tasks
    }
}

export const tasksFetchingError = () => {
    return {
        type: "TASKS_FETCHING_ERROR"
    }
}

export const addTask = (task) => {
    return {
        type: "ADD_TASK",
        payload: task
    }
}

export const deleteTask = (id) => {
    return {
        type: "DELETE_TASK",
        payload: id
    }
}

export const checkTask = (id) => {
    return {
        type: "CHECK_TASK",
        payload: id
    }
}