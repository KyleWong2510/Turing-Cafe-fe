import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Form from './Form'

describe('FORM', () => {

  it('Should display inputs and a button', () => {
    const { getByPlaceholderText, getByText } = render(<Form />)

    const name = getByPlaceholderText('Guest Name')
    const date = getByPlaceholderText('Date for reservation (m/d)')
    const time = getByPlaceholderText('Time of reservation (h:mm)')
    const number = getByPlaceholderText('1')
    const btn = getByText('Make a Reservation')

    expect(name).toBeInTheDocument()
    expect(date).toBeInTheDocument()
    expect(time).toBeInTheDocument()
    expect(number).toBeInTheDocument()
    expect(btn).toBeInTheDocument()
  })

  it('Should change the value of the input when entering information', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(<Form />)

    const name = getByPlaceholderText('Guest Name')
    const date = getByPlaceholderText('Date for reservation (m/d)')
    const time = getByPlaceholderText('Time of reservation (h:mm)')
    const number = getByPlaceholderText('1')

    fireEvent.change(name, {target: { value: 'Jimbo' }})
    fireEvent.change(date, {target: { value: '8/4' }})
    fireEvent.change(time, {target: { value: '6:00' }})
    fireEvent.change(number, {target: { value: 5 }})

    const newName = getByDisplayValue('Jimbo')
    const newDate = getByDisplayValue('8/4')
    const newTime = getByDisplayValue('6:00')
    const newNumber = getByDisplayValue('5')

    expect(newName).toBeInTheDocument()
    expect(newDate).toBeInTheDocument()
    expect(newTime).toBeInTheDocument()
    expect(newNumber).toBeInTheDocument()
  })
})