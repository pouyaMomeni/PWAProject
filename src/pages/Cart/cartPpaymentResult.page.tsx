import { useState } from "react";

import { formatNumberWithCommas } from "../../utils/PriceSeparators";

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import save from "../../assets/img/icon/payment/save.svg";
import share from "../../assets/img/icon/payment/share.svg";
import bank from "../../assets/img/icon/payment/bank.svg";

//component
import TopBar from "../../component/base/TopBar";

export default function CartPaymentResult() {
  const [isSuccess, setIsSuccess] = useState(true);

  return (
    <div
      dir="rtl"
      className="h-[100vh] w-ful overflow-hidden bg-[#FFF] flex flex-col justify-between "
    >
      <div className="f font-iran-medium">
        <TopBar prevLink={"/home"} title={"کارت به کارت"} />
        <div className=" max-h-[100%] overflow-y-scroll h-auto px-[1rem] pb-[1rem]  w-full  ">
          <div className=" px-[1rem]">
            <div className="border-b-2 border-dashed border-[rgb(50,88,42,.3)] p-[1rem] mb-[1rem]">
              <div className={`text-center`}>
                <div className=" w-fit mx-auto">
                  <img
                    className=""
                    src={bank}
                    alt="bank icon "
                    height={"54px"}
                    width="50px"
                  />
                </div>
                <span className="block mx-auto text-center text-[13px]  font-iran-bold tracking-wider  mt-[.3rem]">
                  نعیمه کریمی
                </span>
                <span className="block font-iran-semibold mx-auto text-center text-[13px] text-[#79747E] mt-[.5rem]">
                  ۵۰۴۱۷۲۱۰۴۵۴۵۶۷۷۶
                </span>
                <div className="w-full flex justify-center items-center p-[.2rem] mb-[.5rem] ">
                  <span className="text-[#79747E] font-iran-semibold text-[12px]">
                    {" "}
                    مبلغ انتقال{" :"}
                  </span>
                  <span className="text-[14px] font-iran-extrabold mr-[.5rem]">
                    {" "}
                    {formatNumberWithCommas("4500000")} ریال
                  </span>
                </div>
              </div>
              {!isSuccess && (
                <p className="text-[#FF002D] text-[12px] text-center mt-[.5rem]">
                  موجودی کافی نیست
                </p>
              )}
              <div
                className={`px-[1rem] mx-auto mt-[.5rem] rounded-[8px] py-[.3rem] ${
                  isSuccess ? "bg-[#179E2A]" : "bg-[#FF002D]"
                } text-white w-[125px] text-[12px] flex items-center justify-between`}
              >
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="h-[20px] w-[20px]   text-white ml-[.3rem] "
                />
                {isSuccess ? (
                  <span>انتقال موفق</span>
                ) : (
                  <span>انتقال ناموفق</span>
                )}
              </div>
            </div>
            <div className="w-full flex justify-between items-center p-[.2rem] mb-[.5rem] border-b border-[rgb(50,88,42,.2)]">
              <span className="text-[#79747E] text-[12px] font-iran-medium">
                {" "}
                تاریخ و ساعت
              </span>
              <span className="text-[12px] font-[600]">
                ۲ اردیبهشت ۱۴۰۲ ۱۰:۴۵
              </span>
            </div>
            <div className="w-full flex justify-between items-center p-[.2rem] mb-[.5rem] border-b border-[rgb(50,88,42,.2)]">
              <span className="text-[#79747E] text-[12px] font-iran-medium">
                {" "}
                روش انتقال{" "}
              </span>
              <span className="text-[12px] font-[600]"> کارت به کارت </span>
            </div>
            <div className="w-full flex justify-between items-center p-[.2rem] mb-[.5rem] border-b border-[rgb(50,88,42,.2)]">
              <span className="text-[#79747E] text-[12px] font-iran-medium">
                {" "}
                انتقال دهنده{" "}
              </span>
              <span className="text-[12px] font-[600]"> علی رفعتی</span>
            </div>
            <div className="w-full flex justify-between items-center p-[.2rem] mb-[.5rem] border-b border-[rgb(50,88,42,.2)]">
              <span className="text-[#79747E] text-[12px] font-iran-medium">
                {" "}
                کارت مبدا
              </span>
              <span className="text-[12px] font-[600]">۶۲۱۳۸۵******۶۵۶۵</span>
            </div>
            {isSuccess && (
              <div className="w-full flex justify-between items-center p-[.2rem] mb-[.5rem] border-b border-[rgb(50,88,42,.2)]">
                <span className="text-[#79747E] text-[12px] font-iran-medium">
                  {" "}
                  شماره پیگیری
                </span>
                <span className="text-[12px] font-[600]">۱۲۴۱۳۷۴</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full  px-[2rem] mb-[40px] flex items-center justify-between">
        <button className="flex items-center  justify-center font-iran-semibold text-[color:var(--primary-color)] px-[1rem] py-[.8rem] text-[12px] bg-[rgba(50,88,42,.1)] rounded-[.5rem]">
          اشتراک گذاری
          <img alt="" src={share} className={`h-[18px]  mx-auto mr-[.2rem]`} />
        </button>
        <button className="flex items-center justify-center font-iran-semibold text-[color:var(--primary-color)] px-[1rem] py-[.8rem] text-[12px] bg-[rgba(50,88,42,.1)] rounded-[.5rem]">
          ذخیره در گالری
          <img alt="" src={save} className={`h-[18px]  mx-auto mr-[.2rem]`} />
        </button>
      </div>
    </div>
  );
}
