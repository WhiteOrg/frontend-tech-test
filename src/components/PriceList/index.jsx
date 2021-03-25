import React from 'react'
import RefreshIcon from '../../svgComponents/RefreshIcon'
import styled from 'styled-components'
import List from './List'

import { fontAccent ,componentPadding } from '../../globalStyles'

const Container = styled.div`
    ${componentPadding}
    width: 100%;
    height: auto;
    margin: 2em 0;
`
const Header = styled.header`
    ${fontAccent}
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1em;
    border-bottom: 2px solid #eee;
`

const IconWrapper = styled.div`
    cursor: pointer;
`

const HeaderTypo = styled.h3`
    font-size: 2em;
`



export default function PriceList() {

    // STATE VARIABLES
    const [refreshList, setRefreshList] = React.useState(false)
    
    // JSX
    return(
        <Container>
            <Header>
                <HeaderTypo>Prize List</HeaderTypo>
                <IconWrapper onClick={ () => setRefreshList(!refreshList)}>
                    <RefreshIcon />
                </IconWrapper>
            </Header>
            <List refreshList={refreshList} setRefreshList={setRefreshList} />
        </Container>
    )
}