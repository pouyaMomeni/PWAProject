import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { numberToWords } from "@persian-tools/persian-tools";

//img
import bank from "../../assets/img/icon/payment/bank.svg";
import bankLogo from "../../assets/img/cartToCart/bankLogo.png";
import sim from "../../assets/img/cartToCart/sim.png";

//component
import TopBar from "../../component/base/TopBar";
import FullButton from "../../component/base/FullButton";

export default function Cart() {
  let str = "5047061079015432";
  let cartNumberArray = str.match(/.{1,4}/g);

  //جهت مسیریابی
  let navigate = useNavigate();

  const [activeBtn, setActiveBtn] = useState(false);
  const [opratorid, setoperator] = useState(0); //شماره اپراتور
  const [formData, setFormData] = useState({
    cartNumber: "",
    operatorid: opratorid,
    totalamount: "",
    amount: "",
  });
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name == "cartNumber" && e.target.value.length == 16) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
    if (e.target.name == "amount" && e.target.value != "") {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  };

  const senddata = () => {
    navigate("/CartData", {
      state: { link: "/CartToCart", label: "کارت به کارت" },
    });
  };

  return (
    <div
      dir="rtl"
      className="h-[100vh] w-ful overflow-hidden bg-[#FFF] flex flex-col justify-between"
    >
      <div>
        {" "}
        <TopBar prevLink={"/home"} title={"کارت به کارت"} />
        <div className=" max-h-[100%] overflow-y-scroll h-auto p-[1rem]  w-full  ">
          <div className=" px-[1rem]">
            <div className="w-full h-auto ">
              <div className="font-iran-medium">
                <div className="text-right text-[12px] font-iran-medium mb-[.5rem]">
                  کارت مبدأ
                </div>
                <div className="w-[full] max-w-[272px] max-h-[146px] rounded-[12px] px-[1.5rem] py-[1rem] bg-[color:var(--error-color)] mb-[1.5rem] mx-auto">
                  <img src={bankLogo} alt="logo" />
                  <div
                    dir="ltr"
                    className="text-white text-[14px] font-[500] text-center my-[.5rem] grid  grid-cols-4 gap-[.5rem]"
                  >
                    {cartNumberArray?.map((item, index) => {
                      return <span key={index}>{item}</span>;
                    })}
                  </div>
                  <img
                    src={sim}
                    alt="simcart "
                    className="mr-auto mb-[.5rem]"
                  />
                  <div className="flex justify-between font-iran-medium items-center text-white text-[12px] ">
                    <span>علی رفعتی</span>
                    <span>۱۴۰۴/۰۴</span>
                  </div>
                </div>
              </div>
              <div className="text-right text-[12px] font-iran-medium mb-[.5rem]">
                اطلاعات مقصد را وارد کنید
              </div>
              <div className="flex mb-[1.5rem] items-center justify-start px-[.5rem] w-[100%] h-[50px] text-[12px] border-b-[1px] border-[#79747E] bg-[color:var(--primary-background-color)] rounded-t-[.5rem] font-iran-medium">
                <input
                  type="text"
                  name="cartNumber"
                  value={formData.cartNumber}
                  onChange={(e) => handleChange(e)}
                  maxLength={16}
                  className="autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] w-full flex-1 bg-transparent text-[12px] text-right font-[400]  py-[.5rem] t   focus:outline-none focus:bg-transparent focus:border-none font-iran-medium"
                  placeholder="شماره کارت یا شبا (بدون IR)"
                />
                {formData.cartNumber.length == 16 && (
                  <img
                    src={bank}
                    alt="bank icon "
                    height={"23px"}
                    width="21px"
                  />
                )}
              </div>
              <div className="text-right text-[12px] font-iran-medium] mb-[.5rem]">
                مبلغ مورد نظر را وارد کنید
              </div>
              <div className="flex mb-[.5rem] items-center justify-start px-[.5rem] w-[100%] h-[50px] text-[12px] border-b-[1px] border-[#79747E] bg-[color:var(--primary-background-color)] rounded-t-[.5rem] ">
                <input
                  dir="rtl"
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={(e) => handleChange(e)}
                  className=" autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] w-full flex-1 bg-transparent text-[12px] text-center font-[400]  py-[.5rem]   focus:outline-none focus:bg-transparent focus:border-none font-iran-medium"
                  placeholder="مبلغ را وراد کنید"
                />
                <span className="text-[#79747E]">ریال</span>
              </div>
              {Number(formData?.amount) % 10 == 0 && (
                <div className="text-center text-[12px] text-[#2B9AFF] font-iran-medium">
                  {`${numberToWords(Number(formData?.amount) / 10)}`} تومان
                  {/* {Number(formData?.amount)} */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="px-[1rem] mb-[40px]">
        <FullButton
          isActive={activeBtn}
          text={"ادامه"}
          action={() => senddata()}
        />
      </div>
    </div>
  );
}
