import { useState, useEffect} from 'react';
import btn from './images/icon-dice.svg'
import './App.css';
import axios from 'axios';

function App() {



  const [advice, setAdvice] = useState("");
  const [id, setAdviceId] = useState("");

  const changeClick = () => {
     axios.get('https://api.adviceslip.com/advice').then((response) => {
      setAdvice(response.data.slip.advice);
      setAdviceId(response.data.slip.id);
    }).catch((err=>console.log(err)))
  };
      useEffect(()=>{   
axios.get(`https://api.adviceslip.com/advice`).then((response) => {
      setAdvice(response.data.slip.advice);
      setAdviceId(response.data.slip.id);
    });
  })
  return (
    <>
    <div className="card">
      <h4>Advice #{id}</h4>
      <blockquote>&quot;{advice}&quot;</blockquote>
      <div className='divider'></div>
    </div>
          <button onClick={changeClick}><img src={btn}/></button>
          </>
  );
}

export default App;
