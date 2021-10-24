import React, { useEffect, useState } from "react";
import "./sistem.scss";

function Sistema() {

  const [soft, setSoft] = useState("")
  const [vaqt, setVaqt] = useState("")

  useEffect(() => {
    let os;
    let userAgent = window.navigator.userAgent;
    if(userAgent.includes("Windows")) {
      os = userAgent.slice(userAgent.indexOf("Windows"),userAgent.indexOf(";")-2)
    }
    if(userAgent.includes("Macintosh")) {
      os = userAgent.slice(userAgent.indexOf("Mac OS X"),userAgent.indexOf(")"))
    }
    if(userAgent.includes("X11")) {
      os = "Linux"
    }
    if(userAgent.includes("iPhone")) {
      os = userAgent.slice(userAgent.indexOf("iPhone OS"),userAgent.indexOf("iPhone OS")+12)
    } 
    if(userAgent.includes("Android")) {
      os = userAgent.slice(userAgent.indexOf("Android"),userAgent.indexOf("Android")+10)
      if(os.charAt(os.length-1)==="."){
        os = os.slice(0,-1)
      }
    }
    
    let sUsrAg = window.navigator.userAgent;
    let sBrowser;
      if (sUsrAg.indexOf("Firefox") > -1) {
        sBrowser = "Mozilla Firefox";
      } else if (sUsrAg.indexOf("SamsungBrowser") > -1) {
        sBrowser = "Samsung Internet";
      } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
        sBrowser = "Opera";
      } else if (sUsrAg.indexOf("Trident") > -1) {
        sBrowser = "Microsoft Internet Explorer";
      } else if (sUsrAg.indexOf("Edge") > -1) {
        sBrowser = "Microsoft Edge";
      } else if (sUsrAg.indexOf("Chrome") > -1) {
        sBrowser = "Chrome";
      } else if (sUsrAg.indexOf("Safari") > -1) {
        sBrowser = "Apple Safari";
      } else {
        sBrowser = "unknown";
      }

    setSoft(os+", "+sBrowser)

    let time = new Date()
    time = time.getHours() +":" + time.getMinutes() + ":" + time.getSeconds()+" "

    let date = new Date()
    date = date.getDate() +"." + (date.getMonth()+1) + "." + date.getFullYear()

    setVaqt(time+date)

  }, [])

  return (
    <div className="sistema">
      <div className="title">
        <h3>{soft}</h3>
        <span>{vaqt}</span>
      </div>
      <div className="systemDelete">
        <div className="activeBox">
          <div className="row">
            <div className="green">
              <img
                className="red"
                src="images/Web Design01/footer/Vector2.png"
                alt="img"
              />
            </div>
            <p>Aktiv qurilma</p>
          </div>
        </div>
        <div className="qurilma">
          <div className="row">
            <p className="p">
              <span className="span1">Qurilamani</span> <span className="span2">o'chirish</span>
            </p>
            <img src="images/Web Design01/footer/x.svg" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sistema;
