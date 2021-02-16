import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: "Proxima Nova",-apple-system,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif,sans-serif;
        font-size: 16px;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
  
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
  
`

export const Container = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    background-color: yellow;
`

export const CenteredDiv = styled.div`
    text-align: center;
    background-color: yellow;
`
export const Header = styled.header`
    width: 100%
`