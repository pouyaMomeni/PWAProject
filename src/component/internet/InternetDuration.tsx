export default function InternetDuration({
  action,
  type,
  label,
  value,
  checked,
  setRangeOf,
}: any) {
  function handleClick() {
    setRangeOf(type);
  }
  return (
    <label onClick={handleClick}>
      <input
        defaultChecked={checked}
        // onChange={(e) => action(e)}
        type="radio"
        name="totalamount"
        value={value}
        className="hidden peer "
      />
      <span className="peer-checked:bg-[color:var(--warning-color)] peer-checked:text-[#FFF] w-[66px] text-center inline-block text-[13px] bg-[#E9EEEF99] px-[1rem] py-[.5rem] whitespace-nowrap rounded-[30px]">
        {label}
      </span>
    </label>
  );
}
