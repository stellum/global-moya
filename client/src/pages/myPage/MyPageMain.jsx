import React, { useEffect } from "react";
import {
  MainContainer,
  Main,
  AccountInfo,
  Menu,
  Account,
  SubscriptionInfo,
  Subscription,
  Settings,
  Help,
} from "@styles/myPage/Main";
import { BackArrow, ProfileIcon, LearnMore } from "@styles/svgIcon";
import { useNavigate } from "react-router-dom";
import UserCheck from "../../hoc/UserCheck";
import { RequiredLogin } from "../../hoc/userAccessType";
import { useSelector } from "react-redux";
const MyPageMain = ({ user }) => {
  const navigate = useNavigate();
  const subsUser = useSelector((state) => state.subsSlice.subsUser);
  useEffect(() => {
    console.log(user);
  }, []);
  return (
    <MainContainer>
      {subsUser && (
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
              <p>{subsUser.email}r</p>
            </Account>

            <SubscriptionInfo>
              <div className="subs">
                <span>월별 정기구독 이용중</span>
                <button>구독관리</button>
              </div>
              <Subscription>
                <div className="substerm">
                  <div>구독 기간 </div>| &nbsp; 2022.05.28 ~ 2022.06.27
                </div>
                <div className="substerm">
                  <div>다음 결제일 </div>| &nbsp;
                  {subsUser.subscriptions[0].nextPaymentDateTime}
                </div>
              </Subscription>
            </SubscriptionInfo>
          </AccountInfo>

          <Menu>
            <Settings>
              <li>
                <div>계정 관리</div>
              </li>

              <li>
                <div>
                  비밀번호 재설정 <LearnMore />
                </div>
              </li>
            </Settings>

            <Help>
              <div className="helpWrap">
                <div>도움</div>

                <ul>
                  <li>
                    공지사항 <LearnMore />
                  </li>
                  <li>
                    1:1 문의하기 <LearnMore />
                  </li>
                  <li>
                    서비스 이용약관 <LearnMore />
                  </li>
                  <li>
                    개인정보 처리방침 <LearnMore />
                  </li>
                </ul>
              </div>
            </Help>
          </Menu>
        </>
      )}
    </MainContainer>
  );
};

export default UserCheck(MyPageMain, RequiredLogin);
