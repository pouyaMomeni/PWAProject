import {
  priceSeparator,
  formatNumberWithCommas,
} from "../../utils/PriceSeparators";

export default function ChargeAmount({
  action,
  value,
  isDefault = false,
}: any) {
  return (
    <label className="w-full text-center ">
      <input
        defaultChecked={isDefault}
        onChange={(e) => action(e)}
        type="radio"
        name="totalamount"
        value={value}
        className="hidden peer "
      />
      <span className="peer-checked:bg-[color:var(--primary-color)] peer-checked:text-[#FFF] inline-block text-[12px] bg-[#E9EEEF99] font-iran-reg  px-[1rem] py-[.5rem] whitespace-nowrap rounded-[4px] w-[82px] text-center">
        {formatNumberWithCommas(value)} ریال
      </span>
    </label>
  );
}
