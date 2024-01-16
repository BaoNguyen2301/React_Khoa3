import { ADD_TASK, CHANGE_THEME } from "../Stypes/ToDoListTypes";

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
