import { TasksContextType, TasksType, useTasks } from "./UseTasks"

type Props = {
  task: TasksType
}

const Task = ({task}: Props) => {

  const tasks = useTasks()

  function handleToggle(tasks: TasksContextType | undefined, id: number) {
    tasks?.dispatch({
      type: 'edit',
      id: id
    });
  }

  return (
    <div>
      <input  
        type='checkbox'
        checked={task.completed}
        onChange={() => handleToggle(tasks, task.id)}
      />
      <label>{task.title}</label>
      <button onClick={() => tasks?.dispatch({type: 'delete', id: task.id})}>Delete</button>
      <label style={{color: 'green'}}>
        {task.completed ? 'Completed' : 'Not completed'}
      </label>
    </div>
  )
}

export default Task