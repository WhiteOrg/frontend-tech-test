import React from 'react'

export default function ExitIcon({ width, height, fill }) {


    const handleMouseEnter = event => {
        
    }

    return(
        <svg onMouseEnter={handleMouseEnter} xmlns="http://www.w3.org/2000/svg" width={width || "34"} height={height || "34"} fill={fill || "none"} viewBox="0 0 34 34">
            <path fill="#000" fillRule="evenodd" d="M17 34c9.389 0 17-7.611 17-17S26.389 0 17 0 0 7.611 0 17s7.611 17 17 17z" clipRule="evenodd"/>
            <path fill="#fff" fillRule="evenodd" d="M17 34c9.389 0 17-7.611 17-17S26.389 0 17 0 0 7.611 0 17s7.611 17 17 17zm.128-14.407l7.089 7.09 1.85-1.85-7.09-7.089 7.09-7.09-1.85-1.848-7.09 7.089-7.088-7.09-1.85 1.85 7.09 7.09-7.09 7.088 1.85 1.85 7.089-7.09z" clipRule="evenodd"/>
        </svg>
    )
}