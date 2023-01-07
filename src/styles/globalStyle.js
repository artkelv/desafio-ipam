import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
   body{
    padding: 0;
    margin: 0;

    background-color: #20252D;
   
    font-family: 'Inria Serif', serif;
    font-family: 'Roboto', sans-serif;
   } 
`;
export const BoxMain = styled.div`
   display: flex;
   @media screen and (min-width: 320px) and (max-width: 480px){
      flex-direction: column;
   }
`