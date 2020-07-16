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

  componenetDidUpdate = (prevProps, prevState) => {
    this.state.allReservations !== prevState.allReservations &&
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

  deleteReservation = (id) => {
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE'
    })
      .then(res => console.log(res))
      .then(this.removeReservation(id))
      .catch(err => console.error(err))
  }

  addReservation = res => {
    this.setState({ allReservations: [...this.state.allReservations, res]})
  }

  removeReservation = (id) => {
    let allRes = [...this.state.allReservations]
    let reservation = allRes.find(res => {
      return res.id === id
    })
    let index = allRes.indexOf(reservation)
    allRes.splice(index, 1)
    this.setState({ allReservations: allRes})
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
          deleteReservation={this.deleteReservation}
        />
      </div>
    )
  }
}

export default App;
