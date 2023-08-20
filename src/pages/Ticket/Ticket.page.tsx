import React, { useState } from "react";
import TopBar from "../../component/base/TopBar";

import TicketImg from "../../assets/img/icon/ticket 1.svg";
import Ticket2 from "../../assets/img/icon/ticket2.svg";
import Ticket3 from "../../assets/img/icon/ticket3.svg";
import Ticket4 from "../../assets/img/icon/ticket4.svg";
import addSquare from "../../assets/img/icon/add-square.svg";
import minusSquare from "../../assets/img/icon/minus-square.svg";

import FullButton from "../../component/base/FullButton";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { dividerClasses } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { formatNumberWithCommas } from "../../utils/PriceSeparators";

const TicketData = [
  {
    label: "تک سفره مشترک مترو و بی ار تی",
    price: "20,000",
    name: "brt",
    icon: Ticket2,
  },
  {
    label: "تک سفره کرج",
    price: "20,000",
    name: "tak-krj",
    icon: Ticket3,
  },
  {
    label: "تک سفره هشتگرد",
    price: "20,000",
    name: "tak-hsht",
    icon: Ticket3,
  },
  {
    label: "فرودگاه امام خمینی",
    price: "20,000",
    name: "air",
    icon: Ticket4,
  },
];

type Anchor = "top" | "left" | "bottom" | "right";

function Ticket() {
  const price = "20000";
  const [page, setPage] = useState<number>(1);
  const [popUp, setPopUp] = useState<boolean>(false);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [TicketCouter, setTicketCouter] = useState<number>(1);

  const navigate = useNavigate();

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

  const MyList = (anchor: Anchor) => <div>hello</div>;
  const list = (anchor: Anchor) => (
    <div
      className="w-full h-[270px]  "
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className=" mx-3  mt-2 ">
        <div className="flex justify-between border-b-[1px] border-[#cfcbcb] pb-1">
          <div onClick={toggleDrawer(anchor, false)}>
            <HighlightOffIcon fontSize="small" color="error" />
          </div>{" "}
          <p className=" text-[15px] font-iran-medium">خرید بلیط تک نفره</p>
        </div>
        <div className="text-center flex flex-col items-center mt-3">
          <img src={Ticket2} width={"42px"} alt="" />
          <p className=" text-[15px] font-iran-bold">
            تک سفره مشترک مترو و بی آر تی
          </p>
          <div className="flex justify-between w-[84%] mt-2">
            <div className="flex">
              <img
                src={minusSquare}
                onClick={() =>
                  setTicketCouter((prev) => {
                    if (prev === 1) {
                      return 1;
                    } else {
                      return prev - 1;
                    }
                  })
                }
                alt=""
              />
              <span
                className="border-b-[1.3px] mx-3"
                style={{ padding: 0, height: 25, width: 28 }}
              >
                {TicketCouter}
              </span>
              <img
                src={addSquare}
                onClick={() => setTicketCouter((prev) => prev + 1)}
                alt=""
              />
            </div>
            <p className=" text-[15px] font-iran-medium">تعداد بلیط</p>
          </div>
          <div className="flex justify-between w-[84%] mt-3">
            <div className="flex">
              <p
                dir="rtl"
                className=" text-[15px] font-iran-medium text-primary-green"
              >
                {formatNumberWithCommas(
                  (parseInt(price) * TicketCouter).toString()
                )}{" "}
                ريال
              </p>
            </div>
            <p className=" text-[15px] font-iran-medium">قیمت کل</p>
          </div>
        </div>
      </div>
      <div className="mx-3 mt-4">
        {/* <FullButton
          isActive={true}
          text={"خرید بلیط1"}
          // action={toggleDrawer(anchor, true)}
          //   action={navigate("payment")}
          action={console.log("d")}
        /> */}
        {/* <button onClick={() => console.log("eh")}>karid</button> */}
        <button
          //   disabled={!props.isActive}
          onClick={() => navigate("/Ticket/buy")}
          className={`w-full h-[44px] text-center  text-[16px] font-[400] font-iran-reg  rounded-[8px] border-none bg-pr bg-primary-main text-[#fff]  `}
        >
          خرید بلیط
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <div className="w-full h-f h-screen flex flex-col">
        <TopBar prevLink={"/home"} title={"خرید بلیط مترو و اتوبوس"} />
        {/* Dynamic Part */}
        {page === 1 ? (
          <div className="h-full flex flex-col justify-between">
            <div className="px-3 flex flex-col items-center mt-9">
              <img src={TicketImg} alt="" />
              <p className="text-[14px] font-iran-medium mt-5">
                کاربر گرامی در حال حاضر شما بلیط فعالی ندارید
              </p>
              <p className="text-[12px] font-iran-reg mt-4">
                لطفا برای خرید بلیط روی دکمه خرید بلیط بزنید
              </p>
            </div>
            <div className="mb-[40px] mx-3">
              <FullButton
                isActive={true}
                text={"خرید بلیط"}
                action={() => {
                  setPage((prev) => prev + 1);
                }}
              />
            </div>
          </div>
        ) : page === 2 ? (
          <div className="bg-[#f5f5f5] h-full flex flex-col items-center">
            <div className="w-[88%] bg-[#fff] h-11 flex flex-col mt-2 rounded-sm justify-center">
              <p
                className="text-[10px] font-iran-reg text-right px-3"
                dir="ltr"
              >
                مهلت استفاده از بلیت تک سفره محدود است و در صورت عدم استفاده
                بلیت منقضی می گردد
              </p>
            </div>
            {TicketData?.map((item, i) => (
              <div
                className="bg-[#fff] rounded-md mt-3 w-[88%] h-20 justify-between flex flex-col px-3"
                key={i}
              >
                <div className="flex justify-between pt-2">
                  <span
                    dir="rtl"
                    className="text-primary-green font-iran-medium text-[14px] pt-[2px]"
                  >
                    {item.price} ريال
                  </span>
                  <div className="flex">
                    <p className="text-[13px] pt-[2px] font-iran-medium w-[200px] text-right mr-3">
                      {item.label}
                    </p>
                    <img src={item.icon} alt="" />
                  </div>
                </div>
                <div className="">
                  <div>
                    {(["bottom"] as const).map((anchor) => (
                      <React.Fragment key={anchor}>
                        <div className="">
                          <button
                            className="ticket-btn mb-2 text-[15px] font-iran-reg py-[3px]"
                            onClick={toggleDrawer(anchor, true)}
                          >
                            انتخاب و خرید
                          </button>
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
              </div>
            ))}
          </div>
        ) : (
          <div>mello</div>
        )}
      </div>
    </div>
  );
}

export default Ticket;
