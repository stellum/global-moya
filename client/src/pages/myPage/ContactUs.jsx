import React from "react";
import {
  ContactUs,
  MessageSubject,
  Message,
  Email,
  Attachment,
  AttachmentDesc,
  CheckBox,
  Complete,
  ContactContainer,
} from "@styles/myPageStyle/ContactUs";
import { AttachIcon, ArrowBack, MoreIcon } from "@styles/svgIcon";

const MyPageContactUs = () => {
  return (
    <ContactContainer>
      <ContactUs>
        <div className="h3div">
          <ArrowBack />
          <h3>문의하기</h3>
        </div>
      </ContactUs>
      <MessageSubject
        type="text"
        maxLength="20"
        placeholder="제목을 입력해주세요. (20자 이내)"
        required
      ></MessageSubject>
      <Message
        type="text"
        placeholder={`문의하실 내용을 입력해주세요.\n확인 절차에 따라 시일이 걸릴 수 있습니다.`}
        required
      ></Message>
      <Email
        type="email"
        maxLength="30"
        placeholder="답변 받을 이메일 주소를 입력해주세요."
        required
      ></Email>
      <Attachment>
        <label htmlFor="fileBtn">
          <input id="fileBtn" type="file" />
          파일을 첨부해주세요.
          <div>
            <AttachIcon></AttachIcon>
          </div>
        </label>
      </Attachment>
      <AttachmentDesc>
        *파일은 최대 n개, nnMB까지 첨부 가능합니다.
      </AttachmentDesc>

      <CheckBox>
        <label htmlFor="privacy">
          <input type="checkbox" id="privacy" />
          개인정보 수집, 이용동의 (필수)
          <MoreIcon></MoreIcon>
        </label>
        <br />
        <label htmlFor="service">
          <input type="checkbox" id="service" />
          서비스 이용약관 동의 (필수)
          <MoreIcon></MoreIcon>
        </label>
      </CheckBox>

      <Complete>완료</Complete>
    </ContactContainer>
  );
};

export default MyPageContactUs;