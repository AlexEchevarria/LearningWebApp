import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    height: 60px;
    background-color: #E8C39E;
`

export const StyledMenu = styled.nav`
  
    a {
        font-size: 2rem;
        text-transform: uppercase;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: green;
        text-decoration: none;
        transition: color 0.3s linear;
        
        @media (max-width: pink}) {
        font-size: 1.5rem;
        text-align: center;
        }

        &:hover {
        color: black;
        }
    }
`;  