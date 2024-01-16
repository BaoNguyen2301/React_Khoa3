import { ToDoListDarkTheme } from "../../JSS_StyledComponent/DemoThemes/ToDoListTheme/ToDoListDarkTheme"
import { ADD_TASK } from "../Stypes/ToDoListTypes"
import { CHANGE_THEME } from '../Stypes/ToDoListTypes'
import {arrTheme} from '../../JSS_StyledComponent/DemoThemes/ToDoListTheme/ThemeManager'

const initialState = {
    themeToDoList: ToDoListDarkTheme,
    taskList: [
        { id: 'task-1', taskName: 'task 1', done: true },
        { id: 'task-2', taskName: 'task 2', done: false },
        { id: 'task-3', taskName: 'task 3', done: true },
        { id: 'task-4', taskName: 'task 4', done: false },
    ]

}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            //Kiem tra rong
            if (action.newTask.taskName.trim() === '') {
                alert('Task name is required!');
                return { ...state }
            }
            //Kiem tra ton tai
            let taskListUdate = [...state.taskList];
            let index = taskListUdate.findIndex(task => task.taskName === action.newTask.taskName);
            if (index !== -1) {
                alert('Task name already exists!');
                return
            }

            taskListUdate.push(action.newTask);

            //xu ly xong thi gan lai taskList
            state.taskList = taskListUdate;

            return { ...state }
        }

        case CHANGE_THEME: {
            let theme = arrTheme.find(theme => theme.id == action.themeId)

            if(theme){
                state.themeToDoList = {...theme.theme};
            }

            return { ...state }
        }


        default:
            return { ...state }
    }
}
