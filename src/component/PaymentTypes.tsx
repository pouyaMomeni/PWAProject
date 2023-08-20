import React from "react";

import { formatNumberWithCommas } from "../utils/PriceSeparators";

import bank from "../assets/img/icon/payment/bank.svg";
import wallet from "../assets/img/icon/payment/wallet.svg";

export default function PaymentTypes({ action, setWitch, witch }: any) {
  // const [witch, setWitch] = React.useState<number>(1);
  return (
    <div className="grid grid-cols-1 items-center gap-[1rem] font-iran-medium ">
      <label>
        <div
          className={`${
            witch === 1 ? "border-primary-main" : ""
          } h-[59px] flex items-center border border-[color:var(secondary-text-color)] text-[14px]  px-[1rem] py-[.5rem] rounded-[.5rem]`}
          onClick={() => setWitch(1)}
        >
          <img src={wallet} alt="wallet icon" height={"24px"} width="24px" />
          <div className="mr-[1rem] w-[90%]">
            <span className=" font-[500] text-[14px]  ">کیف پول</span>
            <div className="text-[color:var(--secondary-color)] text-[12px]">
              <span>موجودی کیف پول: </span>
              <span>{formatNumberWithCommas("200000")} ریال</span>
            </div>
          </div>
        </div>
      </label>
      <label>
        <div
          className={`${
            witch === 1 ? "" : "border-primary-main"
          } h-[59px] flex items-center border border-[rgba(50,88,42,.3)] text-[14px]  px-[1rem] py-[.5rem] rounded-[.5rem]`}
          onClick={() => setWitch(2)}
        >
          <img src={bank} alt="bank icon " height={"23px"} width="21px" />
          <span className="font-[500] text-[14px] mr-[1rem] inline-block w-[90%]">
            کارت بانکی
          </span>
        </div>
      </label>
    </div>
  );
}
