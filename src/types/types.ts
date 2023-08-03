export type ITask = {
    id: string,
    text: string,
    checked: boolean
}

export type tasksState = {
    tasks: Array<ITask>,
    tasksLoadingStatus: string
}

type tasksFetchingAction = {
    type: "TASKS_FETCHING"
}

type tasksFetchedAction = {
    type: "TASKS_FETCHED",
    payload: Array<ITask>
}

type tasksFetchingErrorAction = {
    type: "TASKS_FETCHING_ERROR"
}

type addTaskAction = {
    type: "ADD_TASK",
    payload: ITask
}

type deleteTaskAction = {
    type: "DELETE_TASK",
    payload: string
}

type checkTaskAction = {
    type: "CHECK_TASK",
    payload: string
}

export type TaskActionTypes = tasksFetchingAction | tasksFetchedAction | tasksFetchingErrorAction | addTaskAction | deleteTaskAction | checkTaskAction