import { useParams } from "react-router-dom";


const UserDetails = () => {
  const params = useParams()
  const userId = params.userId
  return (
    <div>
      Detail about users {userId}
    </div>
  );
}

export default UserDetails;
