import axios from "axios";

const clientServer = axios.create({
  baseURL: "http://54.180.136.0:3002",
});

export default clientServer;
