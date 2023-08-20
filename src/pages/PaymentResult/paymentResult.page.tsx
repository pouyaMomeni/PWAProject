import React, { useState } from "react";

import { formatNumberWithCommas } from "../../utils/PriceSeparators";

import TopBar from "../../component/base/TopBar";
import save from "../../assets/img/icon/payment/save.svg";
import share from "../../assets/img/icon/payment/share.svg";
import mtn from "../../assets/img/payment/mtn.png";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PaymentResult() {
  const [isSuccess, setIsSuccess] = useState(true);

  return (
    <div
      dir="rtl"
      className="h-[100vh] w-ful overflow-hidden bg-[#FFF] flex flex-col "
    >
      <TopBar prevLink={"/home"} title={"رسید پرداخت"} />
      <div className=" max-h-[100%] overflow-y-scroll h-auto p-[1rem]  w-full font-iran-medium ">
        <div className=" p-[1rem]">
          <div className="border-b-2 border-dashed border-[rgb(50,88,42,.3)] p-[1rem] mb-[1rem]">
            <div className={`text-center mb-[1rem]`}>
              <img alt="logo" src={mtn} className={` w-[60px]  mx-auto `} />
              <span className="block mx-auto text-center text-[12px] text-[#79747E] mt-[.3rem]">
                ۰۹۳۸۱۹۸۳۸۷۵
              </span>
            </div>
            <div className="w-[80%] mx-auto text-[12px] ">
              <div className="flex justify-between items-center mb-[.5rem]">
                {" "}
                <span>نوع اپراتور</span>
                <span className="f font-iran-extrabold text-[13px]">
                  ایرانسل
                </span>
              </div>
              <div className="flex justify-between items-center">
                {" "}
                <span className="f font-iran-medium text-[13px]"> مبلغ + مالیات</span>
                <span className="f font-iran-extrabold text-[13px]">
                  {formatNumberWithCommas("21800")} ریال
                </span>
              </div>
            </div>
            {!isSuccess && (
              <p className="text-[color:var(--error-color)] text-[12px] text-center mt-[.5rem]">
                موجودی کافی نیست
              </p>
            )}
            <div
              className={`px-3 mx-auto mt-[.5rem] rounded-[8px] py-[.6rem] ${
                isSuccess
                  ? "bg-[color:var(--success-color)]"
                  : "bg-[color:var(--error-color)]"
              } text-white w-[125px] text-[12px] flex items-center font-iran-medium`}
            >
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="h-[20px] w-[20px]   text-white ml-[.3rem] "
              />
              {isSuccess ? (
                <span>پرداخت موفق</span>
              ) : (
                <span>پرداخت ناموفق</span>
              )}
            </div>
          </div>
          <div className="w-full flex justify-between items-center p-[.2rem] mb-[.5rem] border-b border-[rgb(50,88,42,.2)]">
            <span className="text-[#79747E] text-[13px] font-iran-medium">شماره همراه</span>
            <span className="text-[13px] font-iran-bold tracking-wider">۰۹۳۸۱۹۸۳۸۷۷</span>
          </div>
          {isSuccess && (
            <div className="w-full flex justify-between items-center p-[.2rem] mb-[.5rem] border-b border-[rgb(50,88,42,.2)]">
              <span className="text-[#79747E] text-[13px]"> شماره پیگیری</span>
              <span className="text-[13px] font-iran-bold tracking-wider">۱۲۴۱۳۷۴</span>
            </div>
          )}
          <div className="w-full flex justify-between items-center p-[.2rem] mb-[.5rem] border-b border-[rgb(50,88,42,.2)]">
            <span className="text-[#79747E] text-[13px]"> تاریخ و ساعت</span>
            <span className="text-[13px] font-iran-bold tracking-wider">۲ اردیبهشت ۱۴۰۲ ۱۰:۴۵</span>
          </div>
          <div className="w-full flex justify-between items-center p-[.2rem] mb-[.5rem] border-b border-[rgb(50,88,42,.2)]">
            <span className="text-[#79747E] text-[13px]"> پرداخت از</span>
            <span className="text-[13px] font-iran-bold tracking-wider">کیف پول</span>
          </div>
        </div>
      </div>
      <div className="w-full  px-[2rem] flex items-center justify-between mt-auto mb-[40px]">
        <button className="flex items-center justify-center font-[600] text-[color:var(--primary-color)] px-[1rem] py-[.8rem] text-[12px] bg-[rgba(50,88,42,.1)] rounded-[.5rem]">
          اشتراک گذاری
          <img alt="" src={share} className={`h-[18px]  mx-auto mr-[.2rem]`} />
        </button>
        <button className="flex items-center justify-center font-[600] text-[color:var(--primary-color)] px-[1rem] py-[.8rem] text-[12px] bg-[rgba(50,88,42,.1)] rounded-[.5rem]">
          ذخیره در گالری
          <img alt="" src={save} className={`h-[18px]  mx-auto mr-[.2rem]`} />
        </button>
      </div>
    </div>
  );
}
