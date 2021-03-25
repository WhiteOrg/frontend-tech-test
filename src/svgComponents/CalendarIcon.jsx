import React from 'react'

export default function CalendarIcon({ width, height, fill}) {

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={width || "20"} height={height || "20"} fill={ fill || "none"} viewBox="0 0 18 20">
            <path fill="#fff" fillRule="evenodd" d="M16 2h-1V0h-2v2H5V0H3v2H2C.89 2 .01 2.9.01 4L0 18c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM4 9v2h2V9H4zm6 0H8v2h2V9zm4 0v2h-2V9h2zM2 18h14V7H2v11z" clipRule="evenodd"/>
        </svg>

    )
}