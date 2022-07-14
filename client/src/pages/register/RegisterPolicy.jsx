import React, { useState, useCallback } from "react";
import {
  TermsAndConditions,
  ImageIcon,
  CheckAll,
  CheckAllItems,
  Check,
  Instruction,
  CustomerAgreement,
  ImageContent,
  Checklabel,
  SignUp,
} from "../../styles/register/registerPolicy";
import "../../index.css";
import BackArrow from "../../assets/images/BackArrow.svg";
import LearnMore from "../../assets/images/LearnMore.svg";
import CheckedIcon from "../../assets/images/CheckedIcon.svg";
import { Link } from "react-router-dom";

const data = [
  {
    id: "privacy",
    data: "개인정보 수집 및 이용약관에 동의 (필수)",
    path: "/personalpolicy",
  },
  {
    id: "service",
    data: "서비스 이용약관 동의 (필수)",
    path: "/servicepolicy",
  },
  {
    id: "personal",
    data: "개인정보 처리방침 동의 (필수)",
    path: "/personalpolicy",
  },
  { id: "event", data: "이벤트 및 혜택 안내 수신동의 (선택)" },
];

const RegisterPolicy = () => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  const allAgreeHandler = (checked) => {
    console.log(checked);
    setIsAllChecked(!isAllChecked);
    const checkedItemArray = [];
    if (checked) {
      data.forEach((data) => checkedItemArray.push(data.id));
      setCheckedItems(checkedItemArray);
    } else if (
      (!checked && checkedItems.includes("privacy")) |
      (!checked && checkedItems.includes("service")) |
      (!checked && checkedItems.includes("personal"))
    ) {
      setCheckedItems([]);
    }
  };
  const agreeHandler = (checked, value) => {
    if (checked) {
      setCheckedItems([...checkedItems, value]);
    } else if (!checked && checkedItems.includes(value)) {
      setCheckedItems(checkedItems.filter((el) => el !== value));
    }
  };

  return (
    <TermsAndConditions>
      <h3>회원가입</h3>
      <ImageIcon src={BackArrow} />
      <Instruction>서비스 이용 약관에 동의해 주세요.</Instruction>
      <CustomerAgreement>
        <CheckAll>
          <Check>
            <input
              type="checkbox"
              id="agreement"
              checked={checkedItems.length >= 4}
              onChange={(e) => allAgreeHandler(e.currentTarget.checked)}
            />
            <Checklabel htmlFor="agreement" className="container">
              <span className="checkmark"></span>
              <CheckAllItems>전체 동의</CheckAllItems>
            </Checklabel>
          </Check>
        </CheckAll>
        {data.map((item) => (
          <Check>
            <input
              type="checkbox"
              id={item.id}
              checked={checkedItems.includes(item.id)}
              value={item.id}
              onChange={(e) =>
                agreeHandler(e.currentTarget.checked, e.target.value)
              }
            />
            <Checklabel htmlFor={item.id} className="container">
              <span className="checkmark"></span>
              <CheckAllItems>{item.data}</CheckAllItems>
              <Link to={`${item.path}`}>
                <ImageContent src={LearnMore} />
              </Link>
            </Checklabel>
          </Check>
        ))}

        {/* <div><Check type='checkbox' value="privacy" onChange={(e) => agreeHandler(e.currentTarget.checked, e.target.value)} />개인정보 수집 및 이용약관에 동의 (필수)          
        <ImageContent src={MoreIcon} /></div> 
        <div><Check type='checkbox' value="service" onChange={(e) => agreeHandler(e.currentTarget.checked, e.target.value)} />서비스 이용약관 동의 (필수)
        <ImageContent src={MoreIcon} /></div>
        <div><Check type='checkbox' value="personal" onChange={(e) => agreeHandler(e.currentTarget.checked, e.target.value)} />개인정보 처리방침 동의 (필수)
        <ImageContent src={MoreIcon} /></div>
        <div><Check type='checkbox' value="event" onChange={(e) => agreeHandler(e.currentTarget.checked, e.target.value)} />이벤트 및 혜택 안내 수신동의 (선택)</div> */}
      </CustomerAgreement>
      <SignUp>가입하기</SignUp>
    </TermsAndConditions>
  );
};

export default RegisterPolicy;
