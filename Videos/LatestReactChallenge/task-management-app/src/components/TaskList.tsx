import Task from './Task'
import { TasksType } from './UseTasks'

type selectedTaskProps = {
  selectedTask: TasksType[] | undefined
}

const TaskList = ({selectedTask}: selectedTaskProps) => {
  return (
    <div>
    {
      selectedTask?.map((task) => {
        return (
          <div key={task.id}>
            <Task task={task} />
          </div> 
        )})
    }
    </div>
  )
}

export default TaskList