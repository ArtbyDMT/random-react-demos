import ky from "ky";

const URL = "https://jsonplaceholder.typicode.com/todos/1";

export default {
  async getTodo() {
    const data = await fetch(URL);
    return data.json();
  },
};
