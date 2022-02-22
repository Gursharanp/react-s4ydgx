import React,{useState,useEffect} from 'react';

export default function Component(){
const [count,setCount]=useState(0);

useEffect(()=>{
 console.log('render every time') 
});
useEffect(()=>{
  console.log('render only when Component is mount')
},[]);

useEffect( ()=>{
  console.log('render when depandacy array is changed')
},[count]);


useEffect( ()=>{
  return()=>{
    console.log("unmount");
  }
},[] );

return (
<div>
<button onClick={()=>setCount(count-1)}>-</button>
{count}
<button onClick={()=>setCount(count+1)}>+</button>
</div>

);
} 