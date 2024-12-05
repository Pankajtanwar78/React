import styled from "styled-components";

export const StyledPrimaryNavbar = styled.nav`
  padding: 16px 32px;
  background-color: ${({theme}) => theme.primary.bg};

  & > a {
    margin-right: 16px;
  }

  & > a.active {
    font-weight: bold;
    text-decoration: none;
  }
`

export const StyledSecondaryNavbar = styled(StyledPrimaryNavbar)`
  
  background-color: ${({theme}) => theme.secondary.bg};
`