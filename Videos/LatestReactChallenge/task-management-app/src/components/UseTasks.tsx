
import { createContext, useContext, useReducer } from "react";
import {v4 as uuidv4} from 'uuid'

export type TasksType = {
  id: number;
  title: string;
  completed: boolean;
}

type ActionType = 
  {type: 'add', title: string} |
  {type: 'delete', id: number} | 
  {type: 'edit', id: number}

export type TasksContextType = {
  taskType: TasksType[],
  dispatch: React.Dispatch<ActionType>
}


const initialTasks: TasksType[] = [
  
];

const taskContext = createContext<TasksContextType | undefined>(undefined);

const reducer = (state: TasksType[], action: ActionType) => {
  switch(action.type){
    case 'add': {
      return [...state, {
        id: uuidv4(),
        title: action.title,
        completed: false
      }];
      }
    case 'delete': {
      return state.filter(st => action.id !== st.id);
    }
    case 'edit': {
      return state.map((st) => {
        if( st.id === action.id ){
          return {...st, completed: !st.completed}
        }
        return st
      })
    }
    default: {
      return state;
    }

  }
}

type ChildrenType = {
  children: React.ReactNode
}

const TasksPropHelper = ({children}: ChildrenType) => {
  const [state, dispatch] = useReducer<React.Reducer<TasksType[], ActionType>>(reducer, initialTasks);
  return (
    <taskContext.Provider value={{taskType: state, dispatch}}>
      {children}
    </taskContext.Provider>
  )
}

export const useTasks = () => {
  return useContext(taskContext);
}

export default TasksPropHelper