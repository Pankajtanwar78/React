import { useState } from 'react'
import { useTasks } from './UseTasks'
import TaskList from './TaskList';
import AddTasks from './AddTasks';
import FilterTasks from './FilterTasks';



const TaskManagement = () => {
  const [filterTask, setFilterTask] = useState<string>('')
  const tasks = useTasks()

  let selectedTask = tasks?.taskType
  if ( filterTask === 'completed' ){
    selectedTask = tasks?.taskType.filter((task) => task.completed === true)
  }
  if ( filterTask === 'incomplete' ){
    selectedTask = tasks?.taskType.filter((task) => task.completed === false)
  }

  function handleFilter(e: React.ChangeEvent<HTMLSelectElement>) {
    setFilterTask(e.target.value)
  }

  return (
    <>
      <div>Task Management</div>
      <AddTasks/>
      <FilterTasks filterTask={filterTask} onFilter={handleFilter}/>
      <TaskList selectedTask={selectedTask}/>
    </>
  )
}

export default TaskManagement