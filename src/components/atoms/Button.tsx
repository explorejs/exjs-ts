import React from "react";
import styled from "styled-components";

  const StyledButton = styled.button`
    background-color: cornflowerblue;
    color:white;
    padding:2rem;
  `;

export const Button = () => {
  return <StyledButton>Click Me</StyledButton>;
};
