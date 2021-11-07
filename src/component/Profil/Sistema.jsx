import React, { useEffect, useState } from "react";
import "./sistem.scss";

function Sistema(props) {
  const [soft, setSoft] = useState();
  const [vaqt, setVaqt] = useState("");
  const [active, setActive] = useState(null);

  useEffect(() => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    let time = hour + ":" + min + ":" + sec;
    let month = date.getMonth();
    let day = date.getDate();
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    date = day + "." + (month + 1) + "." + date.getFullYear();

    setVaqt(time + "  " + date);

    let userAgent = window.navigator.userAgent;
    props.devices === userAgent ? setActive(true) : setActive(false);

    let os;
    if (props.devices.includes("Windows")) {
      os = props.devices.slice(
        props.devices.indexOf("Windows"),
        props.devices.indexOf(";") - 2
      );
    }
    if (props.devices.includes("Macintosh")) {
      os = props.devices.slice(
        props.devices.indexOf("Mac OS X"),
        props.devices.indexOf(")")
      );
    }
    if (props.devices.includes("X11")) {
      os = "Linux";
    }
    if (props.devices.includes("iPad")) {
      os = "iPad";
    }
    if (props.devices.includes("iPhone")) {
      os = props.devices.slice(
        props.devices.indexOf("iPhone OS"),
        props.devices.indexOf("iPhone OS") + 12
      );
    }
    if (props.devices.includes("Android")) {
      os = props.devices.slice(
        props.devices.indexOf("Android"),
        props.devices.indexOf("Android") + 10
      );
      if (os.charAt(os.length - 1) === ".") {
        os = os.slice(0, -1);
      }
    }
    let sBrowser;
    if (props.devices.indexOf("Firefox") > -1) {
      sBrowser = "Mozilla Firefox";
    } else if (props.devices.indexOf("SamsungBrowser") > -1) {
      sBrowser = "Samsung Internet";
    } else if (
      props.devices.indexOf("Opera") > -1 ||
      props.devices.indexOf("OPR") > -1
    ) {
      sBrowser = "Opera";
    } else if (props.devices.indexOf("Trident") > -1) {
      sBrowser = "Microsoft Internet Explorer";
    } else if (props.devices.indexOf("Edge") > -1) {
      sBrowser = "Microsoft Edge";
    } else if (props.devices.indexOf("Chrome") > -1) {
      sBrowser = "Chrome";
    } else if (props.devices.indexOf("Safari") > -1) {
      sBrowser = "Apple Safari";
    } else {
      sBrowser = "unknown";
    }
    setSoft(os + ", " + sBrowser);
  }, []);   
  return ( 
    <div className="sistema">
      <div className="title">
        <h3> {soft} </h3>                              
        <span>{vaqt}</span>
      </div>
      <div className="systemDelete">
        <div
          className="activeBox"
          style={{ display: active ? "block" : "none" }}
        >
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
        <div className="qurilma" style={{ display: active ? "none" : "block" }}>
          <div className="row">
            <p className="p" onClick={props.deleteAgent.bind(props.id)}>
              <span className="span1">Qurilamani </span>
              <span className="span2"> o'chirish</span>
            </p>
            <img src="images/Web Design01/footer/x.svg" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sistema;
