import { useState } from "react";
import { StyleEatnSplit, StyledSideBar, StyledInput, StyledButton, StyledNoFriendInfo } from "./styles/friends.styles";
import AddFriend from "./AddFriend";
import SplitDetails from "./SplitDetails";
import FriendsList from "./FriendsList";
import { FriendProps } from "./FriendTypes";


const initialFriends: FriendProps[] = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  }
];

const EatnSplit = () => {
  const [friendsList, setFriendsList] = useState<FriendProps[]>(initialFriends)
  const [selectedFriend, setSelectedFriend] = useState<FriendProps | null>(null)
  const [friendAdd, setFriendAdd] = useState(false)
  const [searchValue, setSearchValue] = useState("")


  const handleAddFriend = (newFriend: FriendProps) => {
    setFriendsList([...friendsList, newFriend])
  }

  const handleFriendSelection = (friend: FriendProps) => {
    if ( selectedFriend != friend ){
      setSelectedFriend(friend)
    }
    else{
      setSelectedFriend(null)
    }
  }

  const handleSplitBill = (amount: number) => {
    setFriendsList((prevFriendList) => 
      prevFriendList.map((friend) => {
        if ( selectedFriend?.id === friend.id){
          return {...friend, balance: friend.balance + amount}
        }
        return friend
      })
    )
  }

  const filteredFriends = friendsList.filter((friend) => 
    friend.name.toLowerCase().includes(searchValue.toLowerCase()))

  console.log(filteredFriends)

  return (
    <StyleEatnSplit>
      <StyledSideBar>
        <StyledInput 
            type="text"
            placeholder="Search friend..."
            value={searchValue}
            onChange={(e) => {setSearchValue(e.target.value)}} />
        {
        friendsList.length === 0 ? 
          <StyledNoFriendInfo>Make new friends....</StyledNoFriendInfo> :
          filteredFriends.length === 0 ?
          <StyledNoFriendInfo>No Friend matches your requirement</StyledNoFriendInfo> :
          <FriendsList 
            friendList={filteredFriends} 
            onSelectedFriend={handleFriendSelection} 
            selectedFriend={selectedFriend} />
        }
        {
          friendAdd && <AddFriend onAddFriend={handleAddFriend}/>
        }
        <StyledButton 
          onClick={() => setFriendAdd(!friendAdd)}>
            {friendAdd ? 'Close' : 'Add Friend'}
        </StyledButton>
      </StyledSideBar>
      { selectedFriend && <SplitDetails 
                              key={selectedFriend.id} 
                              selectedFriend={selectedFriend} 
                              onSplitBill={handleSplitBill} /> 
      }
      
    </StyleEatnSplit>
  )
}

export default EatnSplit;
