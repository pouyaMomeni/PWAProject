import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//mui
import Drawer from "@mui/material/Drawer";

//component
import TopBar from "../../../component/base/TopBar";
import FullButton from "../../../component/base/FullButton";
import OpratorAndMobile from "../../../component/OpratorAndMobile";

//redux
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";

type Anchor = "top" | "left" | "bottom" | "right";
export default function Internet() {
  let navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);

  const [activeBtn, setActiveBtn] = useState(false);
  const [opratorId, setOperatorId] = useState(0);
  const [formData, setFormData] = useState({
    phonnumber: "",
    operatorid: opratorId,
    totalamount: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.value.length == 11) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  };

  const handleChangeType = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    navigate("/internetType");
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <div
      className="w-full h-[220px] rounded-[24px] scrol-hide no-scrollbar"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className=" text-[12px] text-center p-[1rem] flex flex-col justify-center border-b border-[color:var(--secondary-text-color)]">
        <span className="text-[color:var(--secondary-color)] font-[600]">
          {" "}
          نوع سیم کارت
        </span>
        <span className="text-[color:var(--secondary-text-color)] mt-[.5rem] ">
          ۰۹۳۶۱۹۵۹۴۷۸
        </span>
      </div>
      <hr />
      <label>
        <input
          onChange={(e) => handleChangeType(e)}
          type="radio"
          name="simType"
          value="1"
          className="hidden peer "
        />
        <div className="text-right p-[.5rem] pr-6 text-[13px] font-iran-reg text-[#332F2F]">
          دائمی
        </div>
      </label>
      <hr />
      <label>
        <input
          onChange={(e) => handleChangeType(e)}
          type="radio"
          name="simType"
          value="2"
          className="hidden peer "
        />
        <div className="text-right p-[.5rem] pr-6 text-[13px] font-iran-reg  text-[#332F2F]">
          اعتباری
        </div>
      </label>
      <hr />
      <button className="bg-white text-[color:var(--primary-color)] text-center rounded-lg  p-[.5rem] w-[90%] mx-auto block mb-[1.5rem] mt-[1.5rem] border border-[color:var(--primary-color)]">
        انصراف
      </button>
    </div>
  );

  const handleUserMobile = () => {
    setFormData({ ...formData, phonnumber: user.mobile });
    setActiveBtn(true);
  };

  return (
    <div
      dir="rtl"
      className="h-[100vh] w-ful overflow-hidden bg-[#FFF] flex flex-col justify-between"
    >
      <div className="">
        <TopBar prevLink={"/home"} title={"خرید بسته اینترنت"} />
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
      <div>
        {(["bottom"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <div className=" px-[1rem] mb-[40px]">
              <FullButton
                isActive={activeBtn}
                text={"ادامه"}
                action={toggleDrawer(anchor, true)}
              />
            </div>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
