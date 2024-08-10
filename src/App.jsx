import { useState } from 'react'
import './App.css'
import { Button, TextField } from '@mui/material';



function App() {

  const [price,setPrice]=useState(0)
  const [discount,setDiscount]=useState(0);

  const [discountAmt,setDiscountAmt]=useState(0)

function calculate(e){
  const final=(price*discount/100)
  setDiscountAmt(final)
}

function reset(e){
  setPrice(0)
  setDiscount(0)
  setDiscountAmt(0)

}


  return (
    <>
    <div className="mainDiv">

<div className="headers">
  <h1>Discount Calculator</h1>
  <p>Calculate your discount amount with us</p>
</div>

<div className="display">
  <h2>₹{discountAmt}</h2>
  <p>The amount you saved on this purchase</p>
</div>

<div className="input">
<TextField id="outlined-basic" label="Price" variant="outlined" value={price || ''} onChange={(e)=>setPrice(e.target.value)} />
<TextField id="outlined-basic" label="Discount" variant="outlined" value={discount || ''} onChange={(e)=>setDiscount(e.target.value)} />

</div>

<div className="buttons">
<Button variant="contained" onClick={e=>calculate(e)}>Calculate</Button>
<Button variant="contained" onClick={e=>reset(e)}>Reset</Button>
</div>


    </div>
    </>
  )
}

export default App
