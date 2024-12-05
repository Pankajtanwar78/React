import styled from "styled-components";




export const Icon1 = styled.div`
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
  transition: 0.4s;
  transform: translate(0, 11px) rotate(-45deg);
`

export const Icon2 = styled(Icon1)`
  opacity: 0;
`

export const Icon3 = styled(Icon1)`
  transform: translate(0, -11px) rotate(45deg);
`

export const MenuBarContainer = styled.div`
display: inline-block;
background-color: lightblue;
cursor: pointer;
margin-bottom: 200px;XD
Icon1 {
      opacity: 0;
    }
  &:hover{
    background-color: aliceblue;
    
  }
`