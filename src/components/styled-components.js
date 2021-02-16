import styled from 'styled-components'

export const FlexContainer = styled.div`
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