import axios from "axios";

export default function getEmps() {
  return axios.get("https://randomuser.me/api/");
}
