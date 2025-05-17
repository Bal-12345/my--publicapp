import React,{useState} from "react";
//import "./style.css"
import myImage from './images/tiger.jpg';

export default function App() {
  const[angle,setAngle]=useState(0)
  const style={
     display:'inline-block',
     transition:'transform 10.5s ease-in-out',
     transform:`rotate(${angle}deg)`
    }
  
  return (
    <div>
      <span  style={style} onClick={()=>setAngle(p=>p+360)}>
        <img src={myImage} alt='life' style={{borderRadius:'8px', height:"100px", width:"100px"}} />
      </span>
    </div>
  );
}

