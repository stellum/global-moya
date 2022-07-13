import React from "react";
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

const MyPageMain = () => {
  return (
    <MainContainer>
      <Main>
        <div className="h3div">
          <BackArrow />
          <h3>마이페이지</h3>
        </div>
      </Main>

      <AccountInfo>
        <div>
          <Account>
            <ProfileIcon />
            <span>김모아 님</span>
            <p>moyanews@sysmetic.co.kr</p>
          </Account>
        </div>

        <SubscriptionInfo>
          <span>월별 정기구독 이용중</span>
          <button>구독관리</button>

          <Subscription>
            <tbody>
              <tr>
                <th>{`구독 기간 |`}</th>
                <th>2022.05.28 ~ 2022.06.27</th>
              </tr>
              <tr>
                <td>{`다음 결제일\n |`}</td>
                <td>2022.06.28</td>
              </tr>
            </tbody>

            {/* <li>
              구독 기간 | <p>2022.05.28 ~ 2022.06.27</p>
            </li>
            <li>
              다음 결제일 | <p>2022.06.28</p>
            </li> */}
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
          <div>
            <div>도움</div>
          </div>

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
        </Help>
      </Menu>
    </MainContainer>
  );
};

export default MyPageMain;
