import React, { useContext } from "react";
import Sistema from "./Sistema";
import { Context } from "./Profil";
import "./device.scss";
function Device() {
  const {  data  } = useContext(Context);
 
  const deleteAgent = (id) => {
    data.user.devices.slice(id, 1)
  }
  console.log(data);
  return (
    <div className="device">
      <div className="container">     
        <div className="device-top">
          <h2>Qurilmalarim</h2>
          <img src="/images/Web design01/section-3/Group 130.svg" alt="svg" />
        </div>
        <div className="device-bottom"> 
          { data.user.devices.map((value, index) => ( 
            <Sistema key={Math.floor(Math.random()*10000)} devices = {value}  id={index} deleteAgent={deleteAgent}/> 
           ))}  
        </div>
      </div>
    </div>
  );
}

export default Device;
