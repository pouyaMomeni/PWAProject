import React, { useState } from "react";

import { formatNumberWithCommas } from "../../../utils/PriceSeparators";

// import TopBar from "../../component/base/TopBar";
import TopBar from "../../../component/base/TopBar";
import save from "../../../assets/img/icon/payment/save.svg";
import share from "../../../assets/img/icon/payment/share.svg";
import mtn from "../../../assets/img/payment/mtn.png";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TResult() {
  const [isSuccess, setIsSuccess] = useState(true);

  return (
    <div
      dir="rtl"
      className="h-[100vh] w-ful overflow-hidden bg-[#FFF] flex flex-col"
    >
      <TopBar prevLink={"/home"} title={"کیف پول"} />
      <div className=" max-h-[100%] overflow-y-scroll h-auto px-[1rem]  w-full  ">
        <p className="font-iran-light text-[17px] text-center">
            مبلغ
            <span className="font-iran-medium">{formatNumberWithCommas("40000")}ريال </span>
             انتقال یافت 
        </p>
        <div className=" px-[1rem]">
          <div className="border-b-2 border-dashed border-[rgb(50,88,42,.3)] pb-4 px-[1rem] mb-[1rem]">
            {!isSuccess && (
              <p className="text-[color:var(--error-color)] text-[12px] text-center mt-[.5rem]">
                موجودی کافی نیست
              </p>
            )}
            <div
              className={`px-[1rem] mx-auto mt-[.5rem] rounded-[8px] py-[.3rem] ${
                isSuccess
                  ? "bg-[color:var(--success-color)]"
                  : "bg-[color:var(--error-color)]"
              } text-white w-[155px] text-[12px] flex items-center h-8`}
            >
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="h-[20px] w-[20px]   text-white ml-[.3rem] "
              />
              {isSuccess ? (
                <span className="font-iran-reg">پرداخت موفق</span>
              ) : (
                <span className="font-iran-reg">پرداخت ناموفق</span>
              )}
            </div>
          </div>
          <div className="w-full flex justify-between items-center p-[.2rem] mb-[.5rem] border-b border-[rgb(50,88,42,.2)]">
            <span className="text-[#79747E] text-[12px] font-iran-light">به کارت</span>
            <span className="text-[12px]">91231****12312</span>
          </div>
          {isSuccess && (
            <div className="w-full flex justify-between items-center p-[.2rem] mb-[.5rem] border-b border-[rgb(50,88,42,.2)]">
              <span className="text-[#79747E] text-[12px] font-iran-light"> شماره پیگیری</span>
              <span className="text-[12px]">۱۲۴۱۳۷۴</span>
            </div>
          )}
          <div className="w-full flex justify-between items-center p-[.2rem] mb-[.5rem] border-b border-[rgb(50,88,42,.2)]">
            <span className="text-[#79747E] text-[12px] font-iran-light"> تاریخ و ساعت</span>
            <span className="text-[12px]">۲ اردیبهشت ۱۴۰۲ ۱۰:۴۵</span>
          </div>
          <div className="w-full flex justify-between items-center p-[.2rem] mb-[.5rem] border-b border-[rgb(50,88,42,.2)]">
            <span className="text-[#79747E] text-[12px]"> پرداخت از</span>
            <span className="text-[12px]">کیف پول</span>
          </div>
        </div>
      </div>
      <div className="w-full mt-auto py-[1rem] px-[2rem] flex items-center justify-between">
        <button className="flex items-center justify-center font-[600] text-[color:var(--primary-color)] px-[1rem] py-[.5rem] text-[12px] bg-[rgba(50,88,42,.1)] rounded-[.5rem]">
          اشتراک گذاری
          <img alt="" src={share} className={`h-[18px]  mx-auto mr-[.2rem]`} />
        </button>
        <button className="flex items-center justify-center font-[600] text-[color:var(--primary-color)] px-[1rem] py-[.5rem] text-[12px] bg-[rgba(50,88,42,.1)] rounded-[.5rem]">
          ذخیره در گالری
          <img alt="" src={save} className={`h-[18px]  mx-auto mr-[.2rem]`} />
        </button>
      </div>
    </div>
  );
}
