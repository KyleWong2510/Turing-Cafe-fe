import React from 'react'
import './Reservation.css'

function Reservation({ id, name, date, time, number }) {
  return (
    <div className='res-card'>
      <h2>Guest: {name}</h2>
      <p>Reservation: {time} on {date}</p>
      <p>Number of Guests: {number}</p>
      <p>Reservation ID: {id}</p>
    </div>
  )
}

export default Reservation