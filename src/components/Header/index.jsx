import React from 'react'
// COMPONENTS
import Title from './Title'
import Countdown from './Countdown'
import Stats from './Stats'
import StartDate from './StartDate'
import Button from './Button'
// HELPERS
import { getDataFromAPI } from '../../utils'
import styled from 'styled-components'
import {componentPadding} from '../../globalStyles'

const HeaderContainer = styled.div`
    ${componentPadding};
    padding-top: 1.5em;
    padding-bottom: 1.5em;
    margin: 0 auto;
    width: 100%;
    height: auto;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
`


export default function Header() {
    // SETTING UP THE STATE VARIABLES
    const [image, setImage] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [startDate, setStartDate] = React.useState('')
    const [prizePool, setPrizePool] = React.useState(null)    
    const [playersNumber, setPlayersNumber] = React.useState(null)
    
    // CALLLING REACT SIDE-EFFECT HOOK 
    React.useEffect( () => {

        getDataFromAPI().then( data => { 
            // 
            setImage(data.backgroundImage)
            setTitle(data.title)
            setStartDate( () => new Date(data.startDate).toUTCString())
            setPrizePool(data.prizePool)
            setPlayersNumber(data.players)

        })
    }, [])

    // JSX
    return(
        <HeaderContainer image={image}>
            <Title title={title} />
            <Countdown />
            <Stats prizePool={prizePool} players={playersNumber} />
            <StartDate date={startDate} />
            <Button>Join</Button>
        </HeaderContainer>
    )

}