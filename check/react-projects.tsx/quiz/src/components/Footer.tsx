import React from 'react';
import { StyledFooter } from "../styles/Quiz.styles";

// Define the type for your props
type FooterProps = {
  children: React.ReactNode; // React.ReactNode is the correct type for children
}

const Footer= ({ children }: FooterProps) => {
  return (
    <StyledFooter>
      {children}
    </StyledFooter>
  );
}

export default Footer;
