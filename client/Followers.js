import axios from "axios";

export default followers = (username, password) => {
  const url =
    "http://www.avokadoyazilim.site/instagram/getJustFollowing.php?username=" +
    username +
    "&password=" +
    password;
  return axios.get(url);
};
