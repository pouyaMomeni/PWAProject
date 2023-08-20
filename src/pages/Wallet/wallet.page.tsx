import React from "react";
import { useNavigate } from "react-router-dom";
import { formatNumberWithCommas } from "../../utils/PriceSeparators";

import TopBar from "../../component/base/TopBar";
import { faAngleLeft, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import FooterNav from "../../component/home/fotternav";

import arrow from "../../assets/img/Arroww.svg";
import khodkar from "../../assets/img/wallet/khodkar.svg";
import gardesh from "../../assets/img/wallet/gardesh.svg";
import plus from "../../assets/img/wallet/add-circle.svg";
import trans from "../../assets/img/wallet/arrange-circle-2.svg";
import minus from "../../assets/img/wallet/minus-cirlce.svg";

const taskList = [
  {
    label: "شارژ خودکار کیف پول",
    icon: khodkar,
    onClickF: "khodkar",
  },
  {
    label: "مشاهده گردش کیف پول",
    icon: gardesh,
    onClickF: "gardesh",
  },
];

export default function Wallet() {
  let navigate = useNavigate();

  const [page, setPage] = React.useState("");

  const handleClick = (witch: string) => {
    if (witch == "updateProfile") {
      navigate("./ProfileUpdate");
    }
  };

  const handleNav = () => {
    navigate("/WalletCartNumber");
  };

  return (
    <div className="h-[100vh] w-ful overflow-hidden">
      {/* Head */}
      <TopBar prevLink={"/home"} title={"کیف پول"} />
      <div className="px-3 h-[88%] flex flex-col justify-between">
        {/* Wallet Card */}
        <div>
          <div className="border-2 bg-[##E9EEEF70] font-iran-medium  border-primary-main flex flex-col justify-between h-[45%] bac rounded-lg">
            <div className="flex justify-between   flex-col items-center  px-4 text-[15px] font-iran-medium ">
              <p className="my-3 pb-2">موجودی کیف پول</p>
              <span dir="rtl" className="text-[15px]">
                {formatNumberWithCommas("200000")} ریال
              </span>
            </div>
          </div>
          {/* Changes */}
          <div className="flex flex-col mt-4">
            {taskList.map((it, i) => (
              <div
                dir="rtl"
                key={i}
                className="cursor-pointer rounded-xl py-1 px-3 bg-[#E9EEEF80] flex flex-row justify-between mt-4 my-3"
                onClick={() => handleClick(it.onClickF)}
              >
                <div className="flex">
                  <img src={it.icon} alt="changeprofile" />
                  <p
                    className="mr-3 f font-iran-reg"
                    style={{ fontSize: 16, width: "100%", color: "#000" }}
                  >
                    {it.label}
                  </p>
                </div>
                <img src={arrow} alt="arrowLeft" />
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex h-[70px] z-20 items-center justify-b justify-between w-[82%] mx-auto gap-12 mb-3"
          dir="rtl"
        >
          <div className="flex flex-col items-center justify-center">
            <img
              src={plus}
              alt="plus"
              className="mb-2"
              onClick={() => {
                navigate("plus");
              }}
            />
            <span className="text-[15px] font-iran-medium">افزایش</span>
          </div>
          <div
            className="flex flex-col items-center justify-center"
            onClick={() => {
              navigate("trans");
            }}
          >
            <img src={trans} alt="trans" className="mb-2" />
            <span className="text-[15px] font-iran-medium">انتقال</span>
          </div>
          <div
            className="flex flex-col items-center justify-center"
            onClick={() => {
              navigate("minus");
            }}
          >
            <img src={minus} alt="minus" className="mb-2" />
            <span className="text-[15px] font-iran-medium">برداشت</span>
          </div>
        </div>
      </div>
    </div>
  );
}
