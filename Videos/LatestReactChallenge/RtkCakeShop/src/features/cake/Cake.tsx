import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { cakeActions } from "./cakeSlice";
const Cake = () => {

  const numberOfCakes = useAppSelector((state) => state.cake.numberOfCakes )
  const dispatch = useAppDispatch();
  return (
    <>
    <div>Number of cakes - {numberOfCakes}</div>
    <button onClick={() => {
      dispatch(cakeActions.ordered());
    }}>Order cake</button>
    <button
      onClick={() => {
        dispatch(cakeActions.restocked(3));
      }}
      >Restore cake</button>
    </>
  )
}

export default Cake