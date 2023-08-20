import {
  faNavicon,
  faUser,
  faSignOut,
  faWallet,
  faBank,
  faCreditCardAlt,
  faHeadset,
  faQuestionCircle,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import userImg from "../../assets/img/home/user.png";
// import logoImg from "../../assets/img/logoWhite.png";
import logoImg from "../../assets/img/homeLogo.svg";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatNumberWithCommas } from "../../utils/PriceSeparators";

export default function TopBar(props: any) {
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const [helpToggler, setHelpToggler] = useState<Boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHelpToggler(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [helpToggler]);

  return (
    <div className="flex  opacity-1 h-[200px] z-5">
      <div
        className=" bg-[rgb(111,175,97)] opacity-1 h-[200px] z-10 w-full px-[1rem] py-[1.5rem] "
        style={{ direction: "rtl" }}
      >
        <div
          className={`absolute left-10 w-[33%] opacity-0 bg-slate-300 px-1 rounded transition-all duration-300
           ${helpToggler ? "opacity-100" : ""}
          `}
        >
          <p className="text-[14px] font-thin">لورم ایپسوم متن ساختگی</p>
        </div>
        <div className=" flex justify-between items-center px-1">
          <FontAwesomeIcon
            onClick={props.navAction("right", true)}
            icon={faNavicon}
            className="h-[24px] w-[24px] active:animate-ping  text-white"
          />

          <div className="flex flex-col justify-center items-center ">
            <img src={logoImg} alt="logo" className="w-[71px]  text-[37px]" />
          </div>
          <div
            className="h-[24px] w-[24px] text-white  "
            onClick={() => setHelpToggler((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faQuestionCircle} size={"lg"} />
            {/* <div>Lorem, ipsum dolor.</div> */}
          </div>
        </div>
        <div
          className="bg-[#FFF] rounded-[12px] flex items-center px-[1rem] font-medium py-[.5rem] mt-[1rem]"
          onClick={() => navigate("/Profile")}
        >
          <img src={userImg} className="w-[50px] bg-transparent" alt="user" />
          <div className="w-full mr-[.5rem] text-[12px]  ">
            <div className="flex  justify-between items-center  mb-[.6rem]">
              {" "}
              <span className="f font-iran-bold text-[13px]">
                علی محمدی
              </span>
              <span className="font-iran-semibold text-[13px]">{user.mobile}</span>
            </div>
            <div className="flex justify-between items-center">
              {" "}
              <span className="f font-iran-bold text-[12px]">
                {" "}
                موجودی کیف پول
              </span>
              <span className="text-[color:var(--warning-color)] font-iran-bold text-[13px]">
                {formatNumberWithCommas("2000000")} ریال
              </span>
            </div>
          </div>
        </div>
        <div className="absolute right-0 left-0 bottom-0 h-[10px] bg-[#FFF] w-full rounded-t-xl"></div>
      </div>
    </div>
  );
}
