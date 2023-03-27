import InputLabel from "../../components/InputLabel";
import { DataInput } from "../../components/Effectiveness";
import axios from "axios";
import { authActions } from "../../../../store/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import classes from "./Organization.module.css";

import quote1 from "../../../../assets/auths/quote1.png";
import quote2 from "../../../../assets/auths/quote2.png";
import ceo from "../../../../assets/auths/ceo.png";
import phone from "../../../../assets/auths/phone.png";
import tmp1 from "../../../../assets/auths/tmp1.png";
import tmp2 from "../../../../assets/auths/tmp2.png";

import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Organization = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId, idError] = DataInput(/^[a-zA-z0-9]{5,20}$/);
  const [password, setPassword, passwordError] = DataInput(
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{9,16}$/
  );

  const organizationLogin = (event) => {
    event.preventDefault();
    const url = "https://j8d102.p.ssafy.io/be/organization/login";
    const axiosData = {
      organizationId: id,
      organizationPwd: password,
    };
    axios
      .post(url, axiosData)
      .then((response) => {
        dispatch(authActions.organizationLogin(response.data.data));
        navigate("/mypage");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={classes.pageBox}>
      <div className={classes.loginBox}>
        <h1>로그인</h1>
        <div className={classes.loginContentBox}>
          <form onSubmit={organizationLogin}>
            <InputLabel
              label="아이디"
              type="text"
              value={id}
              placeholder="아이디를 입력해주세요"
              onChange={setId}
              errorMessage={idError ? "" : "영어와 숫자로만 입력해주세요."}
            />
            <InputLabel
              label="비밀번호"
              type="password"
              value={password}
              placeholder="비밀번호를 입력해주세요"
              onChange={setPassword}
              errorMessage={
                passwordError
                  ? ""
                  : "영어와 숫자 그리고 특수문자로만 입력해주세요."
              }
            />
            <button type="submit" className={classes.loginBtn}>
              로그인
            </button>
            <div className={classes.toGoBox}>
              <p>회원가입 하러 가기</p>
              <ExitToAppIcon 
              className={classes.signupImg}/>
            </div>
          </form>
        </div>
      </div>
      <div className={classes.imgBox}>
        <div className={classes.imgSubBox}>
          <div>
            <img src={quote1} alt="따옴표1" className={classes.quote1} />
            <p className={classes.quoteText1}>
              AIVE의 미션은 사용자와 ~ 깊게 이해하여 혁신적인 AI 기술을 바탕으로
              한 어쩌구 저쩌구 입니다. 어쩌구 저쩌구 입니다. 어쩌구 저쩌구
              입니다.
            </p>
            <p></p>
            <img src={quote2} alt="따옴표2" className={classes.quote2} />
            <div className={classes.iconBox}>
              <div className={classes.icon1}>
                <img src={phone} alt="" className={classes.phone} />
                <p>Phone.02-123-456</p>
              </div>
              <div className={classes.icon2}>
                <img src={tmp1} alt="" className={classes.tmp1} />
                <p>Gumi No.1</p>
              </div>
              <div className={classes.icon3}>
                <img src={tmp2} alt="" className={classes.tmp2} />
                <p>Gumi No.1</p>
              </div>
            </div>
          </div>
          <div className={classes.ceoBox}>
            <img src={ceo} alt="" className={classes.ceo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organization;
