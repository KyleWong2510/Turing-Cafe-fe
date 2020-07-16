import React from 'react'
import './Form.css'

class Form extends React.Component{
  constructor() {
    super()
    this.state={
      name: '',
      date: '',
      time: '',
      number: 1
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const reservation = {
      id: Date.now(),
      ...this.state
    }
    this.props.postReservation(reservation)
    this.props.addReservation(reservation)
  }

  render() {
    return (
      <section className='reservation form'>
      <h1 className='form-header'>Make a Reservation</h1>
      <form className='form' onSubmit={this.handleSubmit}>
        <input 
          type='text'
          name='name'
          placeholder='Guest Name'
          value={this.state.name}
          onChange={e => this.handleChange(e)}
        />
        <input
          type='text'
          name='date'
          placeholder='Date for reservation (m/d)'
          value={this.state.date}
          onChange={e => this.handleChange(e)}
        />
        <input 
          type='text'
          name='time'
          placeholder='Time of reservation (h:mm)'
          value={this.state.time}
          onChange={e => this.handleChange(e)}
        />
        <input 
          type='number'
          name='number'
          placeholder={1}
          value={this.state.number}
          onChange={e => this.handleChange(e)}
        />
        <input 
          data-testid='submit-btn'
          type='submit'
          value='Reserve Table'
        />
      </form>
      </section>
    )
  }
}

export default Form