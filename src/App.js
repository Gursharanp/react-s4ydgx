import React,{useState} from "react";
import "./style.css";
import Component from './Component.js'
export default function App() {
  const[show,setShow]=useState(true);
  return (
    <>
      <button onClick={()=>setShow(!show)}>Switch</button>
      {show && <Component/>}
    </>
  );
}
