import { useEffect, useState } from "react";
import logo from "../../assets/img/insurance/logo.png";
import TopBar from "../../component/base/TopBar";
import FullButton from "../../component/base/FullButton";

export default function Insurance() {
  const [activeBtn, setActiveBtn] = useState(true);

  const senddata = () => {
    window.location.replace("https://atba.bimeh.com/");
  };

  return (
    <div
      dir="rtl"
      className="h-[100vh] w-ful overflow-hidden bg-[#FFF] flex flex-col justify-between"
    >
      <div>
        {" "}
        <div className="shadow-sm ">
          <TopBar prevLink={"/home"} title={"خدمات بیمه"} />
        </div>
        <a href="https://atba.bimeh.com/" target="_blank" rel="noreferrer">
          <div className=" max-h-[100%] overflow-y-scroll h-auto p-[1rem]  w-full  ">
            <div className="flex items-center px-[1rem] py-[.5rem] rounded-[.5rem] border border-[#32582A]">
              <img src={logo} alt="logo" className="w-[46px] ml-[.5rem]" />
              <div className="flex flex-col text-[14px]">
                <span>سایت بیمه دات کام</span>
                <span>مشاهده و خرید انواع بیمه نامه</span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className=" px-[1rem] mb-[40px]">
        <FullButton
          isActive={activeBtn}
          text={"رفتن به سایت بیمه دات کام"}
          action={() => senddata()}
        />
      </div>
    </div>
  );
}
