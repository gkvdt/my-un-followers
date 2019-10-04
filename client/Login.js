import axios from "axios";
export default login = (username, password) => {
  let url =
    "http://www.avokadoyazilim.site/instagram/login.php?username=" +
    username +
    "&password=" +
    password;
  return axios.get(url);
};
