import FullButton from "../base/FullButton";
import VerificationInput from "react-verification-input";

export default function VerificationCode(props: any) {
  return (
    <>
      <div id="verify" className="w-full mx-auto p-[2rem]">
        <div className="text-right text-[12px] mb-[.5rem] font-[400]">
          کد تایید به شماره شما ارسال شد. لطفا آن را وارد نمایید.
        </div>
        <div className=" flex  text-center mx-auto items-center  ">
          <div className="flex justify-center w-full ">
            <VerificationInput
              autoFocus
              onChange={props.inputAction}
              length={4}
              validChars="0-9"
              placeholder=""
              classNames={{
                container: "verifInputContainer",
                character: "verifInputcharacter",
                characterInactive: "character--inactive",
                characterSelected: "characterSelected",
              }}
            />
          </div>
        </div>
        <div
          dir="rtl"
          className="flex justify-between items-center mb-[2rem] mt-[.7rem] text-[12px]"
        >
          {props.min == 0 && props.sec == 0 ? (
            <button
              onClick={props.resendbuttonAction}
              className="bg-transparent"
              style={{ direction: "rtl" }}
            >
              ارسال مجدد کد
            </button>
          ) : (
            <div>
              {" "}
              <span>
                {props.min}:{props.sec < 10 ? `0${props.sec}` : props.sec}
              </span>{" "}
              مانده تا دریافت مجدد کد
            </div>
          )}
          <button
            onClick={props.confirmButtonAction}
            className=" bg-transparent   text-[color:var(--warning-color)] "
          >
            ویرایش شماره
          </button>
        </div>
        <FullButton
          isActive={props.isActive}
          text={"تایید کد"}
          action={props.buttonAction}
        />
      </div>
    </>
  );
}
