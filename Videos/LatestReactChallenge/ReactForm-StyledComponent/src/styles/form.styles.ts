import styled from "styled-components"

export const StyledForm = styled.form`
  margin-top: 3rem;
  width: 60vw;
  display: flex;
  flex-direction: column;
  background-color: #0D7C66;
  
  padding: 2rem;
  margin-bottom: 3rem;
`

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  label{
    margin-bottom: 4px;
    padding-left: 3px;
    font-size: 14px;
  }

  input {
    height: 3rem;
    font-size: 14px;
    background-color: #41B3A2;
    border: 1px solid #41B3A2;
    border-radius: 5px;
    padding: 0 1rem;
  }

  input:focus{
    outline: none;
    background-color: #BDE8CA;
    
  }
`

export const StyledPhoneSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 3rem;

  input {
    height: 3rem;
    font-size: 14px;
    background-color: #41B3A2;
    border: 1px solid #41B3A2;
    border-radius: 5px;
    padding: 0 1rem;
    flex: 1;
    margin-right: 5px;
  }

  input:focus{
    outline: none;
    background-color: #BDE8CA;
  }
`

export const StyledButton = styled.button`
  height: 3rem;
  background-color: #D7C3F1;
  border: 1px solid #D7C3F1;
  border-radius: 5px;
  padding: 0 1rem;
  width: fit-content;
  align-self: center;

  &:hover{
    background-color: #E7C3F1;
  }

  &:disabled{
    opacity: 0.2;
    color: grey;
  }
`

export const ErrorPara = styled.p`
  color: brown;
  font-size: 14px;
  margin-top: 4px;
  padding-left: 3px;
`