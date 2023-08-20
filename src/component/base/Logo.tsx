import logoImg from "../../assets/img/logo.svg";

export default function Logo(props: any) {
  return (
    <div className="flex flex-col justify-center items-center ">
      <img src={logoImg} alt="logo" className="w-[90px]  text-[14px]" />
      {props.hasLabel && <span className="mt-[.5rem]">موبایل بانک ا تباع</span>}
    </div>
  );
}
