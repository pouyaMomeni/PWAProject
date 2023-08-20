import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import mtn from "../../../assets/img/payment/irancel.svg";
import ticket2 from "../../../assets/img/icon/ticket2.svg";

//api
// import ChargeService from "../SimCard/Charge/charge.service";

//component
import PaymentTypes from "../../../component/PaymentTypes";
import FullButton from "../../../component/base/FullButton";
import TopBar from "../../../component/base/TopBar";

//redux
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export default function TicketPayment() {
  let navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  const location = useLocation();

  const senddata = () => {
    navigate("/paymentResult");
  };

  return (
    <div
      dir="rtl"
      className="h-[100vh] w-ful overflow-hidden bg-[#FFF] flex flex-col justify-between"
    >
      <div>
        <TopBar prevLink={location.state?.prevPage} title={"نوع پرداخت"} />
        <div className=" max-h-[100%] overflow-y-scroll h-auto p-[1rem]  w-full  ">
          <div className="border-b-2  border-dashed  border-[#66b55448] px-[1rem] pb-[1rem] mb-[.5rem]">
            <div className={`text-center mb-[1rem]`}>
              <img alt="logo" src={ticket2} className={` w-[46px]  mx-auto `} />
              <span className="block mx-auto text-center text-[14px] text-[#79747E] mt-[.3rem] font-iran-bold">
                خرید بلیط تک سفره
              </span>
            </div>
            <div className="w-[80%] mx-auto text-[12px] ">
              <div className="flex justify-between items-center">
                {" "}
                <span className="text-[14px] font-iran-medium">
                  مبلغ + مالیات
                </span>
                <span className="text-[14px] font-iran-medium">21800 ریال</span>
              </div>
            </div>
          </div>
          <div className="w-full mb-[2rem]">
            <p className="text-[12px]  font-[400] mb-[1rem] text-right pr-[8px]">
              پرداخت از
            </p>
            <PaymentTypes />
          </div>
        </div>
      </div>
      <div className=" p-[1rem]">
        <FullButton isActive={true} text={"پرداخت"} action={() => senddata()} />
      </div>
    </div>
  );
}
