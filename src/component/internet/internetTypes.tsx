import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import internetType from "../../assets/img/icon/internetCharge/internetType.svg";

export default function InternetTypes({ action, label, price }: any) {
  return (
    <div className="flex justify-between items-center gap-[1rem] mb-[1rem]">
      <div className="flex items-center gap-[.5rem]">
        <img src={internetType} alt="icon" />
        <div className="flex flex-col">
          <span className="text-[12px]"> {label} </span>
          <span className="text-[11px] mt-[.3rem] text-[#79747E]">
            مبلغ + مالیات
          </span>
        </div>
      </div>
      <div className="flex items-center text-[12px]">
        <span>{price} ریال</span>
        <FontAwesomeIcon
          onClick={() => action()}
          icon={faAngleLeft}
          className="h-[14px] w-[14px] mr-[.5rem]  text-[color:var(--warning-color)]"
        />
      </div>
    </div>
  );
}
