import React, { useState } from "react"
import './App.css';

function App() {

  const [bill, setBill] = useState<string>('')
  const [people, setPeople] = useState<string>('')
  const [tip, setTip] = useState<string>('')

  // calculate how much each person pays
  const calculateSplit = (): string => {
    const numericBill = parseFloat(bill);
    const numericPeople = parseInt(people);
    const numericTip = parseFloat(tip)

    // if bill or people is invalid, show 0
    if (isNaN(numericBill) || numericBill <= 0) return '0.00';
    if (isNaN(numericPeople) || numericPeople <= 0) return '0.00';

    //calculate amount per person to 2 dp
    const tipAmount = numericBill * (numericTip / 100);
    const totalWithTip = tipAmount + numericBill;
    const splitAmonunt = totalWithTip / numericPeople;
    return splitAmonunt.toFixed(2);
  }

  return (
    <div className='app-container'>
      <div className='card'>
        <h1>Split The Bill</h1>
        <h1>💸</h1>


        {/* input for total bill */}
        <div className='input-group'>
          <label htmlFor='bill'>Total Bill (£):</label>
          <input
            id='bill'
            type='number'
            value={bill}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBill(e.target.value)}
            min='0'
            placeholder="Enter total bill"
          />
        </div>

        {/* input for number of people */}
        <div className='input-group'>
          <label htmlFor="people">Number of People:</label>
          <input
            id='people'
            type='number'
            value={people}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPeople(e.target.value)}
            min='1'
            placeholder='Enter number of people'
          />
        </div>

        {/* input for tip */}
        <div className='input-group'>
          <label htmlFor="tip">Tip Amount (%):</label>
          <select
            id='tip'
            value={tip}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTip(e.target.value)}
          >
            <option value='0'>0%</option>
            <option value='5'>5%</option>
            <option value='10'>10%</option>
            <option value='15'>15%</option>
            <option value='20'>20%</option>
          </select>
        </div>

        {/* show calculated amount */}
        <div className='result'>
          Each Person Pays: £{calculateSplit()}
        </div>
      </div>
    </div>
  )
}

export default App
