import axios from "axios";

const clientServer = axios.create({
  baseURL:
    "http://cityfalcon-web-797905939.ap-northeast-2.elb.amazonaws.com:3002",
});

export default clientServer;

const SECRET_KEY = import.meta.env.VITE_SECRET_TOKEN;
// secret_key db에 저장?
export const stepPayServer = axios.create({
  baseURL: "https://api.steppay.kr/api",
  headers: {
    Accept: "*/*",
    "Secret-Token": `${SECRET_KEY}`,
  },
});
