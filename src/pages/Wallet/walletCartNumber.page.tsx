import { useEffect, useState } from "react";
import bank from "../../assets/img/icon/payment/bank.svg";
import { useNavigate } from "react-router-dom";
import TopBar from "../../component/base/TopBar";
import FullButton from "../../component/base/FullButton";

export default function WalletCartNumber() {
  //جهت مسیریابی
  let navigate = useNavigate();

  const [activeBtn, setActiveBtn] = useState(false);
  const [opratorid, setoperator] = useState(0); //شماره اپراتور
  const [formData, setFormData] = useState({
    cartNumber: "",
    operatorid: opratorid,
    totalamount: "",
  });
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.value.length == 16) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  };

  const senddata = () => {
    navigate("/Amount", { state: {prevlink: "/WalletCartNumber",label:"افزایش موجودی"} } );
  };

  return (
    <div
      dir="rtl"
      className="h-[100vh] w-ful overflow-hidden bg-[#FFF] flex flex-col justify-between"
    >
      <div>
        {" "}
        <div className="shadow-sm ">
          <TopBar prevLink={"/home"} title={"افزایش موجودی"} />
        </div>
        <div className=" max-h-[100%] overflow-y-scroll h-auto p-[1rem]  w-full  ">
          <div className=" p-[1rem]">
            <div className="w-full h-auto ">
              <div className="text-right text-[12px] font-[400] mb-[.5rem]">
              شماره کارت بانکی عضو شتاب خود را وارد نمایید
              </div>
              <div className="flex mb-[3rem] items-center justify-start px-[.5rem] w-[100%] h-[56px] text-[14px] border-b-[1px] border-[#79747E]">
                <input
                  type="text"
                  name="cartNumber"
                  value={formData.cartNumber}
                  onChange={(e) => handleChange(e)}
                  maxLength={16}
                  className="autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] w-full flex-1 bg-transparent text-[12px] text-right font-[400]  py-[.5rem] t   focus:outline-none focus:bg-transparent focus:border-none"
                  placeholder="شماره کارت ۱۶ رقمی"
                />
                {activeBtn && (
                  <img
                    src={bank}
                    alt="bank icon "
                    height={"23px"}
                    width="21px"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" p-[1rem]">
        <FullButton
          isActive={activeBtn}
          text={"ادامه"}
          action={() => senddata()}
        />
      </div>
    </div>
  );
}
