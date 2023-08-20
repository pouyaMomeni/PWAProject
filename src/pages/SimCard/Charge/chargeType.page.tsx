import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

//component
import FullButton from "../../../component/base/FullButton";
import TopBar from "../../../component/base/TopBar";
import ChargeAmount from "../../../component/simCharge/ChargeAmount";

const prices = ["10000", "20000", "50000", "100000", "200000", "500000"];

export default function ChargeType() {
  let navigate = useNavigate();
  const [activeBtn, setActiveBtn] = useState(true);
  const [opratorId, setOperatorId] = useState(0);
  const [formData, setFormData] = useState({
    phonnumber: "",
    operatorid: opratorId,
    totalamount: "50000",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const senddata = () => {
    navigate("/paymentType", { state: { prevPage: "/chargeType" } });
  };

  return (
    <div
      dir="rtl"
      className="h-[100vh] w-ful overflow-hidden bg-[#FFF] flex flex-col justify-between"
    >
      <div className=" ">
        <TopBar prevLink={"/simCharge"} title={"انتخاب نوع شارژ"} />
        <div className=" max-h-[100%] overflow-y-scroll h-auto p-[1rem]  w-full mx-auto ">
          <div className="w-full px-[1rem] mb-[2rem]">
            <p className="text-[13px] tracking-wider font-semibold mb-[1rem] text-right pr-[8px] text-black">
              نوع شارژ خود را انتخاب کنید
            </p>
            <div className="grid grid-cols-3 items-center justify-center gap-[1rem]  ">
              {prices.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <ChargeAmount
                      isDefault={item == "20000" ? true : false}
                      action={handleChange}
                      value={item}
                    />
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className=" p-[1rem]">
        <FullButton
          isActive={activeBtn}
          text={"ادامه"}
          action={() => senddata()}
        />
      </div>
    </div>
  );
}
