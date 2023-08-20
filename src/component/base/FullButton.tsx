import Dic from "./Dic";


export default function FullButton(props: any) {
  return (
    <div className="w-full ">
      <button
        disabled={!props.isActive}
        onClick={props.action}
        className={`w-full h-[44px] text-center  text-[16px] font-[400] font-iran-reg  ${
          props.isActive
            ? "text-[#FFF] bg-[color:var(--primary-color)]"
            : "text-[rgba(50,88,42,.4)] bg-[color:var(--secondary-background-color)]"
        } rounded-[8px] border-none   `}
      >
        {props.text}
      </button>
    </div>
  );
}
