import { createGlobalStyle } from 'styled-components';
 
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Sora', Helvetica, Sans-Serif;
  }

  body {
    background-color:${({theme}) => theme.colors.backgroundColor};
    font-size: 16px;
    color:${({theme}) => theme.colors.gray[900]};
  }

  button {
    cursor: pointer;
  }
`;
 
