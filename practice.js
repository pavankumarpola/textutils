import React,{ useState } from 'react'


function Practice() {
    const [Input,setInput] = useState('');
    const [textLength,setTextLength] = useState(0);
    const [errorMessage,setErrorMessage] = useState ('');
    const handle = (e) => {
        const text = e.target.value;
        setInput(text);
        setTextLength(text.length)
        if (text.trim() === ''){
            setErrorMessage('Text cannot be empty');
        } else {
            setErrorMessage('');
        }
    };
    const Uppercase = () =>{
        setInput(Input.toUpperCase());
    }
    const Lowercase = () =>{
        setInput(Input.toLowerCase());
    }
    const clearText = () => {
        setInput('');
        setTextLength(0);
        setErrorMessage('');
    }
    const Reverse = () => {
        setInput(Input.split('').reverse().join(''));
    }

  return (
    <div>
        <div>
    <h1>Text Utils</h1>
    <textarea placeholder='Enter text here' rows={5} cols={100} value={Input} onChange={handle}></textarea>
    </div>
    <div style={{color:'red'}}>
        {errorMessage}
        <h1>Text length{textLength}</h1>
        
    </div>
    <button onClick={Uppercase}>To Uppercase</button>
    <button onClick={Lowercase}>To Lowercase</button>
    <button onClick={clearText}>To clearText</button>
    <button onClick={Reverse}>To Reverse</button>
    
    </div>
    
  )
}

export default Practice
