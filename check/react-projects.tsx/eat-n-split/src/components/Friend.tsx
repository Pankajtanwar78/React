import { StyledFriend, StyledPara } from './styles/friends.styles';
import { FriendProps } from './FriendTypes';
type FriendPropss = {
  friendList: FriendProps[];
  onSelectedFriend: (friend: FriendProps) => void
  selectedFriend: FriendProps | null
}
const Friend = ({friendList, onSelectedFriend, selectedFriend}: FriendPropss) => {

  const balanceDetails = (friend: FriendProps) => {
    if (friend.balance === 0){
      return <p>You and {friend.name} are even</p>
    }
    else if ( friend.balance < 0 ){
      return <StyledPara color="red">You owe {friend.name} {Math.abs(friend.balance)}€</StyledPara>
    }
    else{
      return <StyledPara color="green">{friend.name} owes you {friend.balance}€</StyledPara>
    }
  }


  return (
    <>
      {
        friendList.map((friend: FriendProps) => {
        return  (
          <StyledFriend key={friend.id} selected={selectedFriend?.id === friend.id}>
            <img src={friend.image} alt={friend.name} />
            <h2>{friend.name}</h2>
            {balanceDetails(friend)}
            <button onClick={() => {
              onSelectedFriend(friend)}}>{selectedFriend?.id === friend.id ? 'Close' : 'Select'}</button>
          </StyledFriend>     
        )})
      }
    </>
  )
}

export default Friend;
