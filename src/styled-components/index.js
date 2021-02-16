import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: "Proxima Nova",-apple-system,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif,sans-serif;
        font-size: 16px;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #f5f5f5;
    }
  
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
  
`
export const Parent = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection || "row"};
`

export const Header = styled.header`
    position: fixed;
    width: 100%;
    display: flex;
    height: 65px;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%);
`

export const HeaderContent = styled.div`

`

export const Main = styled.main`
    width: 100px;
    height: 100px;
    margin: auto;
`

export const Card = styled.div`
    background-color: #fff;
    border-radius: 6px;
    padding: 32px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 12%);
`