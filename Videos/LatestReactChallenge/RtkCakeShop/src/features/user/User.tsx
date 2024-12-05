import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchUsers } from "./userSlice";
const User = () => {
  const {loading, users, error} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const abortControllerRef = useRef<AbortController | null>(null);

  const handleFetchUsers = () => {
    // Cancel the previous fetch if it exists
    if (abortControllerRef.current) {
      console.log('pankaj')
      abortControllerRef.current.abort();
    }

    // Create a new AbortController for this request
    const controller = new AbortController();
    abortControllerRef.current = controller;

    dispatch(fetchUsers({signal: controller.signal}));
  };

  useEffect(() => {
    handleFetchUsers();

    // Clean up by aborting any ongoing request on component unmount
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);
  return (
    <div>
    <button onClick={() => {
      handleFetchUsers()
    }}>Fetch Users</button>
    <div>User details</div>
    {loading && <div>Loading....</div>}
    {!loading && users.length && 
      <ul>
        {users.map(user => {
          return <li key={user.id}>
            {user.id} - {user.name}
          </li>
        }) }
      </ul>
    }
    {!loading && error && <div>{error}</div>}
    </div>
  )
}

export default User