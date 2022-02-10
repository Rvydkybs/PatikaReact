import './App.css';
import CurrencyRow from './CurrencyRow';
import { useEffect,useState } from 'react';
 
const BASE_URL="http://api.exchangeratesapi.io/v1/latest?access_key=5b586507c3ef74052002a9833672a726"
//5b586507c3ef74052002a9833672a726 api key
function App() {

  const[currencyOptions,setCurrencyOptions]=useState([]);
  const[fromCurrency,setFromCurrency]=useState();
  const[toCurrency,setToCurrency]=useState();
  const[exchangeRate,setExchangeRate]=useState();
  const[amount,setAmount]=useState(1);
  const[amountInFromCurrency,setAmountInFromCurrency]=useState(true);

  let toAmount,fromAmount;
  if(amountInFromCurrency){//if this is true
    fromAmount=amount;
    toAmount=amount*exchangeRate;

  }else{
    toAmount=amount;
    fromAmount=amount/exchangeRate;
  }

  useEffect(()=>{//will call just once
    fetch(BASE_URL)
    .then(res=>res.json())
    .then(data=>{
      const firstCurrency=Object.keys(data.rates)[0];
      setCurrencyOptions([data.base, ...Object.keys(data.rates)])//obje olarak gelen verinin sadece keylerini almak
      setFromCurrency(data.base)
      setToCurrency(firstCurrency)
      setExchangeRate(data.rates[firstCurrency])
    })
  },[]);

  useEffect(()=>{//to changing option values
    if(fromCurrency!=null && toCurrency!=null){
    fetch(`${BASE_URL}&base=${fromCurrency}&symbols=${toCurrency}`)//to change the symbols
    .then(res=>res.json())
    .then(data=>setExchangeRate(data.rates[toCurrency]))
    }//go to the new api and get the new rate
    },[fromCurrency,toCurrency])//if one of these will be change,do this...
 
  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);//which box is actually changing
  }
  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);//which box is actually changing
  }
  return (
   <>
   <h1>Convert Money</h1>
   <CurrencyRow 
   currencyOptions={currencyOptions}
   selectedCurrency={fromCurrency}
   onChangeCurrency={
    e=>setFromCurrency(e.target.value)//inline function
  }
  onChangeAmount={handleFromAmountChange}
   amount={fromAmount}
   />
   <div className='equals'>=</div>
   <CurrencyRow 
   currencyOptions={currencyOptions}
   selecedtCurrency={toCurrency}
   onChangeCurrency={
     e=>setToCurrency(e.target.value)//inline function
   }
   onChangeAmount={handleToAmountChange}
   amount={toAmount}
   />
   </>
  );
}

export default App;
