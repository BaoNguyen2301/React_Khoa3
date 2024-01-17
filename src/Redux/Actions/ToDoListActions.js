import { type } from "@testing-library/user-event/dist/type";
import { ADD_TASK, CHANGE_THEME, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../Stypes/ToDoListTypes";

export const addTaskAction = (newTask) => {
    return {
        type: ADD_TASK,
        newTask
    }
}

export const changeThemeAction = (themeId) => {
    return {
        type: CHANGE_THEME,
        themeId
    }
}

export const doneTaskAction = (taskId) => ({
    type: DONE_TASK,
    taskId
})

export const deleteTaskAction = (taskId) => ({
    type: DELETE_TASK,
    taskId
})

export const editTaskAction = (task) => ({
    type: EDIT_TASK,
    task
})
