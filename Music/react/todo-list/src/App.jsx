import {ThemeProvider } from "styled-components"
import TodoList from "./TodoList"
import { GlobalStyles } from "./components/styles/global"
import { data } from "./Data";
import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import IconBar from "./components/IconBar";
import MenuBar from "./components/MenuBar";


function App() {
  const [tasks, setTasks] = useState(data)
  const [taskId, SetTaskId] = useState(data.length)

  function handleComplete(id) {
    const dummyTasks = tasks.map( task => {
      if (task.Id === id) {
        return {...task, Completed_Status: true}
      }
      return task
      
    })
    setTasks(dummyTasks)
  }

  const handleDelete = (id) => {
    const dummyTasks = tasks.filter(task => task.Id !== id)
    setTasks(dummyTasks)
  }

  const handleAdd = (desc) => {
    const newTask = {
      Id: taskId+1,
      Description: desc,
      Completed_Status: false
    }
    const updatedTasks = []
    setTasks(t => [...t, newTask])
    SetTaskId(taskId+1)
  } 

  const theme = {
    button: {
      color: 'purple',
      bgcolor: 'papayawhip',
      padding: '6px 12px'
    },
    body: {
      color: 'xyz',
      bgcolor: 'xyz'
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <BrowserRouter>
          <TodoList tasks={tasks} onComplete={handleComplete} onDelete={handleDelete} onAddTask={handleAdd}/>
          <Routes>
            <Route path="/" element={<IconBar/>}/>
            <Route path="/menubar" element={<MenuBar/>}/>
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
