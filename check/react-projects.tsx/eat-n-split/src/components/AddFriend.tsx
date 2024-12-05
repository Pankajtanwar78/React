import { useState } from "react"
import { StyledAddFriendForm } from "./styles/friends.styles"
import { FriendProps } from "./FriendTypes"

type AddFriendProps = {
  onAddFriend: (friend: FriendProps) => void
}

const AddFriend = ({onAddFriend}: AddFriendProps) => {
  const [friendName, setFriendName] = useState("")
  const [image, setImage] = useState("https://i.pravatar.cc/48")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if( !friendName || !image ) return

    const id = Number(crypto.randomUUID());
    const newFriend = {
      id,
      name: friendName,
      image: `${image}?=${id}`,
      balance: 0
    }

    onAddFriend(newFriend)

    setFriendName("")
    setImage("https://i.pravatar.cc/48")
  }

  return (
    <StyledAddFriendForm onSubmit={e => {handleSubmit(e)}}>
      <label>👫 Friend name</label>
      <input 
        type="text"
        value={friendName}
        onChange={(e) => { setFriendName(e.target.value) }} />

      <label>🌄 Image URL</label>
      <input 
        type="text"
        value={image}
        onChange={(e) => { setImage(e.target.value) }} />

      <button>Add</button>
    </StyledAddFriendForm>
  )
}

export default AddFriend;
