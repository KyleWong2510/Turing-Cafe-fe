import React from 'react'
import './Reservation.css'

function Reservation({ id, name, date, time, number }) {
  return (
    <div className='res-card'>
      <h2>{name}</h2>
      <p>{time} on {date}</p>
      <p>Number of Guests: {number}</p>
      <p>Reservation ID: {id}</p>
      <button className='cancel-btn'>Cancel</button>
    </div>
  )
}

export default Reservation