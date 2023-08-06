import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
let f;


let count=0;
function GH()
{
  
let [list,set]=useState();
let [r,set1] = useState([]);

let Ji =()=>
{
  if(document.getElementById('lo').value!="")
  {
    document.getElementById('lo').value="";
    set(f);
    set1(()=>{
      return ([...r,f]);
    });
  }
  
}

let Hj =(event)=>
{
  f = event.target.value;
}

let Ob =(e)=>{
  console.log("press delete button", e.target.id);
  set1(r.filter((value,index)=>{
     if(e.target.id!=index)   
     {
        return value; 
     }
  }));
}

  return(
    <>
    <div className='all'>
    <div className='head'>
      <h1 className='header'>TO DO LIST</h1>
    </div>
    <input type='text' id='lo' name='f1' placeholder='Add to do' className='i1' onChange={Hj}></input>
    <button className='b1' onClick={Ji}>+</button>
    {
      r.map((value,index)=>{
        return(
          <>
          <br></br>
          <p className='j1'>{value}</p>
          <button id={index} onClick={Ob} className='b2'>X</button>
          </>
        )
      })
    }
    </div>
    </>
  )
}
ReactDOM.render(
  <>
<GH></GH>
  </>,
  document.getElementById("root")
);