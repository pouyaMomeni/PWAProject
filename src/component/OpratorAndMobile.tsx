import OpratorType from "./simCharge/OpratorType";
import mtn from "../assets/img/charge/irancell.png";
import mci from "../assets/img/charge/mci.png";
import rightel from "../assets/img/charge/rightel.png";
import user from "../assets/img/icon/simCharge/user.svg";
import sim from "../assets/img/icon/simCharge/sim.svg";

export default function OpratorAndMobile({opratorAction,id,mobile,changeNumberAction,userMobile}: any) {


  return (
    <>
      <div className=" px-[1rem]">
        <div className="w-full mb-[2rem]">
          <p className="font-iran-light text-[14px] text-[#000] font-[400] mb-[1rem] text-right pr-[8px]">
            انتخاب اپراتور
          </p>
          <div className="grid grid-cols-3 items-center gap-[20px] h-[60px] ">
            <OpratorType
              img={mtn}
              action={() => opratorAction(0)}
              value={0}
              label={"ایرانسل"}
              opratorId={id}
            />
            <OpratorType
              img={mci}
              action={() => opratorAction(1)}
              value={1}
              label={"همراه اول"}
              opratorId={id}
            />
            <OpratorType
              img={rightel}
              action={() => opratorAction(2)}
              value={2}
              label={"رایتل"}
              opratorId={id}
            />
          </div>
        </div>
        <div className="w-full h-auto ">
          <div className="font-iran-light text-right text-[12px] text-[#000] mb-[.5rem]">
            شماره سیم کارت اعتباری خود را وارد نمایید
          </div>
          <div className="flex mb-[3rem] items-center justify-start px-[.5rem] w-[100%] h-[56px] rounded-t-[8px] text-[12px] border-b-[1px] border-[#79747E] bg-[color:var(--primary-background-color)]">
            <input
              type="text"
              name="phonnumber"
              value={mobile}
              onChange={(e) => changeNumberAction(e)}
              maxLength={11}
              className="autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] w-full flex-1 bg-transparent text-[14px] text-right  py-[.5rem] t   focus:outline-none focus:bg-transparent focus:border-none font-iran-bold"
              placeholder="مانند ۰۹۳۶۱۹۸۸۴۹۴"
            />
            <img src={user} alt="icon" className="w-[20px] h-[20px] " />
            <img onClick={()=>userMobile()} src={sim} alt="icon" className="w-[22px] h-[22px]" />
          </div>
        </div>
      </div>
    </>
  );
}
