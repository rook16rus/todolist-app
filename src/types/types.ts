export type ITask = {
    id: string,
    text: string,
    checked: boolean
}

export type tasksState = {
    tasks: Array<ITask>,
    tasksLoadingStatus: string
}