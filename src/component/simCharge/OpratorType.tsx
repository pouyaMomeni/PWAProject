export default function OpratorType({
  action,
  opratorId,
  label,
  value,
  img,
}: any) {

  return (
    <div
      onClick={(value)=>action(value)}
      className={`text-center   ${
        opratorId == value ? "font-[600]" : " grayscale-[1]"
      }`}
    >
      <img alt="" src={img} className={`h-[19px]  mx-auto `} />
      <span className="block mx-auto text-center text-[12px] mt-[.5rem]">
        {label}
      </span>
    </div>
  );
}
