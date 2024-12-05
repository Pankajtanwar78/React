import React from 'react'

type Props = {
  onFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  filterTask: string
}

const FilterTasks = ({onFilter, filterTask}: Props) => {
  return (
    <div>
      <label htmlFor='selectInput'>select input: </label>
      <select
        id='selectInput'
        name='selectInput'
        value={filterTask}
        onChange={(e) => onFilter(e)}
      >
        <option key={1} value='all'>All</option>
        <option key={2} value='completed'>Completed</option>
        <option key={3} value='incomplete'>Incomplete</option>
      </select>
    </div>
  )
}

export default FilterTasks