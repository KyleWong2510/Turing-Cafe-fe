import React from 'react'
import Reservation from '../Reservation/Reservation'
import './ReservationsContainer.css'

function ReservationsContainer({ allReservations }) {
  const reservations = allReservations.map(res => {
    return (
      <Reservation 
        id={res.id}
        name={res.name}
        date={res.date}
        time={res.time}
        number={res.number}
      />
    )
  })

  return (
    <section className='reservations-container'>
      {reservations}
    </section>
  )
}

export default ReservationsContainer