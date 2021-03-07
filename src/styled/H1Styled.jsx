import React from 'react'
import styled from 'styled-components';


const StyledH1 = styled.h1`
  color: red;
  font-weight: 300;
`;

export const H1Styled = ({children}) => <StyledH1>{children}</StyledH1>