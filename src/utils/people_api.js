import axios from "axios";

async function all() {
  let res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
}

const People = {
  all,
};

export default People;
