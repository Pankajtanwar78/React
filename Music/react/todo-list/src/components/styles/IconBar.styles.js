import styled from "styled-components";

export const IconBoxHorizontal = styled.div`
  display: flex;
  background-color: #555;

  a{
    flex: 1;
    color: white;
    font-size: 36px;
    padding: 12px 0;
    transition: all 0.3s ease;
  }

  a:hover{
    background-color: #000;
  }

  a.active{
    background-color: #04AA6D;
  }
`

export const IconBoxVertical = styled.div`
  display: flex;
  width: 100px;
  flex-direction: column;
  background-color: #555;
  margin-top: 20px;
  height: 600px;
  align-content: center;
  a{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 36px;
    transition: all 0.3s ease;
  }

  a:hover{
    background-color: #000;
  }

  a.active{
    background-color: #04AA6D;
  }
`