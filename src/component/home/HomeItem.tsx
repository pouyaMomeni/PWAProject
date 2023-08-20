import { Link } from "react-router-dom";

export default function HomeItem(props: any) {
  let { icon, link, label } = props;
  return (
    <div className="w-[100%] h-full  text-center  text-[14px] mb-[1rem]">
      <Link to={link}>
        {" "}
        <img alt="icon" src={icon} className="w-[50px] mx-auto" />
        <p className="text-[13px] font-iran-semibold mt-[.5rem]">{label}</p>
      </Link>
    </div>
  );
}
