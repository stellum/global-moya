import React, { useEffect } from "react";
import {
  MainContainer,
  Main,
  AccountInfo,
  AccountSettings,
  Account,
  SubscriptionInfo,
  Subscription,
  Settings,
  Help,
} from "@styles/myPage/Main";
import { BackArrow, ProfileIcon, LearnMore } from "@styles/svgIcon";
import { useNavigate, Link } from "react-router-dom";
import UserCheck from "@hoc/UserCheck";
import { RequiredLogin } from "@hoc/userAccessType";
import { useDispatch, useSelector } from "react-redux";
import { logOutFunc } from "@api/loginApi";
import { userLogoutAction } from "@redux/user/userSlice";

import { dateFormat, subDate } from "@util/dateFunc";
const MyPageMain = ({ user, accessToken }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const subsUser = useSelector((state) => state.subsSlice.subsUser);
  useEffect(() => {
    console.log(subsUser);
  }, []);
  const handleLogin = () => {
    logOutFunc(accessToken);
    dispatch(userLogoutAction());
    navigate("/");
  };
  return (
    <MainContainer>
      {user && (
        <>
          <Main>
            <div className="h3div">
              <BackArrow onClick={() => navigate(-1)} />
              <h3>마이페이지</h3>
            </div>
          </Main>

          <AccountInfo>
            <Account>
              <ProfileIcon />
              <span>{subsUser.name}</span>
              <p>{subsUser.email}</p>
            </Account>

            <SubscriptionInfo>
              <div className="subs">
                <span>월별 정기구독 이용중</span>
                <Link to="/mypage/subscription">
                  <button>구독관리</button>
                </Link>
              </div>
              <Subscription>
                <div className="substerm">
                  <div>구독 기간 </div>| &nbsp;
                  {subsUser.subscriptions &&
                    subDate(
                      subsUser.subscriptions[0]?.nextPaymentDateTime
                    )}{" "}
                  &nbsp;~ &nbsp;
                  {subsUser.subscriptions &&
                    dateFormat(subsUser.subscriptions[0]?.nextPaymentDateTime)}
                </div>
                <div className="substerm">
                  <div>다음 결제일 </div>| &nbsp;
                  {subsUser.subscriptions &&
                    dateFormat(subsUser.subscriptions[0]?.nextPaymentDateTime)}
                </div>
              </Subscription>
            </SubscriptionInfo>
          </AccountInfo>

          <Settings>
            <AccountSettings>
              <div>계정 관리</div>
            </AccountSettings>
            <Link to="/mypage/profile">
              <li>
                <div>
                  프로필 설정 <LearnMore />
                </div>
              </li>
            </Link>
            <Link to="/mypage/password">
              <li>
                <div>
                  비밀번호 재설정 <LearnMore />
                </div>
              </li>
            </Link>

            <li>
              <div onClick={handleLogin}>
                로그아웃 <LearnMore />
              </div>
            </li>
          </Settings>

          <Help>
            <div className="helpWrap">
              <div>도움</div>

              <ul>
                <Link to="/contactus">
                  <li>
                    1:1 문의하기 <LearnMore />
                  </li>
                </Link>
                <Link to="/servicepolicy">
                  <li>
                    서비스 이용약관 <LearnMore />
                  </li>
                </Link>
                <Link to="/personalpolicy">
                  <li>
                    개인정보 처리방침 <LearnMore />
                  </li>
                </Link>
              </ul>
            </div>
          </Help>
        </>
      )}
    </MainContainer>
  );
};

export default UserCheck(MyPageMain, RequiredLogin);
