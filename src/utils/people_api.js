import axios from "axios";
import SortPeople from "../helpers/SortPeople.js";
import Markers from "../helpers/Markers.js";

async function all() {
  let res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return Markers(SortPeople(res.data));
}

const People = {
  all,
};

export default People;
