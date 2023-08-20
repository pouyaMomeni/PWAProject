import React, { useState,useRef } from 'react'
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useNavigate } from 'react-router-dom';
// Components
import TopBar from '../../component/base/TopBar'
// SVG
import Ticket2 from "../../assets/img/icon/ticket2.svg";
import Bank from '../../assets/img/icon/payment/bank.svg'
import FullButton from '../../component/base/FullButton';

const BuyTicket = () => {
    let navigate = useNavigate();
    const datePickerRef = useRef<any>();
    const [value1, setValue] = useState<any>(new DateObject(""));
    const [activeBtn, setActiveBtn] = useState(true);
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

      function handleChangeDate(value: any) {
        setValue(value);
      }
      const senddata = () => {
        navigate("/paymentResult");
      };
  return (
    <div
      dir="rtl"
      className=" w-ful overflow-hidden bg-[#FFF] flex flex-col justify-between"
    >
        <TopBar title={"پرداخت اینترنتی"} prevLink="/Ticket"/>
        <div className='flex flex-col p-2 justify-center items-center gap-2 '>
            <img src={Ticket2} alt="logo" width={32} />
            <p className='font-bold'>خرید بلیط تک سفره</p>
        </div>
        <div className='w-[full] flex justify-around mt-4 border-b-2 border-dashed border-[#c8c7ca]  pb-6'>
            <p>مبلغ</p>
            <p> </p>
            <p className=' text-primary-green'>2000 تومان</p>
        </div>
        <div className='w-[full] flex justify-around mt-6 border-b-2 border-[#a7a3a3] pb-6  '>
            <p>۵۰۴۱۷۲۱۰۴۵۴۵۶۷۷۶</p>
            <p> </p>
            <img src={Bank} alt=""  width={32} />
        </div>

        <div className="grid grid-cols-2 gap-[1rem] p-6">
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

          <div className=" px-[1rem] mb-[40px]">
            <FullButton
            isActive={activeBtn}
            text={"ادامه"}
            action={() => senddata()}
            />
      </div>
    </div>
  )
}

export default BuyTicket