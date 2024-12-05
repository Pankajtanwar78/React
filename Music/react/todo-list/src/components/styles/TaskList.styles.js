import styled from "styled-components";

const TaskList = styled.ul`
  text-align: left;
  list-style-position: inside;
  border: ${ ({length}) => length && '1px solid black'};
  padding: 10px;
  line-height: 3rem;
  background-color: lightblue;
  
`

export const TodoTask = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;

  & > h2 {
    font-style: italic;
  }
`

export const Button = styled.button`
  color: ${({theme}) => theme.button.color};
  background-color: ${({theme}) => theme.button.bgcolor};
  border: 1px solid black;
  padding: ${({theme}) => theme.button.padding};
  margin-left: 1rem;

  &:disabled {
    background-color: lightgray;
  }

`


export const Header = styled.div`
  
  background-color: #f44336;
  padding: 30px 40px;
  color: white;
  text-align: center;



  h2{
    font-style: italic;
  }

  input {
    margin: 0;
    border: none;
    border-radius: 0;
    width: 75%;
    padding: 10px;
    font-size: 16px;
  }

  span{
    padding: 10px;
    width: 25%;
    background: #d9d9d9;
    color: #555;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 0;
  }

  span:hover{
    background-color: #bbb;
  }
`

export {TaskList}