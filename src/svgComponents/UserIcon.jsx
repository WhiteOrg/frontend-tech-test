import React from 'react'

export default function ExitIcon({ width, height, fill }) {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={width || "18"} height={height || 18} fill={fill || "none"} viewBox="0 0 18 18">
            <path fill="#fff" fillRule="evenodd" d="M13.5 4.5C13.5 6.986 11.486 9 9 9S4.5 6.986 4.5 4.5 6.514 0 9 0s4.5 2.014 4.5 4.5zM0 15.75c0-2.992 5.996-4.5 9-4.5 3.004 0 9 1.508 9 4.5V18H0v-2.25z" clipRule="evenodd"/>
        </svg>

    )
}