import axios from "axios";

export function checkphone(number, cb) {
  var exists;
  axios
    .post("http://18.185.74.141:5000/v2/signup/checkphone", {
      phone: number,
    })
    .then((res) => {
      localStorage.setItem("number", number);
      exists = res.data.data.exists;
      cb(exists);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function login(data, cb, errCb) {
  axios
    .post("http://18.185.74.141:5000/v2/login/basic", {
      phone: data.phone,
      password: data.password,
      device: window.navigator.userAgent,
    })
    .then((res) => {
      cb(res.data.data);
      localStorage.setItem("user", JSON.stringify(res.data.data));
      this.return(res.data.data);
    })
    .catch((err) => {
      errCb()
    });
}

export function register(data, cb) {
  axios
    .post("http://18.185.74.141:5000/v2/signup/basic", {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      password: data.password,
    })
    .then((res) => {
      localStorage.setItem("user", JSON.stringify(res.data.data));
      cb(res.data.data);
    })
    .catch((err) => {
      console.log(err.response);
    });
}

