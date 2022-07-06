import axios from "axios";

const clientServer = axios.create({
  baseURL:
    "http://cityfalcon-web-797905939.ap-northeast-2.elb.amazonaws.com:3002",
});

export default clientServer;
