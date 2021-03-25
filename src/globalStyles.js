import { css } from 'styled-components'
import { device } from './device'



export const fontAccent = css`
    color: #0026ff;
`

export const componentPadding = css`
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;

    @media ${device.mobile} {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
    @media ${device.tablet} {
        padding-left: 5rem;
        padding-right: 5rem;
    }

    @media ${device.laptopLarge} {
        font-size: 1.2rem;
    }

    @media ${device.desktop} {
        font-size: 2rem;
    }

`

