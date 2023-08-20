import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { formatNumberWithCommas } from "../../utils/PriceSeparators";
import Swal from "sweetalert2";
import mtn from "../../assets/img/payment/irancel.svg";

//api
import ChargeService from "../SimCard/Charge/charge.service";

//component
import PaymentTypes from "../../component/PaymentTypes";
import FullButton from "../../component/base/FullButton";
import TopBar from "../../component/base/TopBar";

//redux
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function PaymentType() {
  const [witch, setWitch] = useState<number>(1);
  let navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  const location = useLocation();

  const senddata = () => {
    if (witch === 1) {
      navigate("/paymentResult");
    } else {
      navigate("/CartData");
    }
  };

  return (
    <div
      dir="rtl"
      className="h-[100vh] w-ful overflow-hidden bg-[#FFF] flex flex-col justify-between"
    >
      <div>
        <TopBar prevLink={location.state?.prevPage} title={"نوع پرداخت"} />
        <div className=" max-h-[100%] overflow-y-scroll h-auto p-[1rem]  w-full  ">
          <div className="border-b-2  border-dashed  border-[#3333332c] px-[1rem] pb-[1rem] mb-[.5rem]">
            <div className={`text-center mb-[1rem]`}>
              <img alt="logo" src={mtn} className={` w-[60px]  mx-auto `} />
              <span className="block mx-auto text-center text-[12px] text-[#79747E] mt-[.3rem]">
                {user.mobile}
              </span>
            </div>
            <div className="w-[80%] mx-auto text-[12px] ">
              <div className="flex justify-between items-center mb-[.5rem] ">
                {" "}
                <span className="font-iran-reg text-[13px]">نوع اپراتور</span>
                <span className="font-iran-extrabold text-[13px]">ایرانسل</span>
              </div>
              <div className="flex justify-between items-center">
                {" "}
                <span className="font-iran-reg text-[13px]"> مبلغ + مالیات</span>
                {/* <span>21800 ریال</span> */}
                <span className="font-iran-extrabold text-[13px]">
                  {formatNumberWithCommas("21800")} ریال
                </span>
              </div>
            </div>
          </div>
          <div className="w-full mb-[2rem]">
            <p className="text-[13px]  font-iran-medium mb-[0.6rem] text-right pr-[8px]">
              پرداخت از
            </p>
            <PaymentTypes action={onchange} setWitch={setWitch} witch={witch} />
          </div>
        </div>
      </div>
      <div className=" p-[1rem]">
        <FullButton isActive={true} text={"پرداخت"} action={() => senddata()} />
      </div>
    </div>
  );
}
