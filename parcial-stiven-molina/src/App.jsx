import { useState } from 'react'
import './App.css'
import { Card } from './components/Card';
import { Form } from './components/Form';

function App() {
  const[data, setData] = useState({})
  const onSubmit = (data) => {
    setData(data)
  };
  console.log(data)
  return (
    <div className="App">
      <div className='divHola'>
        <Form onSubmit={onSubmit} />
        {(data.name != undefined) && 
        <Card info={data}/>
        }
      </div>
    </div>
  )
}

export default App
