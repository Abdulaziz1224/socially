import axios from "axios";

export function checkphone(number, cb) {
  var exists;
  axios
    .post("https://socially2.herokuapp.com/v2/signup/checkphone", {
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

export function login(data, cb) {
  axios
    .post("https://socially2.herokuapp.com/v2/login/basic", {
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
      console.log(err.response);
    });
}

export function register(data, cb) {
  axios
    .post("https://socially2.herokuapp.com/v2/signup/basic", {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      password: data.password,
      avatar: "1.2",
    })
    .then((res) => {
      localStorage.setItem("user", JSON.stringify(res.data.data));
      cb(res.data.data);
    })
    .catch((err) => {
      console.log(err.response);
    });
}

export async function Logout() {

  let data = localStorage.getItem("user");
  data = JSON.parse(data);
  if (data) {
    let config = {
      method: "delete",
      url: `https://socially2.herokuapp.com/v2/logout`,
      headers: {
        "x-api-key": "YqUxxDV7wuT3e2fUfybqy9Xd8Y6bV8KEh2EQ",
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.tokens.accessToken}`,
      },
    };
    await axios(config)
      .then(function (response) {
        alert("o'chdi");
        // <Redirect to="/bloglar" />;
        window.location.href = "/";
        // history.push("/")
      })
      .catch(function (error) {
        console.log(error);
        alert("o'chmadi");
      });
  }
}
export async function infoProfil() {}

// export async function Submit() {
// var data = JSON.stringify({
//   name: "Janishar Ali Anwar",
//   profilePicUrl:
//     "https://avatars1.githubusercontent.com/u/11065002?s=460&u=1e8e42bda7e6f579a2b216767b2ed986619bbf78&v=4",
// });

// }
// export function uploadImage() {
