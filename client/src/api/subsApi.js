import { stepPayServer } from "./baseUrl";

const code = "product_W9gLQy9ac"; // 프로덕트 key

// 프로덕트 목록 조회
export const getProductsList = async () => {
  try {
    const response = await stepPayServer({
      url: "/v1/products/product_W9gLQy9ac",
      method: "GET",
    });
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

export const searchUserList = async (userMail) => {
  try {
    const response = await stepPayServer({
      url: "/v1/customers",
      method: "GET",
      params: {
        keyword: `${userMail}`,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
  }
};

// 주문 생성
const body = {
  items: [
    {
      currency: "KRW",
      minimumQuantity: 1,
      productCode: "product_W9gLQy9ac",
      priceCode: "price_kanX9egTB",
    },
  ],
  customerId: 4868, //int -> DB에 저장해야?
  customerCode: "customer_xRA6JWYqG", //string
};
/* 
  customerId , customerCode 
  -> 주문할때 필요, 
  -> 1. 고객생성 할 때 db에 저장 
  -> 2. 로그인 하면 고객조회를 통해 리덕스에 같이 들고 있어야함 keyword 검색으로 이름or이메일로 조회 가능
  
*/
export const createOrder = async () => {
  try {
    const response = await stepPayServer({
      url: "/v1/orders",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
    });
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

// fetch("http://localhost:3000/api/v1/products", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// https://api.steppay.kr/api/v1/products/product_W9gLQy9ac', options)

// const response = await axios({
//   url: "http://localhost:3000/api/v1/products/product_W9gLQy9ac",
//   method: "GET",
//   headers: {
//     Accept: "*/*",
//     "Secret-Token": `${SECRET_KEY}`,
//   },
// });
