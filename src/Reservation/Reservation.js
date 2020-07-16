import React from 'react'
import './Reservation.css'

function Reservation({ id, name, date, time, number, deleteReservation }) {
  return (
    <div className='res-card'>
      <h2>{name}</h2>
      <p>{time} on {date}</p>
      <p>Number of Guests: {number}</p>
      <p>Reservation ID: {id}</p>
      <button 
        className='cancel-btn'
        onClick={() => deleteReservation(id)}
      >Cancel</button>
    </div>
  )
}

export default Reservation