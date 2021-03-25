import React from 'react'


export default function TwitterIcon({ width, height, fill }) {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={width || "46"} height={ height || "46"} fill={fill || "none"} viewBox="0 0 46 46">
            <path fill="#fff" fillRule="evenodd" d="M23 0C10.299 0 0 10.3 0 23c0 12.704 10.298 23 23 23 12.704 0 23-10.296 23-23C46 10.3 35.703 0 23 0zm11.53 19.146c.012.25.017.499.017.752 0 7.672-5.735 16.519-16.223 16.519-3.22 0-6.218-.961-8.74-2.608.446.053.899.08 1.36.08 2.671 0 5.13-.928 7.08-2.484-2.494-.048-4.6-1.728-5.325-4.034.347.07.705.104 1.072.104.52 0 1.024-.07 1.503-.203-2.61-.533-4.575-2.882-4.575-5.692v-.075c.769.435 1.648.696 2.584.727-1.531-1.043-2.537-2.818-2.537-4.833 0-1.064.28-2.063.771-2.92 2.813 3.513 7.015 5.825 11.754 6.066-.097-.424-.148-.868-.148-1.323 0-3.205 2.553-5.805 5.702-5.805 1.64 0 3.122.705 4.162 1.832 1.299-.259 2.52-.743 3.62-1.409-.426 1.357-1.33 2.495-2.508 3.212 1.155-.14 2.254-.452 3.276-.914-.763 1.167-1.73 2.19-2.845 3.008z" clipRule="evenodd"/>
        </svg>

    )
}