import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100vh;
  padding: 0;

`

export const StyledHeader = styled.h1`
  background-color: #f4a226;
  width: 100%;
  text-align: center;
  font-family: "Monoton";
  text-transform: uppercase;
  word-spacing: 30px;
  letter-spacing: -5px;
  font-size: 8rem;
  
  font-weight: 400;
  margin: 0;
  padding-top: 22px;
  padding-bottom: 22px;
`

export const StyledBody = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: blue;
  
  
`

export const StyledBodyHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #e5771f;
  gap: 0.8rem;
  padding: 4rem 0;
  
  h3{
    margin-right: 1.6rem;
    font-size: 2.6rem;
  }

  select, input, button{
    background-color: #ffebb3;
    color: #5a3e2b;
    font-family: inherit;
    border: none;
    border-radius: 10rem;
    padding: 1.2rem 3.2rem;
    font-weight: 700;
    font-size: 1.8rem;
    cursor: pointer;
  }

  button{
    text-transform: uppercase;
    background-color: #76c7ad;
  }
  
`

export const StyledBodyCenter = styled.div`
  flex: 1;
  width: 100%;
  text-align: center;
  background-color: rgb(90, 62, 43);
  color: white;
  display: flex;
  align-items: start;
  justify-content: center;
  padding: 40px 0;

  ul{

    display: grid;
    text-align: center;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    align-items: center;
    list-style-type: none;
    width: 80%;
    align-content: start;
    justify-content: center;
    overflow: ${({totalItems}) => totalItems > 20 && 'scroll'};
    gap: 1.2rem;
  }
  


`

export const List = styled.li`
    max-width: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: start;
    padding-left: 1rem;
    border-right: 1px solid red;
    background-color: brown;
  
  input {
    height: 2rem;
    width: 2rem;
    accent-color: #e5771f;
    font-size: 3rem;
    text-decoration: ${({packingStatus}) => packingStatus && 'line-through'};
    color: ${({packingStatus}) => packingStatus && 'orange'};
  }

  span{
    flex: 1;
    text-align: left;
    font-size: 2rem;
    text-decoration: ${({packingStatus}) => packingStatus && 'line-through'};
    color: ${({packingStatus}) => packingStatus && 'orange'};
  }

  button{
    font-size: 2.5rem;
    background-color: transparent;
    border: none;
    padding-right: 1rem;
    transform: translateY(2px);
  }
`

export const StyledBodyFooter = styled.div`
  background-color: rgb(90, 62, 43);
  width: 100%;
  text-align: center;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;

  select, button{
    background-color: #ffebb3;
    color: #5a3e2b;
    font-family: inherit;
    border: none;
    border-radius: 10rem;
    padding: 1.2rem 3.2rem;
    font-weight: 700;
    font-size: 1.8rem;
    cursor: pointer;
  }

`

export const StyledFooter = styled.p`
  background-color: #76c7ad;
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  padding: 16px 0;
  font-style: italic ;
  margin: 0;
`
