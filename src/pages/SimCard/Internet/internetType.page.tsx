import React, { Fragment, useEffect, useState } from "react";
import { formatNumberWithCommas } from "../../../utils/PriceSeparators";
import { useNavigate } from "react-router-dom";

//component
import TopBar from "../../../component/base/TopBar";
import InternetDuration from "../../../component/internet/InternetDuration";
import InternetTypes from "../../../component/internet/internetTypes";

const internetTypes = [
  { label: "همه", value: "1", isChecked: true, type: "all" },
  { label: "روزانه", value: "2", type: "day" },
  { label: "هفتگی", value: "3", type: "week" },
  { label: "ماهانه", value: "4", type: "month" },
  { label: "3ماهه", value: "5", type: "3month" },
  { label: "6ماهه", value: "6", type: "6month" },
  { label: "سالیانه", value: "7", type: "year" },
];

const internetPackages = [
  { label: "یک روزه 1.5 گیگابایت", price: "1200000", range: "day" },
  { label: " ماهانه 28 گیگابایت", price: "1400000", range: "month" },
  { label: " هتفگی 8.5 گیگابایت", price: "1900000", range: "week" },
  { label: " 3ماهه 15.5 گیگابایت", price: "1800000", range: "3month" },
  { label: "6ماهه  190 گیگابایت", price: "180000", range: "6month" },
  { label: "6ماهه  89.5 گیگابایت", price: "180000", range: "6month" },
  { label: "6ماهه  80 گیگابایت", price: "180000", range: "6month" },
  { label: " یکساله 9.5 گیگابایت", price: "19900000", range: "year" },
  { label: " یکساله 89.5 گیگابایت", price: "19900000", range: "year" },
  { label: " یکساله 109 گیگابایت", price: "19900000", range: "year" },
  { label: " یکساله 109 گیگابایت", price: "19900000", range: "year" },
  { label: " یکساله 109 گیگابایت", price: "19900000", range: "year" },
];

export default function InternetType() {
  //جهت مسیریابی
  let navigate = useNavigate();
  const [opratorid, setoperator] = useState(0); //شماره اپراتور
  const [rangeOf, setRangeOf] = useState<
    "all" | "week" | "month" | "3month" | "6month" | "year"
  >("all");

  const handleNavigate = () => {
    navigate("/paymentType", { state: { prevPage: "/internetType" } });
  };

  const heightS = window.innerHeight;

  return (
    <div
      dir="rtl"
      className="h-screen w-ful overflow-hidden bg-[#FFF] flex flex-col"
    >
      <div className="">
        <TopBar prevLink={"/internet"} title={"خرید بسته اینترنت"} />

        <div className="  px-[1rem]">
          <div className="flex flex-nowrap overflow-x-auto items-center gap-[1rem] py-[1rem]">
            {internetTypes.map((item, index) => {
              return (
                <Fragment key={index}>
                  <InternetDuration
                    checked={item?.isChecked}
                    label={item?.label}
                    value={item?.value}
                    type={item?.type}
                    rangeOf={rangeOf}
                    setRangeOf={setRangeOf}
                  />
                </Fragment>
              );
            })}
          </div>
          {/* {heightS} */}
          <div
            className={`mt-[1rem] overflow-auto`}
            style={{
              height: Math.floor((heightS * 9) / 12),
              // height: 450
            }}
          >
            {internetPackages.map((it, i) => {
              if (it.range === rangeOf) {
                return (
                  <div key={i} onClick={handleNavigate}>
                    <InternetTypes
                      label={it?.label}
                      price={formatNumberWithCommas(it.price)}
                      action={handleNavigate}
                    />
                  </div>
                );
              }
              if (rangeOf === "all") {
                return (
                  <div key={i} onClick={handleNavigate}>
                    <InternetTypes
                      label={it?.label}
                      price={formatNumberWithCommas(it.price)}
                      action={handleNavigate}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
