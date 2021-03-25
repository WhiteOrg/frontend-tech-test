import React from 'react'

export default function FacebookIcon({ width, height, fill}) {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={ width || "47"} height={ height || "46"} fill={ fill || "none"} viewBox="0 0 47 46">
            <path fill="#fff" fillRule="evenodd" d="M46.28 23.14C46.28 10.36 35.919 0 23.14 0S0 10.361 0 23.14C0 34.689 8.46 44.262 19.525 46V29.83h-5.877v-6.69h5.877v-5.1c0-5.798 3.455-9.003 8.74-9.003 2.532 0 5.18.452 5.18.452v5.695h-2.918c-2.874 0-3.772 1.783-3.772 3.615v4.34h6.417l-1.025 6.691h-5.392V46c11.064-1.735 19.524-11.308 19.524-22.86z" clipRule="evenodd"/>
        </svg>

    )
}