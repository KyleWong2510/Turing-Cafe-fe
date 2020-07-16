import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom'

import App from './App';

import { render, fireEvent } from '@testing-library/react'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Should display the reservation on the screen once submitted', () => {
  const { getByText, getByPlaceholderText, getByTestId } = render(<App/>)

  const name = getByPlaceholderText('Guest Name')
  const date = getByPlaceholderText('Date for reservation (m/d)')
  const time = getByPlaceholderText('Time of reservation (h:mm)')
  const number = getByPlaceholderText('1')
  const btn = getByTestId('submit-btn')

  fireEvent.change(name, {target: { value: 'Jimbo' }})
  fireEvent.change(date, {target: { value: '8/4' }})
  fireEvent.change(time, {target: { value: '6:00' }})
  fireEvent.change(number, {target: { value: 5 }})
  fireEvent.click(btn)

  const newName = getByText('Jimbo')
  const newDate = getByText('8/4', { exact: false })
  const newTime = getByText('6:00', { exact: false })
  const newNumber = getByText('Number of Guests: 5')

  expect(newName).toBeInTheDocument()
  expect(newDate).toBeInTheDocument()
  expect(newTime).toBeInTheDocument()
  expect(newNumber).toBeInTheDocument()
})