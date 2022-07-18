import React from "react";
import {
  Settings,
  Main,
  Logo,
  SubscriptionPlan,
  NextPayment,
  PaymentMethod,
  ApplyBtn,
  Popup,
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
    // <<<<<<< Updated upstream
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
            {/* =======
    <Settings>
      <Popup>
        <span>구독을 취소하시겠습니까?</span>
        <div>
          키워드 추가 및 뉴스 그룹 설정 기능 등의 프리미엄 혜택이 사라집니다.
        </div>
        <div>
          <div>유지</div>
          <div>구독 취소</div>
        </div>
      </Popup>
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
>>>>>>> Stashed changes */}

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
