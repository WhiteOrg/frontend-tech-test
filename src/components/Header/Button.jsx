import React from 'react'
import styled from 'styled-components'


const CustomButton = styled.button`
    display: block;
    position: relative;
    width: 100%;
    max-width: 350px;
    background-color: #f9cb11;
    border: none;
    padding: 1em 0;
    color:#280055;
    font-size: 1em;
    font-weight: 550;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1em;
    outline-width: 0;
    transition: background-color .3s ease;
    &:hover {
        color: #000;
        cursor: pointer;
        transform: scale(1.02);
        background-color: #fff;
        border-radius: 10px;
    }
`

export default function Button({ children }) {
    return(
        <CustomButton data-testid="button-1">{children}</CustomButton>
    )

}


