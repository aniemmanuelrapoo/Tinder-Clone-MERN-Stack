import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';
import './styles.css'

const SwipButtonsContainer = styled.div`
    ${tw`fixed flex w-full justify-evenly`}
    bottom:10vh;
    /* box-shadow: 0px 18px 53px 8px rgba(0, 0, 0, 0.3) !important; */
`
const gf = styled.div`
    ${tw``}
`
const SwipButtons = () => {
    return (
        <SwipButtonsContainer className="swipButtons">
            <IconButton className="swipButtons__repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipButtons__left">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipButtons__star">
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipButtons__right">
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipButtons__lightning">
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </SwipButtonsContainer>
    )
}

export default SwipButtons
