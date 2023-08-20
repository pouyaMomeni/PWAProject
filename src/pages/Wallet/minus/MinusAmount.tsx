import React, { useState } from "react";
// import TopBar from "../../component/base/TopBar";
import TopBar from "../../../component/base/TopBar";
import { Input } from "@mui/material";
import FullButton from "../../../component/base/FullButton";
import { useNavigate } from "react-router-dom";
import { formatNumberWithCommas } from "../../../utils/PriceSeparators";

interface inputsProp {
  name: string;
  family: string;
  phone: number | null;
}

function MinusAmount() {
  const navigate = useNavigate();

  const [amount, setAmount] = useState<number>(20000); // 20,000

  const handleChanges = (e: any) => {
    // console.log(e.target.name);
    setAmount(e.target?.value);
  };

  return (
    <div className="h-[100vh] w-ful overflow-hidden flex flex-col justify-between">
      <div>
        <TopBar prevLink={"/home"} title={"کیف پول"} />
        <div className=" mx-3 border-2 border-primary-main font-iran-medium flex flex-col items-center justify-between h-[31%] bac rounded-lg py-1">
          <p>موجودی قابل برداشت</p>
          <p dir="rtl">7,000,000 ریال</p>
        </div>
        <div dir="rtl" className="px-3 text-[15px]">
          <p className="fon font-iran-medium text-[14px] mt-3">
            مبلغ مورد نظر خود را وارد نمایید
          </p>
          <form action="" method="post" className="r relative">
            <p className="a ab absolute left-3 top-3">ریال</p>
            <input
              dir="ltr"
              type="text"
              placeholder="نام"
              name="name"
              value={amount}
              onChange={handleChanges}
              style={{
                backgroundColor: "#f5f5f5",
                borderBottom: "1.2px solid #49454F",
              }}
              className="my-3 py-[3px] font-iran-medium h-8 w-full flex items-center text-center"
            />
          </form>

          <div className="mt-8 flex flex-row flex-wrap gap-7 items-center justify-between w-[85%] mx-auto">
            {[20000, 500000, 1000000].map((it, i) => (
              <div
                key={i}
                className={`${
                  amount === it ? "bg-primary-main" : "bg-[#E9EEEF99]"
                } rounded px-3 py-2`}
              >
                <span
                  className="text-[13px] font-iran-medium "
                  style={{ color: amount === it ? "#fff" : "#000" }}
                  onClick={() => {
                    setAmount(it);
                  }}
                >
                  {formatNumberWithCommas(it.toString())}
                  <span style={{ fontSize: 12 }}>ریال</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 mb-[40px]">
        <FullButton
          isActive={!!amount}
          text={"تایید"}
          action={() => navigate("/CartData")}
        />
      </div>
    </div>
  );
}

export default MinusAmount;
