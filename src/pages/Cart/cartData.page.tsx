import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { formatNumberWithCommas } from "../../utils/PriceSeparators";

//img
import bank from "../../assets/img/icon/payment/bank.svg";

//component
import TopBar from "../../component/base/TopBar";
import FullButton from "../../component/base/FullButton";


export default function CartData() {

  let navigate = useNavigate();
  const datePickerRef = useRef<any>();
  const [value1, setValue] = useState<any>(new DateObject(""));
  const [activeBtn, setActiveBtn] = useState(true);
  const location = useLocation();
  const [formData, setFormData] = useState({
    cvv2: "",
    expDate: value1,
    pin: "",
  });
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.value != null) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  };

  const senddata = () => {
    navigate("/CartPaymentResult");
  };

  function handleChangeDate(value: any) {
    setValue(value);
  }

  return (
    <div
      dir="rtl"
      className="h-[100vh] w-ful overflow-hidden bg-[#FFF] flex flex-col justify-between"
    >
      <div>
        <TopBar prevLink={location.state?.link} title={location.state?.label} />
        <div className=" max-h-[100%] overflow-y-scroll h-auto p-[1rem]  w-full font-iran-medium ">
          <div className="border-b-2 border-dashed border-[#c8c7ca]  px-[1.5rem]">
            <div className="w-full flex justify-between items-center p-[.2rem] mb-[.5rem] ">
              <span className="text-[#79747E] text-[12px]"> نام گیرنده</span>
              <span className="text-[13px] font-iran-extrabold">سحر میرحسینی </span>
            </div>
            <div className="w-full flex justify-between items-center p-[.2rem] mb-[.5rem] ">
              <span className="text-[#79747E] text-[12px]"> مبلغ واریزی </span>
              <span  className="text-[13px] font-iran-extrabold"> {formatNumberWithCommas("3350000")}ریال</span>
            </div>
            {/* <div className="w-full flex justify-between items-center p-[.2rem] mb-[.5rem] ">
              <span className="text-[#79747E] text-[12px]"> بانک مقصد </span>
              <span className="text-[12px] font-[600] flex">
                {" "}
                بانک شهر
                <img
                  className="mr-[.5rem]"
                  src={bank}
                  alt="bank icon "
                  height="19px"
                  width="17px"
                />
              </span>
            </div> */}
            <div className="w-full flex justify-between items-center p-[.2rem] mb-[.5rem] ">
              <span className="text-[#79747E] text-[12px]"> شماره کارت </span>
              <span className="text-[12px] font-[600]">۵۰۴۱۷۲۱۰۴۵۴۵۶۷۷۶</span>
            </div>
          </div>
          <div className="text-right text-[13px] font-iran-semibold my-[1rem]">
            اطلاعات کارت بانکی عضو شتاب خود را وارد نمایید
          </div>
          <div className="grid grid-cols-2 gap-[1rem]">
            <div>
              <div className="text-right text-[13px] font-iran-medium mb-[.2rem]">
                cvv2
              </div>
              <div className="flex  items-center justify-start px-[.5rem] w-[100%] h-[50px] text-[12px] border-b-[1px] border-[#79747E] bg-[color:var(--primary-background-color)] rounded-t-[.5rem]">
                <input
                  type="text"
                  name="cvv2"
                  value={formData.cvv2}
                  onChange={(e) => handleChange(e)}
                  maxLength={16}
                  className="autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] w-full flex-1 bg-transparent text-[12px] text-right font-[400]  py-[.5rem] t   focus:outline-none focus:bg-transparent focus:border-none"
                  placeholder="رمز امنیتی"
                />
              </div>
            </div>
            <div>
              <div className="text-right text-[13px] font-[400] mb-[.2rem]">
                تاریخ انقضاء
              </div>
              <div className="flex  items-center justify-start px-[.5rem] w-[100%] h-[50px] text-[12px] border-b-[1px] border-[#79747E] bg-[color:var(--primary-background-color)] rounded-t-[.5rem]">
                <DatePicker
                  onlyMonthPicker
                  format="YYYY/MM"
                  calendar={persian}
                  locale={persian_fa}
                  ref={datePickerRef}
                  inputClass={"custom-input-datepicker"}
                  className={"custom-calendar-datepicker"}
                  value={value1}
                  onChange={handleChangeDate}
                />
              </div>
            </div>
            <div>
              <div className="text-right text-[13px] font-[400] mb-[.2rem]">
                رمز دوم
              </div>
              <div className="flex  items-center justify-start px-[.5rem] w-[100%] h-[50px] text-[12px] border-b-[1px] border-[#79747E] bg-[color:var(--primary-background-color)] rounded-t-[.5rem]">
                <input
                  type="text"
                  name="pin"
                  value={formData.pin}
                  onChange={(e) => handleChange(e)}
                  className="autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] w-full flex-1 bg-transparent text-[12px] text-right font-[400]  py-[.5rem] t   focus:outline-none focus:bg-transparent focus:border-none font-iran-medium"
                  placeholder="رمز ایستا یا پویا"
                />
              </div>
            </div>

            <div className=" text-[14px] font-[600] flex items-center justify-center p-[.5rem] pt-[1.5rem] text-[#2B9AFF]">
              درخواست رمز پویا
            </div>
          </div>
          
        </div>
      </div>
      <div className=" px-[1rem] mb-[40px]">
        <FullButton
          isActive={activeBtn}
          text={"ادامه"}
          action={() => senddata()}
        />
      </div>
    </div>
  );
}
