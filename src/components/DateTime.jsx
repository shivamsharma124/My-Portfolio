import React, { useEffect, useState } from 'react'

const formatDateTime = () => {
  const now = new Date()
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const dayName = days[now.getDay()]
  const monthName = months[now.getMonth()]
  const date = now.getDate()

  let hours = now.getHours()
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const ampm = hours >= 12 ? 'pm' : 'am'
  hours = hours % 12 || 12

  return `${dayName} ${monthName} ${date} ${hours}:${minutes}${ampm}`
}

const DateTime = () => {
  const [dateTime, setDateTime] = useState(formatDateTime())

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(formatDateTime())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div >{dateTime}</div>
  )
}

export default DateTime