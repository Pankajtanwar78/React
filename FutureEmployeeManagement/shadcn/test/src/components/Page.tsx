import { useMemo } from "react";
import { columns } from "./Columns";
import DataTable from './DataTable'
import myData from '../assets/test.json'


const Page = () => {
  const data = useMemo(() => {return myData}, [])

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default Page