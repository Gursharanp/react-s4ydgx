import React,{useState} from "react";
import "./style.css";
import Component from './Component.js'
export default function App() {
  const[flag,setFlag]=useState(true);
  return (
    <>
      <button onClick={()=>setFlag(!flag)}>Switch</button>
      {flag && <Component/>}
    </>
  );
}
