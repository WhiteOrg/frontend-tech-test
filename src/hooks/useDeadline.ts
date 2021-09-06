import React from 'react'
import useInterval from './useInterval'

interface DeadlineTime {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const useDeadline = (time: number): DeadlineTime => {
  const [deadline, setDeadline] = React.useState(time)
  const days = Math.floor(deadline / (60 * 60 * 24))
  const hours = Math.floor((deadline % (60 * 60 * 24)) / (60 * 60))
  const minutes = Math.floor((deadline % (60 * 60)) / 60)
  const seconds = Math.floor(deadline % 60)

  useInterval(
    () => {
      setDeadline(deadline - 60)
    },
    deadline === 0 ? null : 60000
  )

  return { days, hours, minutes, seconds }
}

export default useDeadline
