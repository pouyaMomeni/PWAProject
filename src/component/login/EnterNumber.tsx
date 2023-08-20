import FullButton from "../base/FullButton";
import phoneIcon from "../../assets/img/icon/phone.svg";

export default function EnterNumber(props: any) {
  return (
    <>
      <div className="w-full mx-auto p-[2rem]">
        <div className="text-right text-[12px] font-[400] mb-[.5rem]">
          لطفاً شماره تلفن همراه خود را وارد نمایید.
        </div>
        <div className="flex mb-[3rem] items-center justify-start px-[1rem] w-[100%] h-[56px] text-[14px] border-b-[1px] border-[#79747E] bg-[var(--primary-background-color)] rounded-t-[8px]">
          <img src={phoneIcon} alt="icon" className="w-[15px] h-[24px]" />
          <input
            maxLength={11}
            type="text"
            className="w-full flex-1 bg-transparent autofill:shadow-[inset_0_0_0px_1000px_rgb(245,245,245)] text-[12px] text-right font-[400] px-[1rem] py-[.5rem]  focus:outline-none"
            placeholder={"شماره تلفن همراه"}
            name="phonnumber"
            value={props.formData.phonnumber}
            onChange={props.inputAction}
          />
        </div>
        <FullButton
          text={"ادامه"}
          isActive={props.isActive}
          action={props.buttonAction}
        />
      </div>
    </>
  );
}
