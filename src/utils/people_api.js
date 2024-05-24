async function all() {
  let res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
}

export const People = {
  all,
};
