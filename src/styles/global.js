import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Code', monospace;
  }

  textarea{
    outline: 0;
  }

  button{
    cursor: pointer;
  }
`;
