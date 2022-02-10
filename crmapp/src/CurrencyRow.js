import React from 'react'

export default function CurrencyRow(props) {
    const{
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
        
    }=props;
  return (
    <div>
        <input type="number" className='input' value={amount} onChange={onChangeAmount}/>
        <select value={selectedCurrency} onChange={onChangeCurrency}> 
             {currencyOptions.map((option,index)=>(
                  <option key={index} value={option}>{option}</option>//Warning: Each child in a list should have a unique "key" prop
             ))}
           
        </select>
    </div>
  )
}
