import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  const [principle,setPrinciple]=useState(0);
  const[interest,setInterest]=useState(0);
  const[Rate,setRate]=useState(0);
  const[Year,setYear]=useState(0);




  const handlesubmit = (e) =>{
    e.preventDefault();
  console.log("==principle Amount")
  console.log(principle);
  console.log("==rate of interest");
  console.log(Rate);
  console.log("==Total year");
  console.log(Year);
  let result = principle*Year*Rate/100;
  console.log(result);
  setInterest(result)
  

  }
  function clearValues(){
    setPrinciple(0);
    setInterest(0);
    setYear(0)
  }

  return (
    <div className='d-flex justify-content-center align-items-center w-100 mt-5'
      style={{ height: "70vh" }} >
      <div style={{ width: "500px" }} className='bg-light p-5 rounded'>
        <h1>Simple Interest</h1>
        <p>Calculate your simple inerest easily</p>
        <div style={{ height: "150px" }} className='flex-column mt-5 mt-5 bg-warning d-flex justify-content-center align-items-center w-100 rounded'>
          <h1>{'\u20B9'}{interest}</h1>
          <p>Total Simple Interest</p>
        </div>
        <form action="" className='mt-5' onSubmit={(e)=>handlesubmit(e)}>
          <div className='mb-3'>
            <TextField id="outlined-basic" label="principle Amount" variant="outlined" className='w-100' value={principle} 
            onChange={(e)=>setPrinciple(e.target.value)}/>

          </div>
          <div className=''>
            <TextField id="outlined-basic" label="Rate Of Interest (pa)%" variant="outlined" className='w-100'value={Rate} onChange={(e)=>setRate(e.target.value)} />

          </div>
          <div className='mt-3'>
            <TextField id="outlined-basic" label="Year" variant="outlined" className='w-100' value={Year}  onChange={(e)=>setYear(e.target.value)} />

          </div>
          <div className='mt-5'>
            <Stack direction="row" spacing={2}>
            <Button type='submit' style={{height:"50px",width:"200px"}} variant="contained" className='bg-success'>Calculate</Button>
            <Button style={{height:"50px",width:"200px",color:"blue"}} variant="contained" className='bg-light' onClick={clearValues}>Reset</Button>
            </Stack>



          </div>
        </form>



      </div>


    </div>

  );
}

export default App;
