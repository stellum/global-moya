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
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserCheck from "../../hoc/UserCheck";
import { RequiredLogin } from "../../hoc/userAccessType";
import { payMentChange, subsCancel } from "../../api/subsApi";
import { dateFormat } from "../../util/dateFunc";
const Subscription = ({ user }) => {
  const navigate = useNavigate();
  const subsUser = useSelector((state) => state.subsSlice.subsUser);

  return (
    <>
      {user && (
        <Settings>
          <Main>
            <div className="h3div">
              <BackArrow onClick={() => navigate(-1)} />

              <h3>구독관리</h3>
            </div>
          </Main>
          <DefaultContainer>
            <Logo>
              <GlobalMOYAPremium></GlobalMOYAPremium>
            </Logo>

            <SubscriptionPlan>
              <span>개인 멤버십 | 9,900원/월</span>
              <NextPayment>
                <div>
                  다음 결제일 |{" "}
                  {dateFormat(subsUser.subscriptions[0].nextPaymentDateTime)}
                </div>
                <span>구독취소</span>
              </NextPayment>
            </SubscriptionPlan>

            <PaymentMethod>
              <div>
                <span>결제카드 : {subsUser.paymentMethods[0].paymentInfo}</span>
                <span>수정</span>
              </div>
              <div>
                <span>백업결제수단</span> <span>수정</span>
              </div>
            </PaymentMethod>
            <ApplyBtn>확인</ApplyBtn>
          </DefaultContainer>
        </Settings>
      )}
    </>
  );
};

export default UserCheck(Subscription, RequiredLogin);
