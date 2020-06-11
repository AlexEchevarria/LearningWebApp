import React from 'react'
import { HeaderWrapper, StyledMenu } from "./header.styled"
import { StyledBurger } from "./buttonSidebar.styled"

const Header = () =>{
    return (
        <HeaderWrapper>
            <StyledMenu>
                <StyledBurger>
                    <div/>
                    <div/>
                    <div/>
                </StyledBurger>                
            </StyledMenu>
        </HeaderWrapper>
    )
}

export default Header