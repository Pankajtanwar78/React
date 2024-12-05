import { TodoTask, TaskList, Button, Header } from "./components/styles/TaskList.styles";
import { useState } from "react";


const TodoList = ({tasks, onComplete, onDelete, onAddTask}) => {
  const [textValue, setTextValue] = useState('')
  return (
    // <>
    // <Header>
    //   <h2>Todo List</h2>
    //   <input 
    //     type="text"
    //     placeholder="Title.."
    //     onChange={ e => setTextValue(e.target.value)}
    //     value={textValue}
    //   />
    //   <span onClick={() => onAddTask(textValue)}>Add</span>
    // </Header>
    // <ul>
    //   { tasks.map(task => (
    //     <li key={task.Id}>{task.Description}</li>
    //   )) }
    // </ul>



    <TodoTask>
      <h2>Todo list</h2>
      <label>
        Add task: {' '}
        <input 
          type="text" 
          placeholder="task..." 
          onChange={e => setTextValue(e.target.value)}
          value={textValue} />
        <Button disabled={textValue === ''} onClick={() => {
          
          onAddTask(textValue)}}>
          Add task
        </Button>
      </label>
      
      <TaskList length={tasks.length}>
        { tasks.map(task => (
            <li key={task.Id}>

                {task.Id} {task.Description} {task.Completed_Status ? '(Completed)' : '(Pending)'}  
                <Button disabled={task.Completed_Status} onClick={() => {onComplete(task.Id)}}>
                  {task.Completed_Status ? 'Completed' : 'Complete'}
                </Button>
                <Button onClick={() => {onDelete(task.Id)}}>
                  Delete
                </Button>
            </li>
        ))}
      </TaskList>
    </TodoTask>
  );
}

export default TodoList;
