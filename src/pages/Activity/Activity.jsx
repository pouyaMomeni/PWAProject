import React from "react";
import TopBar from "../../component/base/TopBar";
import FooterNav from "../../component/home/fotternav";
import { formatNumberWithCommas } from "../../utils/PriceSeparators";

const dummyData = [
  {
    name: "کارت به کارت",
    date: "1402/3/13",
    receiver: "سحر میرامینی",
    bank: "بانک شهر",
    keyNumber: "5090123",
    ok: "true",
    price: "200000",
  },
  {
    name: "پرداخت قبض گاز",
    date: "1402/10/19",
    keyNumber: "5090123",
    ok: "true",
    price: "140000",
  },
];

function Activity() {
  return (
    <div className="w-full">
      <TopBar title={"فعالیت های من"} prevLink={"/"} />
      <div className="mt-5 w-[93%] mx-auto flex flex-col gap-5">
        {dummyData.map((item, i) => (
          <div key={i} className="bord px-3 py-1">
            <div className="flex justify-between">
              <p
                className={`bg-[#0B961E0A] text-primary-main font-iran-medium text-[14px]`}
              >
                {item.ok ? "موفق" : "ناموفق"}
              </p>
              <p className="font-iran-bold text-[15px]">{item.name}</p>
            </div>
            {/*  */}
            <div className="flex justify-between mt-2 pb-1 border-b-2  border-dashed  border-light-2">
              <p className="font-iran-semibold text-[14px]" dir="rtl">
                {formatNumberWithCommas(item.price)} ريال
              </p>
              <p className="text-[13px] font-iran-reg t text-light-2">
                {item.date}
              </p>
            </div>
            {/*  */}
            {item.receiver && (
              <div className="flex justify-between mt-2">
                <p className="font-iran-reg text-[13px] text-black">
                  {item.receiver}
                </p>
                <p className="text-[14px] text-light-2 font-iran-ligh">
                  :نام گیرنده
                </p>
              </div>
            )}
            {/*  */}
            {item.bank && (
              <div className="flex justify-between mt-2">
                <p className="font-iran-reg text-[13px] text-black">
                  {item.bank}
                </p>
                <p className="text-[14px] text-light-2 font-iran-ligh">
                  :بانک مقصد
                </p>
              </div>
            )}
            {/*  */}
            <div className="flex justify-between mt-2">
              <p className="font-iran-reg text-[13px] text-black">
                {item.keyNumber}
              </p>
              <p className="text-[14px] text-light-2 font-iran-ligh">
                :شماه ارجاع
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex h-[70px] z-20">
        <FooterNav />
      </div>
    </div>
  );
}

export default Activity;
