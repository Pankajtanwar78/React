import {useState} from 'react';
import { StyledBillDetails, StyledButton } from './styles/friends.styles';
import { FriendProps } from './FriendTypes';
type SplitDetailsProps = {
  selectedFriend: FriendProps;
  onSplitBill: (amount: number) => void;

}

const SplitDetails = ({selectedFriend, onSplitBill}: SplitDetailsProps) => {
  const [totalAmount, setTotalAmount] = useState<number | "">("")
  const [yourAmount, setYourAmount] = useState<number | "">("")
  const [billPaidBy, setBillPaidBy] = useState<string>("you")

  const handleTotalExpense = (e: React.ChangeEvent<HTMLInputElement>) => {
    //e.preventDefault()
    const value = e.target.value
    if (value === "" || isNaN(Number(value))) {
      setTotalAmount("") 
      return
    }
    setTotalAmount(Number(value))
  }


  const handleYourExpense = (e: React.ChangeEvent<HTMLInputElement>) => {
    //e.preventDefault()
    const value = e.target.value
    if (value === "" || isNaN(Number(value))) {
      setYourAmount("") 
      return
    }

    const numericValue = Number(value);
    if (typeof totalAmount === "number" && numericValue > totalAmount){
      setYourAmount(totalAmount)
    }
    else{
      setYourAmount(numericValue)
    }
  }

  const friendsAmount = totalAmount ? totalAmount - (yourAmount || 0) : 0;
  
  const handleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault()
    if ( !totalAmount || !yourAmount ) return
    const billAmount = billPaidBy === "you" ? friendsAmount : -friendsAmount;
    onSplitBill( billAmount );
  }

  return (
    <StyledBillDetails onSubmit={handleSubmit}>
        <h1>Split a bill with {selectedFriend.name}</h1>
        <label>💰 Bill value</label>
        <input 
          type="text"
          value={totalAmount}
          onChange={handleTotalExpense} />

        <label>🧍‍♀️ Your expense</label>
        <input 
          type="text"
          value={yourAmount}
          onChange={handleYourExpense} /> 

        <label>👫 {selectedFriend.name}'s expense</label>
        <input 
          type="text"
          disabled
          value={friendsAmount}
          /> 

        <label>🤑 Who is paying the bill</label>
        <select 
          value={billPaidBy}
          onChange={(e) => { setBillPaidBy(e.target.value) }}
          >
          <option value="you" >You</option>
          <option value={selectedFriend.name} >{selectedFriend.name}</option>
        </select>

        <StyledButton>Split bill</StyledButton>
      </StyledBillDetails>
  )
}

export default SplitDetails;
