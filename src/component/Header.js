import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import logo from '../assert/pngfind.com-tinder-logo-png-131073.png'
import ForumIcon from '@mui/icons-material/Forum';

const HeaderContainer = styled.div`
    ${tw`flex items-center justify-between z-50 border-b border-gray-100`}
`
const Image = styled.img`
    ${tw`object-contain h-10`}
`

const Header = () => {
    return (
        <HeaderContainer>
            <IconButton>
                <PersonIcon fontSize="large" className="p-1" />
            </IconButton>
            <Image src={logo} />
            <IconButton>
                <ForumIcon fontSize="large" className="p-1" />
            </IconButton>
        </HeaderContainer>
    )
}

export default Header
