import React from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../../component/base/TopBar";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import addImg from "../../assets/img/profile/add-img.svg";
import Changeprofile from "../../assets/img/profile/simcard net.svg";
import Charge from "../../assets/img/profile/charge.svg";
import FooterNav from "../../component/home/fotternav";

const taskList = [
  {
    label: "ویرایش حساب",
    icon: Changeprofile,
    onClickF: "updateProfile",
  },
  {
    label: "شارژ کیف پول",
    icon: Charge,
    onClickF: "chargeWallet",
  },
];

export default function Profile() {
  let navigation = useNavigate();

  const [page, setPage] = React.useState("");

  const handleClick = (witch: string) => {
    if (witch == "updateProfile") {
      navigation("./ProfileUpdate");
    }
  };

  return (
    <div className="h-[100vh] w-ful overflow-hidden">
      {/* Head */}
      <TopBar prevLink={"/home"} title={"حساب کاربری"} />
      <div className="px-3 h-full">
        {/* Profile Card */}
        <div className="border-2 border-primary-main flex flex-col justify-between h-[20%] bac rounded-lg">
          <div className="w-full">
            <img src={addImg} className="mx-auto mt-3" alt="addNewImage" />
            <p className="text-center font-semibold mt-1 text-[15px]  ">
              09367094278
            </p>
            <p className="w-full text-center text-[18px] tracking-tight font-iran-medium">
              علی محمد نیا
            </p>
          </div>
          <div className="flex justify-between  mb-3 flex-row-reverse font-iran-reg px-4 text-[15px] ">
            <p className="font-iran-reg">موجودی کیف پول</p>
            <span dir="rtl" className="text-warning-main font-iran-medium text-[15px]">
              2,000,00 ریال
            </span>
          </div>
        </div>
        {/* Changes */}
        <div className="flex flex-col mt-3">
          {taskList.map((it, i) => (
            <div
              dir="rtl"
              key={i}
              className="cursor-pointer flex flex-row justify-between mt-4 mb-1 py-[9px] px-2 bg-[#E9EEEF99] rounded-lg"
              onClick={() => handleClick(it.onClickF)}
            >
              <div className="flex">
                <img src={it.icon} alt="changeprofile" />
                <p
                  className="mr-3 f font-iran-reg"
                  style={{ fontSize: 16, width: "160px", color: "#000" }}
                >
                  {it.label}
                </p>
              </div>
              <KeyboardArrowLeftIcon className="t -translate-x-1" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex h-[70px] z-20">
        <FooterNav />
      </div>
    </div>
  );
}
