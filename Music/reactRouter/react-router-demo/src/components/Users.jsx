import { Outlet, Link, useSearchParams } from "react-router-dom";


const Users = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveUsers = (searchParams.get('filterrr') === 'active') && (searchParams.get('layout'))
  return (

    <div>
      <button onClick={() => setSearchParams({filterrr: 'active', layout: true})}>Active users</button>
      <button onClick={() => setSearchParams({})}>Reset filter</button>
      {
      showActiveUsers ? <h2>Active users</h2> : <h2>All users</h2>}
    </div>
    // <div>
    //   <Link to='1'>
    //   <button>User 1</button>
    //   </Link>

    //   <Link to='2'>
    //   <button>User 2</button>
    //   </Link>

    //   <Link to='admin'>
    //   <button>admin</button>
    //   </Link>
    //  <Outlet/>
    // </div>
  );
}

export default Users;
