import { stepPayServer } from "./baseUrl";

const productCode = "product_W9gLQy9ac"; // 프로덕트 key
const priceCode = "price_kanX9egTB";

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
// const body = {
//   items: [
//     {
//       currency: "KRW",
//       minimumQuantity: 1,
//       productCode: "product_W9gLQy9ac",
//       priceCode: "price_kanX9egTB",
//     },
//   ],
//   customerId: 4897, //int -> DB에 저장해야?
// };
/* 
  customerId , customerCode 
  -> 주문할때 필요, 
  -> 1. 고객생성 할 때 db에 저장 
  -> 2. 로그인 하면 고객조회를 통해 리덕스에 같이 들고 있어야함 keyword 검색으로 이름or이메일로 조회 가능
  
*/
export const createOrder = async (userCode) => {
  console.log("userCode", userCode);
  try {
    const response = await stepPayServer({
      url: "/v1/orders",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        items: [
          {
            currency: "KRW",
            minimumQuantity: 1,
            productCode: "product_W9gLQy9ac",
            priceCode: "price_kanX9egTB",
          },
        ],
        customerId: `${userCode}`, //int -> DB에 저장해야?
      },
    });
    if (response.status === 200) {
      // orderRedirect(response.orderCode);
      // console.log(response);
      redirectPay(response.data.orderCode);
      return response;
    }
  } catch (e) {
    console.log(e);
  }
};
export const orderRedirect = async (orderCode) => {
  console.log("orderCode", orderCode);
  try {
    const reponse = await stepPayServer({
      url: `v1/orders/${orderCode}/pay`,
      method: "get",
      params: {
        successUrl: "http://localhost:3000",
        errorUrl: "http://localhost:3000/main",
        cancelUrl: "http://localhost:3000/quick",
      },
    });
    console.log(reponse);
  } catch (e) {
    console.log(e);
  }
};

function redirectPay(orderCode) {
  var url = `https://api.steppay.kr/api/public/orders/${orderCode}/pay?successUrl=http://localhost:3000/&errorUrl=http://localhost:3000/main&cancelUrl=http://localhost:3000/quick`;
  window.location.href = url;
}

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
