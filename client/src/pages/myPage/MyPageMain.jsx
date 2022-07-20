import React, { useEffect } from "react";
import {
  MainContainer,
  Main,
  AccountInfo,
  AccountSettings,
  Account,
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
import SubscriptionComp from "@components/SubscriptionComp";
import { customerSearch } from "@api/subsApi";

const MyPageMain = ({ user, accessToken }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const subsUser = useSelector((state) => state.subsSlice.subsUser);
  useEffect(() => {
    customerSearch(subsUser.id);
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
            <SubscriptionComp subsUser={subsUser} />
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
