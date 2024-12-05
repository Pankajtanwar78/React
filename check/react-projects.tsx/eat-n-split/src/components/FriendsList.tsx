import { StyledFriendList, StyledFriendListContainer } from './styles/friends.styles';
import Friend from './Friend';
import { FriendProps } from './FriendTypes';
type FriendListProps = {
  friendList: FriendProps[];
  onSelectedFriend: (friend: FriendProps) => void
  selectedFriend: FriendProps | null
}
const FriendsList = ({friendList, onSelectedFriend, selectedFriend}: FriendListProps) => {
  return (
    <StyledFriendListContainer >
          <StyledFriendList>
            <Friend friendList={friendList} onSelectedFriend={onSelectedFriend} selectedFriend={selectedFriend} />
          </StyledFriendList>
        </StyledFriendListContainer> 
  );
}

export default FriendsList;
