import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { iceCreamActions } from "./iceCreamSlice";



const IceCream = () => {
  const numberOfIceCream = useAppSelector(state => state.iceCream.numberOfIceCreams);
  const dispatch = useAppDispatch();
  return (
    <>
    <div>IceCream - {numberOfIceCream}</div>
    <button onClick={() => {
      dispatch(iceCreamActions.ordered());
    }}>Order ice cream</button>
    <button
      onClick={() => {
        dispatch(iceCreamActions.restocked(3));
      }}
      >Restore iceCreams</button>
    </>
  )
}

export  default IceCream