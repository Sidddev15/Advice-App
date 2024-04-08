import {useEffect, useState} from 'react';
import './App.css';

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
   const res = await fetch ('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect( function() {
    getAdvice();
  }, []);

  return <div className='container'>
    <h1 className='Quotes'>{advice}</h1>
    <button className='getadvice-btn' onClick = {getAdvice}>Get Advice</button>
    <Message count = {count} />
  </div>;
}

function Message (props) {
  return (
    <p className="message">You have read <b>{props.count}</b> pieces of advice.</p>
  )
}

