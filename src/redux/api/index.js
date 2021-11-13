import defaultAxios from "axios";

export const axios = defaultAxios.create({
  baseURL: "https://mike-json-server.herokuapp.com/",
  headers: { "Content-Type": "application/json" },
});
