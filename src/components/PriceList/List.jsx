import React from 'react'
import { getDataFromAPI } from '../../utils'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    padding: 5px;
    margin-top: 1em;
    border-bottom: 2px solid #eee;
    padding-bottom: 1em;
    font-weight: bold;
`
const UnorderedList = styled.ul`
    width: 100%;
    height: 300px;
    overflow-y: scroll;
    position: relative;
    ::before {
        width: 100%;
        height: 30px;
    }
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #f9cb11;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
        background-color: #eee;
    }
`

const ListItem = styled.li`
    max-height: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;

`
const Index = styled.span`
    display: block;
    width: 50px;
`
const Title = styled.span`
    display: block;
`
const Prize = styled.span`
    display: block;
    flex: 1;
    text-align: right;
    margin-right: 1.5rem;
`

//JSX
export default function List({ refreshList, setRefreshList }) {

    const [ priceItems, setPriceItems ] = React.useState([])
    const [ isLoading, setIsLoading ] = React.useState(true)

    function getList() {
        getDataFromAPI().then( data => {
            setPriceItems(data.prizeList)
            // SETTING UP TIMEOUT JUST TO PREVENT FROM FAST BLINKING LOADER ON REFRESH
            setTimeout(() => {
                setIsLoading(false)
            }, 300)
        })
    }
    // WHEN COMPONENT DID MOUNT -- RUNS ONLY ONCE AT START
    React.useEffect( () => {
        getList()
    }, [])

    // UPDATES EACH TIME THE DEPENDENCY ARRAY WILL CHANGE AND ALSO ON COMPONENT DID MOUNT
    React.useEffect( () => {
        
        if (refreshList === true) {
            setIsLoading(true)
            getList()
            setRefreshList(!refreshList)
        }
    }, [refreshList, setRefreshList])

    return(
        <Container>
            <UnorderedList>
                {
                    isLoading ? <div className="prizeLoader">Loading...</div> :
                    priceItems.map( (item, index) => (
                        <ListItem key={index}>
                            <Index>{index + 1}</Index>
                            <Title>{item.title}</Title>
                            <Prize>{item.total}</Prize>
                        </ListItem>
                    ))
                }
            </UnorderedList>
        </Container>
    )
}