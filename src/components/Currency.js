import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';

const Currency = () => {
  const {currency, dispatch} = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  
  // Define currencies in an array of objects for scalability and easier management.
  const currencies = [
    {symbol: '$', name: 'Dollar'},
    {symbol: '£', name: 'Pound'},
    {symbol: '€', name: 'Euro'},
    {symbol: '₹', name: 'Rupee'}
  ];
  
  const setCurrencyHandler = (newCurrency) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: newCurrency,
    });
    setIsOpen(false);
  };
  
  // Find the current currency's full label.
  const currentCurrency = currencies.find(c => c.symbol === currency)?.name || '';
  
  return (
    <div id="currency-menu" className="dropdown" style={{cursor: 'pointer'}}>
      <button
        id="currency-menu-button"
        className="btn dropdown-toggle"
        type="button"
        style={{backgroundColor: '#93e399', color: '#fff'}}
        onClick={() => setIsOpen(!isOpen)}
      >
        Currency ({currency} {currentCurrency})
      </button>
      <ul className={`custom-menu dropdown-menu ${isOpen ? 'show' : ''}`}>
        {currencies.map(({symbol, name}) => (
          <li key={symbol}>
            <button
              className="dropdown-item"
              type="button"
              onClick={() => setCurrencyHandler(symbol)}
            >
              {symbol} {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Currency;
