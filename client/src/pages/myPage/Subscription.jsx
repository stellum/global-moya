import React from "react";
import {
  Settings,
  Main,
  Logo,
  SubscriptionPlan,
  NextPayment,
  PaymentMethod,
  ApplyBtn,
} from "@styles/myPage/Subscription";
import { BackArrow, GlobalMOYAPremium } from "@styles/svgIcon";
import { DefaultContainer } from "@styles/common/container";
// 😣ㅠㅡㅠ
const Subscription = () => {
  return (
    <Settings>
      <Main>
        <div className="h3div">
          <BackArrow />
          <h3>구독관리</h3>
        </div>
      </Main>
      <DefaultContainer>
        <Logo>
          <GlobalMOYAPremium></GlobalMOYAPremium>
        </Logo>

        <SubscriptionPlan>
          {/* span이랑 div 가운데 정렬할려면 어따 줘야해요 
            선긋는거는 border져
          */}
          <span>개인 멤버십 | 9,900원/월</span>
          <NextPayment>
            {/* 두 개 가로배치 할려면 어떻게 해야돼요 div랑 span */}
            <div>다음 결제일 | 2022.06.28</div>
            <span>구독취소</span>
          </NextPayment>
        </SubscriptionPlan>

        <PaymentMethod>
          <div>
            <span>결제카드 : NH **** 1234</span> <span>수정</span>
          </div>
          <div>
            <span>백업결제수단</span> <span>수정</span>
          </div>
        </PaymentMethod>
        <ApplyBtn>확인</ApplyBtn>
      </DefaultContainer>
    </Settings>
  );
};

export default Subscription;
