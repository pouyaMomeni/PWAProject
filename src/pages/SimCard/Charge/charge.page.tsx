import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

//api
import ChargeService from "./charge.service";

//component
import FullButton from "../../../component/base/FullButton";
import TopBar from "../../../component/base/TopBar";
import OpratorAndMobile from "../../../component/OpratorAndMobile";

//redux
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";


export default function Charge() {
  let navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  const [activeBtn, setActiveBtn] = useState(false);
  const [sendstatus, setstatus] = useState(false);
  const [opratorId, setOperatorId] = useState(0);
  const [formData, setFormData] = useState({
    phonnumber: "",
    operatorid: opratorId,
    totalamount: "50000",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name != "totalamount") {
      if (e.target.value.length == 11) {
        setActiveBtn(true);
      } else {
        setActiveBtn(false);
      }
    }
  };

  const senddata = () => {
    // formData.operatorid = opratorId;
    // if (formData.phonnumber == "" || formData.totalamount == "") {
    //   return Swal.fire({
    //     width: 300,
    //     confirmButtonText: `تایید`,
    //     showDenyButton: false,
    //     confirmButtonColor: "#32582A",
    //     cancelButtonColor: "#d33",
    //     customClass: {
    //       title: "swal2-warning",
    //       icon: "swal2-icon",
    //     },
    //     icon: "warning",
    //     title: "لطفا موارد خواسته شده را به درستی وارد نمایید",
    //   });
    // }
    // setstatus(true);
    // ChargeService.BuyDirectCharge(formData).then((p) => {
    //   setstatus(false);
    //   switch (p.data.code) {
    //     case "-1112":
    //       Swal.fire({
    //         icon: "warning",
    //         title: p.data.description,
    //         customClass: "text-[14px] ",
    //       });
    //       break;
    //     case "23":
    //       Swal.fire("شماره متعلق به این اپراتور نمیباشد");
    //       break;
    //     case "405610009":
    //       Swal.fire("شماره متعلق به این اپراتور نمیباشد");
    //       break;
    //     case "200":
    //       Swal.fire({
    //         icon: "success",
    //         title: "شارژ شماره وارد شده با موفقیت انجام شد",
    //         text: "شماره تراکنش:" + p.data.referenceNumber,
    //         customClass: "text-[14px]",
    //       });
    //       break;
    //   }
    // });

    navigate("/chargeType", { state: { prevPage: "/simCharge" } });
  };

  const handleUserMobile = () => {
    setFormData({ ...formData, phonnumber: user.mobile });
    setActiveBtn(true);
  };

  return (
    <div
      dir="rtl"
      className="h-[100vh] w-ful overflow-hidden bg-[#FFF] flex flex-col justify-between"
    >
      <div className=" ">
        <TopBar prevLink={"/home"} title={"شارژ سیم کارت"} />
        <div className=" max-h-[100%] overflow-y-scroll h-auto p-[1rem]  w-full  ">
          <OpratorAndMobile
            opratorAction={setOperatorId}
            id={opratorId}
            mobile={formData.phonnumber}
            changeNumberAction={handleChange}
            userMobile={handleUserMobile}
          />
        </div>
      </div>
      <div className=" px-[1rem] mb-[40px]">
        <FullButton
          isActive={activeBtn}
          text={"ادامه"}
          action={() => senddata()}
        />
      </div>
    </div>
  );
}
