import React, { Component } from 'react';
import { Container } from '../../Components/Container';
import { ThemeProvider } from 'styled-components';
import {Dropdown} from '../../Components/Dropdown';
import {Heading1, Heading2, Heading3, Heading4, Heading5} from '../../Components/Heading';
import {TextField} from '../../Components/TextField';
import {Button} from '../../Components/Button';
import {Table, Thead, Tbody, Tr, Td, Th} from '../../Components/Table';
import { connect } from 'react-redux';
import {addTaskAction, deleteTaskAction, doneTaskAction, editTaskAction} from '../../../Redux/Actions/ToDoListActions';
import {arrTheme} from '../../DemoThemes/ToDoListTheme/ThemeManager';
import {changeThemeAction} from '../../../Redux/Actions/ToDoListActions'

class ToDoList extends Component {
    
    state = {
        taskName: ''
    }


    renderTaskToDo = () =>{
        return this.props.taskList.filter(task => !task.done).map((task, index) => {
            return <Tr key={index}>
            <Th>{task.taskName}</Th>
            <Th className='text-right'>

                {/* edit task */}  
                <Button onClick={()=>{
                    this.props.dispatch(editTaskAction(task))
                }} className='ml-1'><i className="fa fa-edit"></i></Button>

                {/* done task */}
                <Button onClick={()=>{
                    this.props.dispatch(doneTaskAction(task.id))
                }} className='ml-1'><i className="fa fa-check"></i></Button>
                
                {/* delete task */}   
                <Button onClick={()=>{
                    this.props.dispatch(deleteTaskAction(task.id))
                }} className='ml-1'><i className="fa fa-trash"></i></Button>
            </Th>
        </Tr>
        })
    }
    renderTaskDone = () => {
        return this.props.taskList.filter(task => task.done).map((task, index) => {
            return <Tr key={index}>
            <Th>{task.taskName}</Th>
            <Th className='text-right'>
                <Button className='ml-1'><i className="fa fa-trash"></i></Button>
            </Th>
        </Tr>
        })
    }
    renderTheme = () => {
        return arrTheme.map((theme, index) => {
            return <option key={index} value={theme.id}>{theme.name}</option>
        })
    }

  render() {
    return (
        <ThemeProvider theme={this.props.themeToDoList}>
        <Container className='w-50 mt-5'>
            <Dropdown onChange={(e) => {
                let {value} = e.target;
                //dispatch value len reducer
                this.props.dispatch(changeThemeAction(value));
            }}>
                {this.renderTheme()}
            </Dropdown>
            <Heading2>TO DO LIST</Heading2>
            <TextField value={this.props.taskEdit.taskName} onChange={(e) => {
                this.setState({
                    taskName: e.target.value
                })
            }} label="Task name" className="w-50"/>
            <Button onClick={()=>{
                //lay thong tin ng dung nhap vao tu input 
                let {taskName} = this.state;
                // tao ra 1 task object
                let newTask = {
                    id: Date.now(),
                    taskName: taskName,
                    done: false
                };
                //dua task object len redux thong qua phuong thuc dispatch
                this.props.dispatch(addTaskAction(newTask))
            }} className='ml-2'><i className="fa fa-plus"></i> Add task</Button>
            <Button className='ml-2'><i className="fa fa-upload"></i> Update task</Button>
            <hr/>
            <Heading3>Task to do</Heading3>
            <Table>
                <Thead>
                    {this.renderTaskToDo()}
                </Thead>
            </Table>
            <hr/>
            <Heading3>Task complete</Heading3>
            <Table>
                <Thead>
                    {this.renderTaskDone()}
                </Thead>
            </Table>
        </Container>
    </ThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
    return{
        themeToDoList: state.ToDoListReducer.themeToDoList,
        taskList: state.ToDoListReducer.taskList,
        taskEdit: state.ToDoListReducer.taskEdit
    }
}
// const mapDispatchToProps = (dispatch) => ({
//     addTask: (newTask) => dispatch(addTaskAction)
// })


export default connect (mapStateToProps) (ToDoList)

