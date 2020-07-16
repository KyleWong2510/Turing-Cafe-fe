import React, { Component } from 'react';
import './App.css';
import ReservationsContainer from '../ReservationsContainer/ReservationsContainer'
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super() 
    this.state={
      allReservations: []
    }
  }

  componentDidMount() {
    this.getReservations()
  }

  getReservations = () => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(res => res.json())
      .then(data => this.setState({ allReservations: data }))
      .catch(err => console.error(err)) 
  } 

  postReservation = (reservation) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservation)
    })
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  addReservation = res => {
    this.setState({ allReservations: [...this.state.allReservations, res]})
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form 
          postReservation={this.postReservation}
          addReservation={this.addReservation}
        />
        <ReservationsContainer 
          allReservations={this.state.allReservations}
        />
      </div>
    )
  }
}

export default App;
