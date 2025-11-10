import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1ddb682b9e524e0caa0bf7c5fb83da08",
  },
});
