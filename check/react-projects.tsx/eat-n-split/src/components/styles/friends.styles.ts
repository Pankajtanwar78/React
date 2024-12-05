import styled from "styled-components";

interface StyledFriendProps {
  selected: boolean;
}

export const StyleEatnSplit = styled.div`
  display: grid;
  grid-template-columns: 30vw 30vw;
  align-items: start;
  column-gap: 4rem;
  min-height: 66vh;
  max-height: 98vh;
`

export const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  height: 98vh;
`

export const StyledInput = styled.input`
  padding: 1.5rem;
  border-radius: 1rem;
  font-size: 2rem;
  border: none;
  margin-top: 1rem;
  width: 90%;


`
export const StyledFriendListContainer = styled.div`
  padding: 7px;
  width: 100%;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.7);
  background-color: #F5F7F8;
  border-radius: 1rem;
  max-height: 60%;
  margin-bottom: 2rem;
`

export const StyledFriendList = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: start;
  row-gap: 2rem;
  background-color: inherit;
  overflow-y: auto;
  max-height: 100%;
`

export const StyledFriend = styled.li<StyledFriendProps>`
  
  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 1rem;
  align-items: center;
  padding: 2rem;
  background-color: ${({selected}) => selected ? '#ffe8cc' : '#EEEDEB'};
  border-radius: 1rem;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
  &:hover{
    background-color: #ffe8cc;
  }
  row-gap: 6px;
  margin-right: 1rem;

  img{
    grid-row: span 2;
    grid-column: 1;
    border-radius: 50%;
    padding-right: 1rem;
    
  }

  h2{
    grid-row: 1;
    grid-column: 2;
    font-size: 20px;
  }

  p{
    grid-row: 2;
    grid-column: 2;
    font-size: 20px;
  }

  button{
    grid-row: span 2;
    grid-column: 3;
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 5px;
    background-color: #ffa94d;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover{
    background-color: #ff922b;
  }
`

export const StyledPara = styled.p`
  color: ${({color}) => color}
`

export const StyledAddFriendForm = styled.form`
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  align-items: center;
  row-gap: 1rem;
  justify-content: start;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.7);
  background-color: #EEEDEB;
  margin-bottom: 1rem;


  label{
    font-weight: 500;
    font-size: 20px;
  }

  input{
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid #ffe8cc;
    transition: all 0.3s ease;
    font-size: 18px;
  }

  input:focus{
    outline: none;
    border: 1px solid #ff922b;
  }

  button {
    padding: 2rem;
    border-radius: 1rem;
    border: none;
    background-color: #ffa94d;
    grid-column: 2;
    font-size: 20px;
  }
`

export const StyledButton = styled.button`
  
  margin-left: auto;
  margin-right: 1.2rem;
  background-color: #ffa94d;
  border: none;
  padding: 2rem 4rem;
  border-radius: 1rem;
  font-size: 20px;
`

export const StyledBillDetails = styled.form`
  padding: 3rem;
  background-color: #ffe8cc;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 3rem;
  border-radius: 1rem;
  margin-top: 20%;
  align-items: center;

  h1{
    grid-column: 1 / -1;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 3rem;
  }

  label{
    font-size: 20px;
  }
  input, select{
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid #ffe8cc;
    transition: all 0.3s ease;
    font-size: 18px;
  }

  input:focus, select:focus{
    outline: none;
    border: 1px solid #ff922b;
  }

  ${StyledButton}{
    grid-column: 2;
  }

`

export const StyledNoFriendInfo = styled.p`
  font-size: 2.5rem;
  padding: 2rem;
  border-radius: 1rem;
  border: none;
  background-color: white;
`

