import Swal from "sweetalert2";

import { useState } from "react";
import axios from "axios";
import classes from "./ContactMain.module.css";

import ceo from "../../../assets/contact/ceo.png";
import quote1 from "../../../assets/contact/quote1.png";
import quote2 from "../../../assets/contact/quote2.png";
import InputLabel from "./components/InputLabel";

const ContactMain = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // submit 활성화 & 비활성화
  const nullError = !!name && !!phoneNumber && !!email && !!message;

  const saveContact = (e) => {
    e.preventDefault();
    const url = "https://j8d102.p.ssafy.io/be/contact/save";
    const axiosData = {
      name,
      email,
      number: phoneNumber,
      msg: message,
    };
    axios
      .post(url, axiosData)
      .then((res) => {
        Swal.fire({
          title:
            '<div style="font-size:24px;font-family:Apple_Gothic_Neo_Bold;font-weight:bold;">성공적으로 전달 되었습니다.<div>',
          html: '<div style="font-size:16px;font-family:Apple_Gothic_Neo_Mid;">빠른 시일내에 답변드리겠습니다.</div>',
          icon: "success",
          width: 350,
          confirmButtonColor: "#9A9A9A",
          confirmButtonText:
            '<div style="font-size:16px;font-family:Apple_Gothic_Neo_Mid;">확인</div>',
        }).then(() => {
          setName("");
          setPhoneNumber("");
          setEmail("");
          setMessage("");
        });
      })
      .catch((err) => {
        Swal.fire({
          title:
            '<div style="font-size:24px;font-family:Apple_Gothic_Neo_Bold;font-weight:bold;">전달에 실패했습니다.</div>',
          html: '<div style="font-size:16px;font-family:Apple_Gothic_Neo_Mid;">현재 서버가 불안정하니 전화 혹은 문자로 문의 바랍니다.</div>',
          icon: "error",
          width: 350,
          confirmButtonColor: "#9A9A9A",
          confirmButtonText:
            '<div style="font-size:16px;font-family:Apple_Gothic_Neo_Mid;">확인</div>',
        });
      });
  };

  return (
    <div className={classes.pagebox}>
      <div className={classes.titlebox}>
        <h1>1:1 문의하기</h1>
        <h3>
          문의사항이 있으시면 다음을 기재해주시거나 전화 주시면 빠르게 상담
          가능합니다.
        </h3>
      </div>
      <hr className={classes.hr} />
      <br />
      <br />
      <form onSubmit={saveContact}>
        <div className={classes.mainbox}>
          <div className={classes.contentbox}>
            <div className={classes.contentboxone}>
              <InputLabel
                label="이름"
                type="text"
                placeholder="Your Name(required)"
                value={name}
                onChange={(event) => setName(event.target.value)}
                name="name"
                autoComplete="off"
              />
              <InputLabel
                label="휴대폰 번호"
                type="text"
                placeholder="Your Number(required)"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                name="phone"
                autoComplete="off"
              />
              <InputLabel
                label="이메일"
                type="text"
                placeholder="Your Email(required)"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                name="email"
                autoComplete="off"
              />
            </div>
            <div className={classes.contentboxtwo}>
              <InputLabel
                label="내용"
                type="content"
                placeholder="   Your Message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                name="message"
                autoComplete="off"
              />
              <button
                className={classes.contactbtn}
                type="submit"
                disabled={!nullError}
              >
                제출하기
              </button>
            </div>
          </div>
          <div className={classes.imgbox}>
            <div className={classes.imgTextBox}>
              <div className={classes.topImgBox}>
                <img src={quote1} alt="따옴표1" className={classes.quote1} />
                <h3>AATS, 이것은 혁신이자 우리의 미래, 그 이상입니다.</h3>
                <img src={quote2} alt="따옴표2" className={classes.quote2} />
                <p className={classes.d102}>AIVE 대표, 강모현</p>
                <div className={classes.hLine}></div>
              </div>
              <img src={ceo} alt="ceo" className={classes.contactimg} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactMain;
