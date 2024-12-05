import {useState} from 'react'
import { useTasks } from './UseTasks'

const AddTasks = () => {
  const [errorValid, setErrorValid] = useState<boolean>(false)
  const [newTitle, setNewTitle] = useState<string>('')
  const tasks = useTasks()
  const error = newTitle === '' ? 'Please enter the title' : null;

  function handleError(val: boolean){
    setErrorValid(val);
  }

  function handleTitle(e: React.ChangeEvent<HTMLInputElement>){
    setNewTitle(e.target.value);
  }

  return (
    <div>
      <input 
        type='text'
        value={newTitle}
        onChange={(e) => handleTitle(e)}
      />
      <button onClick={() => {
        if( error ){
          handleError(true)
        }
        else{
          handleError(false)
          tasks?.dispatch({type:'add', title: newTitle})
          setNewTitle('')
        }
      }}
      >Add Task</button>
      { error && errorValid && <div style={{color: 'red'}}>{error}</div>}
    </div>
  )
}

export default AddTasks