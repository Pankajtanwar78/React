import styled from "styled-components";

export const StyledContainer = styled.footer`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  align-items: center;
  margin: 0 auto;
  gap: 48px;
`

export const StyledHeader = styled.header`


  & > h1{
    /* Non-accessible color */
    color: #edc84b;
    /* color: #af8602; */

    text-transform: uppercase;
    font-size: 4.8rem;
    font-weight: 300;
    letter-spacing: 3px;
    position: relative;
    width: 100%;
  }

`

export const StyledMenu = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  h2{
    border-top: 3px solid black;
    border-bottom: 3px solid black;
    font-size: 18px;
    margin-bottom: 20px;
    padding: 6px 2px;
    text-transform: uppercase;
    font-weight: 500;
  }

  p{
    padding: 10px;
    font-size: 2rem;
    text-align: center;
    line-height: 1.6;
    width: 80%;
  }

  ul{
    display: grid;
    grid-template-columns: 1fr 1fr;
    list-style-type: none;
    align-items: center;
    gap: 4.8rem;
  }

`

export const List = styled.li`
  display: flex;
  align-items: right;

  img{
    height: 150px;
  }

  div{
    display: flex;
    flex-direction: column;
    height: 150px;
    
  }

  h3{
    text-align: left;
    padding: 10px;
  }

  p{
    padding: 10px;
    font-size: 1.5rem;
    text-align: left;
    line-height: 1.6;
    width: 100%;
    margin-bottom: auto;
  }

  span{
    padding: 0 10px;
    font-size: 1.5rem;
    text-align: left;
    line-height: 1.6;
    width: 100%;
  }
`

export const StyledFooter = styled.footer`
`
